/* Sanchi Ahuja portfolio. All content lives in data.js; this file only draws it. */
(function () {
  'use strict';
  var D = window.SITE || {};
  var doc = document;
  doc.documentElement.classList.add('js');

  function $(sel, root) { return (root || doc).querySelector(sel); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function isExternal(url) { return /^https?:/.test(url); }
  function linkAttrs(url) { return 'href="' + esc(url) + '"' + (isExternal(url) ? ' target="_blank" rel="noopener"' : ''); }
  function imgTag(src, alt, pos, extra) {
    return '<img src="' + esc(src) + '" alt="' + esc(alt || '') + '"' +
      (pos ? ' style="object-position:' + esc(pos) + '"' : '') + (extra || '') + '>';
  }
  function mediaTag(item) {
    if (item.video) {
      return '<video controls playsinline preload="none" poster="' + esc(item.img) + '"><source src="' + esc(item.video) + '" type="video/mp4"></video>';
    }
    return imgTag(item.img, item.alt || item.title, item.pos);
  }
  function replay(node) { node.classList.remove('swap'); void node.offsetWidth; node.classList.add('swap'); }

  /* ---------- Shared: menu, scroll reveal, lightbox ---------- */
  var toggle = $('.hd__toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = $('.hd__nav').classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var observer = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  function watch(root) {
    Array.prototype.forEach.call((root || doc).querySelectorAll('.reveal'), function (n) {
      if (observer) { observer.observe(n); } else { n.classList.add('in'); }
    });
  }

  var lb = doc.createElement('div');
  lb.className = 'lb';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-label', 'Photo viewer');
  lb.innerHTML = '<button type="button">Close</button><img alt="">';
  doc.body.appendChild(lb);
  function closeLb() { lb.classList.remove('open'); }
  lb.addEventListener('click', closeLb);
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeLb(); } });
  doc.addEventListener('click', function (e) {
    var t = e.target;
    if (t && t.matches && t.matches('img[data-zoom]')) {
      $('img', lb).src = t.getAttribute('data-zoom') || t.src;
      $('img', lb).alt = t.alt;
      lb.classList.add('open');
      $('button', lb).focus();
    }
  });

  /* ---------- Home: the feed ---------- */
  function home() {
    var posts = D.posts, cats = D.categories;
    var filter = 'all', selected = posts[0].id;
    var postEl = $('#post'), gridEl = $('#grid'), filterEl = $('#filters');

    function drawPost(scroll) {
      var p = posts.filter(function (x) { return x.id === selected; })[0] || posts[0];
      var links = (p.links || []).map(function (l, i) {
        return '<a class="' + (i === 0 ? 'btn' : 'textlink') + '" ' + linkAttrs(l.url) + '>' + esc(l.label) + (i === 0 ? ' →' : '') + '</a>';
      }).join('');
      postEl.innerHTML =
        '<div class="post__media">' + mediaTag(p) + '</div>' +
        '<div class="post__body">' +
        '<div class="eyebrow">' + esc(p.kicker) + '</div>' +
        '<h3 class="post__title">' + esc(p.title) + '</h3>' +
        '<p class="post__caption">' + esc(p.caption) + '</p>' +
        '<div class="post__tags">' + (p.tags || []).map(function (t) { return '<span class="pill">' + esc(t) + '</span>'; }).join('') + '</div>' +
        '<div class="post__links">' + links + '</div></div>';
      replay(postEl);
      if (scroll) { postEl.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }
    function drawGrid(animate) {
      var list = posts.filter(function (p) { return filter === 'all' || p.cat === filter; });
      gridEl.innerHTML = list.map(function (p, i) {
        return '<button type="button" class="tile' + (animate ? ' rise' : '') + '" style="--d:' + (i * 0.06).toFixed(2) + 's" data-id="' + esc(p.id) + '" aria-pressed="' + (p.id === selected) + '">' +
          '<span class="tile__img">' + imgTag(p.img, '', p.pos) + (p.video ? '<span class="tile__play">▶ Film</span>' : '') + '</span>' +
          '<span class="tile__title">' + esc(p.title) + '</span><span class="tile__cat">' + esc(cats[p.cat]) + '</span></button>';
      }).join('');
    }
    function drawFilters() {
      var keys = ['all'].concat(Object.keys(cats));
      filterEl.innerHTML = keys.map(function (k) {
        return '<button type="button" class="chip" data-f="' + k + '" aria-pressed="' + (k === filter) + '">' + esc(k === 'all' ? 'All' : D.filterLabels[k]) + '</button>';
      }).join('');
    }
    filterEl.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) { return; }
      filter = b.getAttribute('data-f'); drawFilters(); drawGrid(true);
    });
    gridEl.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) { return; }
      selected = b.getAttribute('data-id'); drawGrid(false); drawPost(true);
    });
    drawFilters(); drawGrid(true); drawPost(false);
  }

  /* ---------- My story: chapters that unfold ---------- */
  function story() {
    var chapters = D.chapters, n = 1;
    var railEl = $('#rail'), listEl = $('#chapters'), nextEl = $('#next'), allBtn = $('#toggle-all');

    function chapterHtml(c) {
      var thumbs = (c.more || []).map(function (m) { return imgTag(m.img, m.alt, null, ' data-zoom="' + esc(m.img) + '"'); }).join('');
      return '<article class="chapter rise">' +
        '<div class="chapter__top"><div class="chapter__text">' +
        '<span class="pill">' + esc(c.name) + ' · ' + esc(c.meta) + '</span>' +
        '<h3 class="chapter__title">' + esc(c.title) + '</h3>' +
        '<p class="chapter__hook">' + esc(c.hook) + '</p></div>' +
        '<div class="chapter__media">' + imgTag(c.img, c.alt || c.title, c.pos, ' data-zoom="' + esc(c.img) + '"') +
        (thumbs ? '<div class="thumbs">' + thumbs + '</div>' : '') + '</div></div>' +
        '<div class="steps">' + c.steps.map(function (s) {
          return '<div class="step"><div class="step__label">' + esc(s.label) + '</div>' + esc(s.text) + '</div>';
        }).join('') +
        '<div class="stat"><div class="stat__num">' + esc(c.stat) + '</div><div class="stat__label">' + esc(c.statLabel) + '</div></div>' +
        '</div></article>';
    }
    function drawRail() {
      railEl.innerHTML = chapters.map(function (c, i) {
        return '<button type="button" class="' + (i < n ? 'on' : '') + '" data-i="' + i + '" aria-pressed="' + (i < n) + '"><small>' + esc(c.year) + '</small><span>' + esc(c.name) + '</span></button>';
      }).join('');
    }
    function drawNext() {
      var more = n < chapters.length;
      allBtn.textContent = more ? 'Open every chapter' : 'Back to the beginning';
      if (!more) { nextEl.innerHTML = '<p class="today rise">Which brings the story to today.</p>'; return; }
      var ahead = chapters.slice(n + 1).map(function (c) { return c.name; }).join(', ') || 'the present day';
      nextEl.innerHTML = '<div class="next rise"><div style="flex:1 1 480px;min-width:0">' +
        '<p class="next__teaser">' + esc(chapters[n - 1].teaser) + '</p>' +
        '<div class="next__ahead">Still ahead: ' + esc(ahead) + '</div></div>' +
        '<button type="button" class="btn" id="continue">Continue: ' + esc(chapters[n].name) + ' →</button></div>';
    }
    function drawAll() {
      listEl.innerHTML = chapters.slice(0, n).map(chapterHtml).join('');
      drawRail(); drawNext();
    }
    function addOne() {
      n += 1;
      listEl.insertAdjacentHTML('beforeend', chapterHtml(chapters[n - 1]));
      drawRail(); drawNext();
      listEl.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    nextEl.addEventListener('click', function (e) { if (e.target.closest('#continue')) { addOne(); } });
    railEl.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) { return; }
      n = Number(b.getAttribute('data-i')) + 1; drawAll();
      listEl.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    allBtn.addEventListener('click', function () { n = (n < chapters.length) ? chapters.length : 1; drawAll(); });
    drawAll();
  }

  /* ---------- My work ---------- */
  function work() {
    var projects = D.projects, pi = 0;
    var listEl = $('#plist'), viewEl = $('#pview');
    function drawList() {
      listEl.innerHTML = projects.map(function (p, i) {
        return '<button type="button" data-i="' + i + '" aria-pressed="' + (i === pi) + '">' +
          '<span class="plist__n">' + (i < 9 ? '0' : '') + (i + 1) + '</span>' +
          '<span><span class="plist__title">' + esc(p.title) + '</span><span class="plist__client">' + esc(p.client) + '</span></span>' +
          '<span class="plist__type">' + esc(p.type) + '</span></button>';
      }).join('');
    }
    function drawView(scroll) {
      var p = projects[pi];
      viewEl.innerHTML = mediaTag(p) +
        (p.insight ? '<div class="pview__label">The insight</div><p class="pview__insight">' + esc(p.insight) + '</p>' : '') +
        '<div class="pview__label">The outcome</div><p class="pview__outcome">' + esc(p.outcome) + '</p>' +
        (p.link ? '<a class="btn" ' + linkAttrs(p.link.url) + '>' + esc(p.link.label) + ' →</a>' : '');
      replay(viewEl);
      if (scroll && window.matchMedia('(max-width: 860px)').matches) { viewEl.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }
    listEl.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) { return; }
      pi = Number(b.getAttribute('data-i')); drawList(); drawView(true);
    });
    drawList(); drawView(false);

    var skills = D.skills, si = 0, tabsEl = $('#skill-tabs'), skillEl = $('#skill');
    function drawSkills() {
      tabsEl.innerHTML = skills.map(function (s, i) {
        return '<button type="button" role="tab" data-i="' + i + '" aria-selected="' + (i === si) + '">' + esc(s.label) + '</button>';
      }).join('');
      var s = skills[si];
      skillEl.innerHTML = '<p class="skill__lead">' + esc(s.lead) + '</p><div class="skill__body"><ul>' +
        s.proof.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') +
        '</ul><div class="skill__tools">Tools</div><div>' + esc(s.tools) + '</div></div>';
    }
    tabsEl.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) { return; }
      si = Number(b.getAttribute('data-i')); drawSkills();
    });
    drawSkills();

    var quotes = D.quotes, qi = 0, quoteEl = $('#quote'), countEl = $('#quote-count');
    function drawQuote() {
      var q = quotes[qi];
      quoteEl.innerHTML = '<p class="quote__text">“' + esc(q.text) + '”</p><div class="quote__name">' + esc(q.name) + '</div><div class="quote__role">' + esc(q.role) + '</div>';
      countEl.textContent = (qi + 1) + ' / ' + quotes.length;
    }
    $('#quote-prev').addEventListener('click', function () { qi = (qi + quotes.length - 1) % quotes.length; drawQuote(); });
    $('#quote-next').addEventListener('click', function () { qi = (qi + 1) % quotes.length; drawQuote(); });
    drawQuote();
  }

  /* ---------- Certifications ---------- */
  function certs() {
    var groups = D.certs, gi = 0, tabsEl = $('#cert-tabs'), listEl = $('#cert-list');
    function draw() {
      tabsEl.innerHTML = groups.map(function (g, i) {
        return '<button type="button" class="chip" role="tab" data-i="' + i + '" aria-selected="' + (i === gi) + '">' + esc(g.label) + '</button>';
      }).join('');
      listEl.innerHTML = groups[gi].items.map(function (c, i) {
        return '<div class="cert rise" style="--d:' + (i * 0.05).toFixed(2) + 's"><div class="cert__name">' + esc(c.name) + '</div><div class="cert__by">' + esc(c.by) + '</div></div>';
      }).join('');
    }
    tabsEl.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) { return; }
      gi = Number(b.getAttribute('data-i')); draw();
    });
    draw();
  }

  /* ---------- Off the clock ---------- */
  function off() {
    var hobbies = D.hobbies, hi = 0, listEl = $('#hobby-list'), panelEl = $('#hobby-panel');
    function draw() {
      listEl.innerHTML = hobbies.map(function (h, i) {
        return '<button type="button" data-i="' + i + '" aria-pressed="' + (i === hi) + '"><strong>' + esc(h.label) + '</strong><span>' + esc(h.line) + '</span></button>';
      }).join('');
      var h = hobbies[hi];
      panelEl.innerHTML = '<div class="hobbies__inner">' + (h.img ? imgTag(h.img, h.label) : '') +
        '<div class="eyebrow">' + esc(h.label) + '</div><p>' + esc(h.caption) + '</p></div>';
    }
    listEl.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) { return; }
      hi = Number(b.getAttribute('data-i')); draw();
    });
    draw();
  }

  var page = doc.body.getAttribute('data-page');
  var pages = { home: home, story: story, work: work, certs: certs, off: off };
  if (pages[page]) { pages[page](); }
  watch();

  /* Old case study pages call showPage(); send those clicks to the new pages. */
  window.showPage = function (id) {
    var map = { home: 'index.html', work: 'work.html', about: 'story.html', contact: 'index.html#contact' };
    window.location.href = map[id] || (id + '.html');
  };
})();
