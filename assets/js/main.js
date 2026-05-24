/* =============================================================
   SpoonerBoy Theme — Main JS
   Theme toggle, nav frost, scroll reveal, live data
   ============================================================= */

(function() {

  // ── Apply theme immediately (before DOMContentLoaded) to prevent flash ──
  var saved = localStorage.getItem('sb-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', function() {

    // ── Theme toggle ──
    var toggleBtn = document.getElementById('sb-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = saved === 'dark' ? '☀️' : '🌙';
      toggleBtn.addEventListener('click', function() {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        toggleBtn.textContent = next === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('sb-theme', next);
      });
    }

    // ── Nav frosted glass on scroll ──
    var nav = document.getElementById('sb-nav');
    if (nav) {
      var onScroll = function() {
        nav.classList.toggle('frosted', window.scrollY > 50);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll(); // run once on load
    }

    // ── Mark active nav link ──
    var path = window.location.pathname;
    document.querySelectorAll('.sb-link').forEach(function(a) {
      var href = a.getAttribute('href');
      if (href && href !== '/' && path.indexOf(href.replace(/\/$/, '')) === 0) {
        a.classList.add('active');
      } else if (href === '/' && path === '/') {
        a.classList.add('active');
      }
    });

    // ── Scroll reveal ──
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.sb-reveal, .sb-line-reveal, .sb-stagger').forEach(function(el) {
      observer.observe(el);
    });

    // ── Copy to clipboard helper (used on MC IP) ──
    document.querySelectorAll('.sb-copy-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var text = btn.getAttribute('data-copy');
        if (text) {
          navigator.clipboard.writeText(text).then(function() {
            btn.textContent = 'Copied!';
            setTimeout(function() { btn.textContent = 'Copy'; }, 2000);
          });
        }
      });
    });

    // ── Minecraft player count (on any page with .sb-mc-count) ──
    var mcEls = document.querySelectorAll('[data-mc-count]');
    if (mcEls.length) {
      fetch('https://api.mcsrvstat.us/3/playmc.spoonerboy.com')
        .then(function(r) { return r.json(); })
        .then(function(d) {
          var online = d.online ? (d.players && d.players.online != null ? d.players.online : 0) : '—';
          var max    = d.online ? (d.players && d.players.max    != null ? d.players.max    : '—') : '—';
          var status = d.online ? '🟢 Online' : '🔴 Offline';
          mcEls.forEach(function(el) {
            var type = el.getAttribute('data-mc-count');
            if (type === 'online')  el.textContent = online;
            if (type === 'max')     el.textContent = max;
            if (type === 'status')  el.textContent = status;
          });
        })
        .catch(function() {
          mcEls.forEach(function(el) { el.textContent = '—'; });
        });
    }

    // ── Reddit teaser (homepage only) ──
    var teaserEl = document.getElementById('hp-reddit-teaser');
    if (teaserEl) {
      loadRedditTeaser(teaserEl);
    }

    // ── Reddit full feed (community page only) ──
    var feedEl = document.getElementById('community-feed');
    if (feedEl) {
      loadRedditFeed(feedEl);
    }

    // ── GitHub repos (projects page only) ──
    var reposEl = document.getElementById('gh-repos');
    if (reposEl) {
      loadGithubRepos(reposEl);
    }

    // ── GitHub redirect countdown ──
    var countdownEl = document.getElementById('gh-countdown');
    if (countdownEl) {
      var count = 3;
      var interval = setInterval(function() {
        count--;
        if (count <= 0) {
          clearInterval(interval);
          countdownEl.textContent = 'Redirecting now...';
          window.location.href = 'https://github.com/SpoonerBoy';
        } else {
          countdownEl.textContent = 'Redirecting in ' + count + ' second' + (count !== 1 ? 's' : '') + '...';
        }
      }, 1000);
    }

  }); // end DOMContentLoaded

  // ── Reddit helpers ──
  function fmtScore(n) { return n >= 1000 ? (n / 1000).toFixed(1) + 'k' : n; }

  function timeAgo(utc) {
    var d = Math.floor((Date.now() / 1000) - utc);
    if (d < 3600)  return Math.floor(d / 60) + 'm ago';
    if (d < 86400) return Math.floor(d / 3600) + 'h ago';
    return Math.floor(d / 86400) + 'd ago';
  }

  var flairColors = {
    'Help':       ['rgba(234,88,12,0.1)',  '#ea580c'],
    'Question':   ['rgba(0,113,227,0.1)',  '#0071e3'],
    'News':       ['rgba(48,209,88,0.1)',  '#1a8a3c'],
    'Showcase':   ['rgba(124,58,237,0.1)', '#7c3aed'],
    'Discussion': ['rgba(255,159,10,0.1)','#b25000'],
    'Review':     ['rgba(255,69,58,0.1)',  '#c0392b']
  };

  function flairStyle(text) {
    if (!text) return '';
    var match = null;
    Object.keys(flairColors).forEach(function(k) {
      if (text.toLowerCase().indexOf(k.toLowerCase()) !== -1) match = flairColors[k];
    });
    return match ? 'background:' + match[0] + ';color:' + match[1] : 'background:var(--s2);color:var(--muted)';
  }

  function thumbHtml(p) {
    if (p.thumbnail && p.thumbnail.indexOf('http') === 0) {
      return '<img class="sb-reddit-thumb" src="' + p.thumbnail + '" alt="" loading="lazy" onerror="this.outerHTML=\'<div class=sb-reddit-thumb style=\\"display:flex;align-items:center;justify-content:center;font-size:18px\\">📝</div>\'">';
    }
    return '<div class="sb-reddit-thumb" style="display:flex;align-items:center;justify-content:center;font-size:18px">' + (p.is_self ? '📝' : '🔗') + '</div>';
  }

  function loadRedditTeaser(el) {
    Promise.all(['homelab', 'Ubiquiti', 'unifi'].map(function(sub) {
      return fetch('https://www.reddit.com/r/' + sub + '/hot.json?limit=5&raw_json=1')
        .then(function(r) { return r.json(); })
        .then(function(d) {
          var post = d.data.children.find(function(c) { return !c.data.stickied; });
          return { sub: sub, post: post ? post.data : null };
        });
    })).then(function(results) {
      var html = results.filter(function(r) { return r.post; }).map(function(r) {
        var p = r.post;
        var title = p.title.length > 85 ? p.title.slice(0, 85) + '…' : p.title;
        return '<a class="sb-reddit-card" href="https://reddit.com' + p.permalink + '" target="_blank" rel="noopener">' +
          '<div class="sb-reddit-sub">r/' + r.sub + '</div>' +
          '<div class="sb-reddit-title">' + title + '</div>' +
          '<div class="sb-reddit-meta"><span>&#9650; ' + fmtScore(p.score) + '</span><span>&#128172; ' + p.num_comments + '</span></div>' +
          '</a>';
      }).join('');
      el.innerHTML = html || '<div style="padding:40px;text-align:center;color:var(--muted);font-size:13px;font-family:\'DM Mono\',monospace">Could not load posts.</div>';
    }).catch(function() {
      el.innerHTML = '<div style="padding:40px;text-align:center;color:var(--muted);font-size:13px">Could not load posts.</div>';
    });
  }

  function loadRedditFeed(container) {
    var subs = [
      { name: 'homelab',        color: '#ea580c' },
      { name: 'Ubiquiti',       color: '#0071e3' },
      { name: 'unifi',          color: '#0079d3' },
      { name: 'HomeNetworking', color: '#7c3aed' },
      { name: 'pchelp',         color: '#16a34a' }
    ];

    subs.forEach(function(sub) {
      var section = document.createElement('div');
      section.style.marginBottom = '48px';
      section.innerHTML =
        '<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">' +
          '<div style="width:32px;height:32px;border-radius:50%;background:' + sub.color + ';display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#fff;flex-shrink:0">' + sub.name[0].toUpperCase() + '</div>' +
          '<div style="font-size:16px;font-weight:600;color:var(--text)"><a href="https://reddit.com/r/' + sub.name + '" target="_blank" rel="noopener" style="color:inherit;text-decoration:none">r/' + sub.name + '</a></div>' +
        '</div>' +
        '<div class="sb-reddit-grid" id="feed-' + sub.name + '">' +
          '<div style="padding:32px;text-align:center;color:var(--muted);font-size:13px;font-family:\'DM Mono\',monospace">Loading...</div>' +
        '</div>';
      container.appendChild(section);

      fetch('https://www.reddit.com/r/' + sub.name + '/hot.json?limit=6&raw_json=1')
        .then(function(r) { return r.json(); })
        .then(function(data) {
          var posts = data.data.children.filter(function(c) { return !c.data.stickied; }).slice(0, 5);
          var el = document.getElementById('feed-' + sub.name);
          if (!el) return;
          el.innerHTML = posts.map(function(c) {
            var p = c.data;
            var title = p.title.length > 90 ? p.title.slice(0, 90) + '…' : p.title;
            return '<a class="sb-reddit-card" href="https://reddit.com' + p.permalink + '" target="_blank" rel="noopener">' +
              '<div class="sb-reddit-inner">' +
                '<div style="flex:1;min-width:0">' +
                  (p.link_flair_text ? '<span class="sb-reddit-flair" style="' + flairStyle(p.link_flair_text) + '">' + p.link_flair_text + '</span>' : '') +
                  '<div class="sb-reddit-title">' + title + '</div>' +
                  '<div class="sb-reddit-meta"><span>&#9650; ' + fmtScore(p.score) + '</span><span>&#128172; ' + p.num_comments + '</span><span>' + timeAgo(p.created_utc) + '</span></div>' +
                '</div>' +
                thumbHtml(p) +
              '</div>' +
            '</a>';
          }).join('');
        })
        .catch(function() {
          var el = document.getElementById('feed-' + sub.name);
          if (el) el.innerHTML = '<div style="padding:32px;text-align:center;color:var(--muted);font-size:13px">Could not load r/' + sub.name + '</div>';
        });
    });
  }

  function loadGithubRepos(el) {
    fetch('https://api.github.com/users/SpoonerBoy/repos?sort=updated&per_page=12')
      .then(function(r) { return r.json(); })
      .then(function(repos) {
        var html = repos.filter(function(r) { return !r.fork; }).map(function(r) {
          var updated = new Date(r.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
          return '<a class="sb-repo" href="' + r.html_url + '" target="_blank" rel="noopener">' +
            '<div class="sb-repo-name">' + r.name + '</div>' +
            '<div class="sb-repo-desc">' + (r.description || 'No description') + '</div>' +
            '<div class="sb-repo-meta"><span>&#11088; ' + r.stargazers_count + '</span><span>&#128448; ' + r.forks_count + '</span><span>' + updated + '</span></div>' +
          '</a>';
        }).join('');
        el.innerHTML = html || '<div style="padding:40px;text-align:center;color:var(--muted);font-size:13px">No repos found.</div>';
      })
      .catch(function() {
        el.innerHTML = '<div style="padding:40px;text-align:center;color:var(--muted);font-size:13px">Could not load repos. <a href="https://github.com/SpoonerBoy" target="_blank" style="color:var(--blue)">View on GitHub &rarr;</a></div>';
      });
  }

  // Ghost injects "undefined" when a page body hasn't been saved/rendered yet.
  // Replace it with an empty string so the wrapper stays invisible but intact.
  document.querySelectorAll('.gh-content').forEach(function(el) {
    if (el.textContent.trim() === 'undefined') {
      el.innerHTML = '';
    }
  });

})();
