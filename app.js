/* Samen aan tafel — cursusapp (vanilla JS, geen dependencies)
   Views: dash (leerpad) → module (overzicht) → lesson (les) · plan (ontdekplan)
   Opslag: identiek aan eerdere versie (voortgang + antwoorden blijven bewaard). */
(function () {
  'use strict';

  var META = {
    1: {title:'Eerst begrijpen', sub:'Zien wat er écht gebeurt', phase:'Fundament',
      desc:'Waarom eten bij jullie moeilijk werd, en waarom je niet bij de hap begint.',
      intro:'Je hebt al veel geprobeerd. In deze module verandert er nog niets aan tafel — je gaat alleen kijken.',
      outcomes:[
        'Je weet welk moment bij jullie de spanning opbouwt: de aankondiging, de geur uit de keuken of het aan tafel gaan.',
        'Je kunt bij één afwijzing benoemen wat er binnenkwam: de geur, de structuur, het geluid of de hoeveelheid op het bord.',
        'Je hoort het aan je eigen stem wanneer je hoopt op een hap — en je weet wat je dan in plaats daarvan zegt.',
        'Je hebt je kijkkaart ingevuld en kunt drie eetmomenten naast elkaar leggen zonder te tellen hoeveel er op ging.'],
      goalScreens:['1.1 · Kijk één eetmoment iets eerder','1.2 · Kijk onder één afwijzing','1.3 · Houd één moment klein','1.5 · De kijkkaart'],
      milestone:'Je weet wat je de komende week aan tafel gaat bekijken.'},
    2: {title:'De basis van de aanpak', sub:'Rust als vertrekpunt', phase:'Begeleiden',
      desc:'Wat een ontdeksessie is, en wat jij doet terwijl je kind kijkt.',
      intro:'Niet jij moet het beter doen. Het moment mag anders — met een ander doel dan opeten.',
      outcomes:[
        'Je kunt in één zin uitleggen wat je kind in een ontdeksessie mag doen: kijken, ruiken, aanraken, uitspugen — alles behalve moeten.',
        'Je weet wie er meedoet en wat jij zelf op je bord legt, zodat je kind niet de enige is die iets nieuws voor zich heeft.',
        'Je hebt je houvastkaart ingevuld: hoe lang de sessie duurt, waar je kind zit en wanneer het klaar is.',
        'Je hebt je ouderreactiekaart ingevuld: wat je zegt als je kind niets doet, en wat je zegt als je zelf te snel ging.'],
      goalScreens:['2.1 · Een ander doel voor hetzelfde eten','2.2 · Iedereen doet mee, maar niet hetzelfde','2.3 · Maak jouw houvastkaart','2.4 · Maak jouw ouderreactiekaart'],
      milestone:'Je weet wat je zegt en doet, ook als er twintig minuten niets gebeurt.'},
    3: {title:'Voorbereiden', sub:'De juiste voorwaarden scheppen', phase:'Voorbereiding',
      desc:'Boodschappen, bakjes, keuken en de gang naar tafel.',
      intro:'Alles wat je vooraf regelt, hoef je aan tafel niet meer te bedenken. Dat is het hele punt van dit deel.',
      outcomes:[
        'Je hebt een boodschappenlijst waarop producten op vorm, kleur en structuur bij elkaar staan — niet op wat gezond hoort te zijn.',
        'Je hebt het uitspuugbakje, de washandjes en de bakjes met deksel klaar, binnen handbereik van je kind.',
        'Je hebt de bakjes vóór de sessie in de keuken gevuld en afgesloten, zodat je tijdens de sessie aan tafel blijft zitten.',
        'Je hebt de overgang naar tafel vastgelegd: eerst bewegen of bellenblazen, dan zitten — elke keer dezelfde volgorde.'],
      goalScreens:['3.1 · Maak jouw boodschappenkaart','3.2 · Controleer jouw materialen','3.4 · Controle vóór de start','3.5 · Van bewegen naar tafel'],
      milestone:'Je kunt de sessie starten zonder nog één keer naar de keuken te lopen.'},
    4: {title:'Aan tafel', sub:'Ontdekken, stap voor stap', phase:'Samen oefenen',
      desc:'Verdragen, kijken, ruiken, aanraken, proeven — in die volgorde.',
      intro:'Dit is het deel waar je tegenop ziet. Je hoeft niets af te dwingen: één stap in twintig minuten is een stap.',
      outcomes:[
        'Je hebt één startzin die je elke sessie gebruikt, en je weet wat je doet als je kind de eerste minuten niets doet.',
        'Je weet op welke afstand het bakje mag staan zodat je kind blijft zitten, en dat je die afstand niet verkleint zonder dat je kind dat aangeeft.',
        'Je beschrijft wat je ziet ("die is groen en glanst") in plaats van te vragen of je kind het lekker vindt.',
        'Je wijst het uitspuugbakje aan vóórdat je kind iets in de mond neemt, en je hebt afgesproken dat uitspugen mag.',
        'Je weet vooraf wat je zegt als je kind een hap doorslikt: niet juichen, niet meteen een tweede aanbieden.'],
      goalScreens:['4.1 · Jouw startzin','4.2 · Jouw veilige afstand','4.3 · Jouw kijkwoorden','4.6 · Jouw proefafspraak','4.7 · Bedenk vooraf hoe je reageert'],
      milestone:'Je kunt een hele sessie begeleiden zonder onderweg te hoeven bedenken wat je zegt.'},
    5: {title:'Voeding opbouwen', sub:'Kleine stappen, meer variatie', phase:'Praktijkfase',
      desc:'Van losse producten naar een ontdekmenu voor de komende week.',
      intro:'Nu wordt het jullie eigen menu: producten die je in huis hebt, in een volgorde die je kind kan volgen.',
      outcomes:[
        'Je kunt van een product dat je kind al verdraagt een stap maken naar een volgend product met één verschil: vorm, kleur óf structuur.',
        'Je hebt de bakjes in een vaste volgorde staan, van bekend naar nieuw, zodat je kind kan zien wat er komt.',
        'Je kunt een voorbeeldmenu omzetten naar acht bakjes met producten uit jullie eigen keuken.',
        'Je hebt één ontdekmenu klaar dat je deze week echt op tafel kunt zetten.'],
      goalScreens:['5.1 · Jouw productbrug','5.2 · Voorbeeldschema met 8 bakjes','5.3 · Jouw patroon uit een voorbeeldmenu','5.4 · Het eerste ontdekmenu'],
      milestone:'Er staat een menu klaar voor je eerste sessie thuis.'},
    6: {title:'Afronden', sub:'Afsluiten zonder druk', phase:'De laatste stap',
      desc:'Hoe je stopt, en waarom het opruimen er nog bij hoort.',
      intro:'Hoe een sessie eindigt, bepaalt hoe je kind eraan terugdenkt. Ook als er weinig gebeurde.',
      outcomes:[
        'Je hebt één vast einde: dezelfde woorden of hetzelfde signaal, zodat stoppen echt stoppen is.',
        'Je laat je kind meehelpen met opruimen, zodat er nog één keer contact met de producten is zonder dat er iets moet.',
        'Je hebt de opruimroutine opgeschreven zoals die bij jullie keuken en tempo past.'],
      goalScreens:['6.1 · Waarom opruimen meer is dan opruimen','6.2 · Nog één keer contact met voeding','6.4 · Jullie opruimroutine'],
      milestone:'Je kunt de sessie afsluiten zonder er op het laatste moment nog iets bij te vragen.'}
  };

  var K = {viewed:'rust_rond_eten_viewed', pos:'rust_rond_eten_volledig_progress', ans:'rust_rond_eten_answers'};
  var slides = window.COURSE_SLIDES || [];
  var photos = window.MODULE_PHOTOS || {};
  var app = document.getElementById('app');
  var sheets = document.getElementById('print-sheets');

  var state = {
    view:'dash', current:0, mod:1,
    viewed:read(K.viewed, []), answers:read(K.ans, {}), navOpen:false
  };

  function read(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; } catch (e) { return fallback; }
  }
  function store(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function photo(d) { return photos[d] || './images/p' + d + '.jpg'; }
  function group(i) { return String(slides[i].group || '').replace(/^Deel \d+ · /, ''); }

  /* ---------- voortgang ---------- */
  function idx(d) { var r = []; slides.forEach(function (s, i) { if (s.deel === d) r.push(i); }); return r; }
  function seen() { var m = {}; state.viewed.forEach(function (i) { m[i] = true; }); return m; }
  function stats(d) {
    var ids = idx(d), sn = seen(), n = 0;
    ids.forEach(function (i) { if (sn[i]) n++; });
    return {seen:n, total:ids.length, pct: ids.length ? Math.round(n / ids.length * 100) : 0, done: ids.length > 0 && n === ids.length};
  }
  function firstUnseen(d) {
    var ids = idx(d), sn = seen(), out = null;
    ids.forEach(function (i) { if (out === null && !sn[i]) out = i; });
    return out === null ? (ids[0] || 0) : out;
  }
  function recommended() {
    var last = Number(read(K.pos, 0)) || 0;
    if (slides[last] && !stats(slides[last].deel).done) return last;
    for (var d = 1; d <= 6; d++) if (!stats(d).done) return firstUnseen(d);
    return Math.max(0, slides.length - 1);
  }
  function totalPct() {
    return slides.length ? Math.round(state.viewed.filter(function (i) { return i < slides.length; }).length / slides.length * 100) : 0;
  }
  function answersFor(d) {
    var ids = idx(d), n = 0;
    ids.forEach(function (i) { if (state.answers[i]) n += Object.keys(state.answers[i]).length; });
    return n;
  }

  /* ---------- navigatie ---------- */
  function go(i) {
    state.current = Math.max(0, Math.min(i, slides.length - 1));
    if (state.viewed.indexOf(state.current) < 0) state.viewed.push(state.current);
    store(K.viewed, state.viewed); store(K.pos, state.current);
    state.mod = slides[state.current].deel;
    state.view = 'lesson'; state.navOpen = false;
    render(); focusMain(); window.scrollTo({top:0});
  }
  function openModule(d) {
    state.mod = Number(d); state.view = 'module'; state.navOpen = false;
    render(); focusMain(); window.scrollTo({top:0});
  }
  function setView(v) { state.view = v; state.navOpen = false; render(); focusMain(); window.scrollTo({top:0}); }
  function focusMain() {
    var m = app.querySelector('[data-main]');
    if (m) { m.setAttribute('tabindex','-1'); m.focus({preventScroll:true}); }
  }

  /* ---------- antwoorden ---------- */
  function fields(scope) { return [].slice.call(scope.querySelectorAll('textarea, input[type=text], input:not([type])')); }
  function labelFor(el, scope) {
    var wrap = el.closest('.premium-field, .write-field, .field, label');
    var span = wrap && wrap.querySelector('span');
    if (span && span.textContent.trim()) return span.textContent.trim();
    if (el.getAttribute('placeholder')) return el.getAttribute('placeholder');
    var h = scope.querySelector('h1, h2');
    return h ? h.textContent.trim() : 'Jouw notitie';
  }
  function record(screenIdx, key, entry) {
    var bucket = state.answers[screenIdx] || {};
    if (entry === null) delete bucket[key]; else bucket[key] = entry;
    if (Object.keys(bucket).length) state.answers[screenIdx] = bucket; else delete state.answers[screenIdx];
    store(K.ans, state.answers);
  }
  /* Feedback verschijnt pas na een keuze en markeert wat de gebruiker koos. */
  function syncFeedback(scope, opts, chosen, multi) {
    var grids = [].slice.call(scope.querySelectorAll('.fb-grid'));
    if (!grids.length) return;
    grids.forEach(function (grid) {
      grid.classList.add('is-revealed');
      [].slice.call(grid.querySelectorAll('.fb-card')).forEach(function (c, j) {
        var isChoice = !multi && j === chosen;
        c.classList.toggle('is-your-choice', isChoice);
        var tag = c.querySelector('.choice-tag');
        if (isChoice && !tag) {
          tag = document.createElement('span');
          tag.className = 'choice-tag';
          tag.textContent = 'Dit koos jij';
          c.insertBefore(tag, c.firstChild);
        } else if (!isChoice && tag) tag.parentNode.removeChild(tag);
      });
    });
  }
  function revealAllFeedback(scope) {
    [].slice.call(scope.querySelectorAll('.fb-grid')).forEach(function (g) { g.classList.add('is-revealed'); });
  }
  /* Sommige schermen tonen hun uitleg achter een knop; die uitleg hoort na een keuze zichtbaar te zijn. */
  function revealHidden(scope) {
    [].slice.call(scope.querySelectorAll('.hidden')).forEach(function (el) { el.classList.remove('hidden'); });
    [].slice.call(scope.querySelectorAll('button.reveal')).forEach(function (b) { b.hidden = true; });
  }
  function restore(scope, screenIdx) {
    /* Screens zonder keuzevragen tonen hun uitleg direct. */
    if (!scope.querySelector('.opt')) revealAllFeedback(scope);
    var bucket = state.answers[screenIdx];
    if (!bucket) return;
    var fs = fields(scope);
    Object.keys(bucket).forEach(function (k) {
      var a = bucket[k];
      if (a.type === 'note') { var el = fs[Number(k.slice(1))]; if (el) el.value = a.v; }
      if (a.type === 'choice') {
        var list = scope.querySelectorAll('.opt-list')[a.list || 0];
        if (!list) return;
        var opts = [].slice.call(list.querySelectorAll('.opt'));
        var multi = list.classList.contains('multi');
        (a.picked || []).forEach(function (i) {
          if (opts[i]) { opts[i].classList.add('selected'); opts[i].setAttribute('aria-pressed','true'); }
        });
        if ((a.picked || []).length) { syncFeedback(scope, opts, multi ? -1 : a.picked[0], multi); revealHidden(scope); }
      }
    });
  }
  function onScreenClick(e, scope, screenIdx) {
    if (e.target.closest && e.target.closest('button.reveal')) return revealHidden(scope);
    var opt = e.target.closest && e.target.closest('.opt');
    if (!opt) return;
    var list = opt.closest('.opt-list') || opt.parentElement;
    var multi = list.classList.contains('multi');
    var opts = [].slice.call(list.querySelectorAll('.opt'));
    if (!multi) opts.forEach(function (o) { o.classList.remove('selected'); o.setAttribute('aria-pressed','false'); });
    var on = multi ? !opt.classList.contains('selected') : true;
    opt.classList.toggle('selected', on);
    opt.setAttribute('aria-pressed', String(on));
    syncFeedback(scope, opts, multi ? -1 : opts.indexOf(opt), multi);
    revealHidden(scope);
    var picked = [];
    opts.forEach(function (o, i) { if (o.classList.contains('selected')) picked.push(i); });
    var listIdx = [].slice.call(scope.querySelectorAll('.opt-list')).indexOf(list);
    var h = scope.querySelector('h1, h2');
    record(screenIdx, 'c' + listIdx, picked.length ? {
      type:'choice', list:listIdx, picked:picked,
      q: h ? h.textContent.trim() : 'Jouw keuze',
      v: picked.map(function (i) { var t = opts[i].querySelector('.opt-text'); return (t || opts[i]).textContent.trim(); }).join(' · ')
    } : null);
  }
  function onScreenInput(e, scope, screenIdx) {
    var el = e.target;
    if (!el.matches || !el.matches('textarea, input[type=text], input:not([type])')) return;
    var v = el.value.trim();
    record(screenIdx, 'f' + fields(scope).indexOf(el), v ? {type:'note', q: labelFor(el, scope), v:v} : null);
  }

  /* ---------- print ---------- */
  function printModule(d) {
    var ids = idx(d);
    sheets.innerHTML = '<h1 style="font-family:\'Playfair Display\',Georgia,serif;font-size:1.5rem;margin:0 0 18px">Module ' + d + ' · ' + esc(META[d].title) + '</h1>' +
      ids.map(function (i) { return '<article class="print-sheet" data-screen="print">' + slides[i].html + '</article>'; }).join('');
    setTimeout(function () { window.print(); }, 120);
  }
  function printPlan() { sheets.innerHTML = ''; setTimeout(function () { window.print(); }, 120); }
  window.addEventListener('afterprint', function () { sheets.innerHTML = ''; });

  /* ---------- bouwstenen ---------- */
  function bar(pct, label) {
    return '<div class="bar" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"' +
      (label ? ' aria-label="' + esc(label) + '"' : '') + '><div class="bar__fill" style="width:' + pct + '%"></div></div>';
  }
  function statusOf(st) {
    var cls = st.done ? 'status--done' : (st.seen ? 'status--busy' : 'status--todo');
    var label = st.done ? 'Afgerond' : (st.seen ? 'Bezig' : 'Nog niet gestart');
    return '<span class="status ' + cls + '"><i class="status__dot" aria-hidden="true"></i>' + label + '</span>';
  }

  /* ---------- LEVEL 1: leerpad ---------- */
  function dashboard() {
    var rec = recommended(), recSlide = slides[rec] || {deel:1, t:''};
    var d = recSlide.deel, st = stats(d), plan = planData();
    var fresh = st.seen === 0 && totalPct() === 0;

    var html = '<div data-noprint><div class="topbar"><div class="topbar__inner">' +
      '<div class="topbar__crumb"><b>Samen aan tafel</b><span>Jouw leerpad · ' + totalPct() + '% bekeken</span></div>' +
      '<button class="btn btn--secondary" data-view="plan">Jouw ontdekplan</button>' +
      '</div></div>' +
      '<main class="course-wrap course-wrap--wide dash" data-main>' +

      '<div class="dash__hero"><h1 class="dash__title">' + (fresh ? 'Welkom bij de cursus' : 'Verder met de cursus') + '</h1>' +
      '<p class="dash__intro measure">Je volgt niet alleen lessen. Je bouwt stap voor stap aan <strong>jouw ontdekplan</strong>: ' +
      'wat je opmerkt, wat je kiest en wat je thuis gaat proberen — alles op één plek.</p></div>' +

      /* primaire actie */
      '<section class="resume" aria-labelledby="resume-h">' +
      '<span class="resume__label">' + (fresh ? 'Begin hier' : 'Ga verder waar je gebleven bent') + '</span>' +
      '<h2 id="resume-h">Module ' + d + ' · ' + esc(fresh ? META[d].title : recSlide.t) + '</h2>' +
      '<p class="resume__where">' + esc(fresh ? META[d].intro : META[d].title + ' › ' + group(rec)) + '</p>' +
      bar(st.pct, 'Voortgang module ' + d) +
      '<div class="resume__foot"><button class="btn btn--primary" data-go="' + rec + '">' + (fresh ? 'Start de cursus' : 'Verdergaan') + '</button>' +
      '<span class="meta">' + st.seen + ' van ' + st.total + ' schermen in deze module</span></div></section>' +

      /* totaaloverzicht + modules */
      '<section><div class="section-head"><h2>Zes modules</h2>' +
      '<span class="meta">' + totalPct() + '% van ' + slides.length + ' schermen bekeken</span></div>' +
      '<ul class="mod-list">';

    for (var i = 1; i <= 6; i++) {
      var m = META[i], s = stats(i);
      html += '<li><button class="mod-row" data-module="' + i + '">' +
        '<img src="' + esc(photo(i)) + '" alt="" loading="lazy">' +
        '<span><span class="meta">Module ' + i + ' · ' + esc(m.phase) + '</span>' +
        '<h3>' + esc(m.title) + '</h3>' +
        '<span class="meta" style="display:block;margin-bottom:8px">' + statusOf(s) + ' · ' + s.seen + '/' + s.total + ' schermen</span>' +
        bar(s.pct, 'Voortgang module ' + i) + '</span>' +
        '<span class="mod-row__go" aria-hidden="true">→</span></button></li>';
    }

    html += '</ul></section>' +

      '<section class="panel panel--split"><div><h2 style="font-size:1.25rem;margin:0 0 4px">Jouw ontdekplan</h2>' +
      '<p class="panel__note">' + (plan.count === 0 ? 'Nog niets ingevuld — je eerste notitie of keuze komt hier automatisch te staan.'
        : (plan.count === 1 ? '1 antwoord bewaard' : plan.count + ' antwoorden bewaard') + ' uit ' + plan.mods.length + ' module' + (plan.mods.length === 1 ? '' : 's')) + '</p></div>' +
      '<button class="btn btn--secondary" data-view="plan">Bekijk ontdekplan</button></section>' +

      '<section class="actions-row"><button class="btn btn--text" data-export="1">Voortgang exporteren</button>' +
      '<button class="btn btn--text" data-reset="1">Voortgang wissen</button></section>' +
      '</main></div>';
    return html;
  }

  /* ---------- LEVEL 2: module-overzicht ---------- */
  function moduleView() {
    var d = state.mod, m = META[d], st = stats(d), ids = idx(d), sn = seen();
    var start = firstUnseen(d), ans = answersFor(d);

    var groups = [];
    ids.forEach(function (i) {
      var label = group(i);
      var g = groups.filter(function (x) { return x.label === label; })[0];
      if (!g) { g = {label:label, items:[]}; groups.push(g); }
      g.items.push(i);
    });

    var html = '<div data-noprint><div class="topbar"><div class="topbar__inner">' +
      '<button class="btn btn--icon" data-view="dash" aria-label="Terug naar leerpad">←</button>' +
      '<div class="topbar__crumb"><b>Module ' + d + ' · ' + esc(m.title) + '</b><span>' + st.pct + '% bekeken · ' + st.seen + '/' + st.total + ' schermen</span></div>' +
      '<button class="btn btn--secondary" data-view="plan">Ontdekplan</button>' +
      '</div></div>' +
      '<main class="course-wrap course-wrap--wide mhead" data-main>' +
      '<div class="mhead__media"><img src="' + esc(photo(d)) + '" alt="" loading="lazy"></div>' +
      '<p class="eyebrow">Module ' + d + ' · ' + esc(m.phase) + '</p>' +
      '<h1>' + esc(m.title) + '</h1>' +
      '<p class="mhead__sub">' + esc(m.sub) + '</p>' +
      '<p class="measure">' + esc(m.intro) + '</p>' +
      '<h2 style="font-size:1.25rem;margin-top:32px">Wat je hierna kunt</h2><ul class="outcomes">' +
      m.outcomes.slice(0, 3).map(function (o) {
        return '<li><span class="tick" aria-hidden="true">✓</span><span>' + esc(o) + '</span></li>';
      }).join('') + '</ul>' +
      '<div class="btn-row" style="margin-bottom:32px">' +
      '<button class="btn btn--primary" data-go="' + start + '">' + (st.done ? 'Opnieuw bekijken' : (st.seen ? 'Verdergaan' : 'Start module ' + d)) + '</button>' +
      '<button class="btn btn--text" data-print="' + d + '">Module als pdf</button></div>' +
      bar(st.pct, 'Voortgang module ' + d) +
      '<p class="meta" style="margin-top:8px">' + st.seen + ' van ' + st.total + ' schermen bekeken' + (ans ? ' · ' + ans + ' antwoorden bewaard' : '') + '</p>' +
      '<h2 style="font-size:1.25rem;margin-top:48px">In deze module</h2>';

    groups.forEach(function (g) {
      html += '<p class="eyebrow" style="margin-top:24px">' + esc(g.label) + '</p><ul class="lesson-list">' +
        g.items.map(function (i) {
          return '<li><button class="lesson-row' + (sn[i] ? ' is-done' : '') + '" data-go="' + i + '">' +
            '<span class="tick" aria-hidden="true">✓</span>' +
            '<span class="label">' + esc(slides[i].t) + '<span class="group">' + (sn[i] ? 'Bekeken' : 'Nog niet bekeken') + '</span></span>' +
            '<span class="mod-row__go" aria-hidden="true">→</span></button></li>';
        }).join('') + '</ul>';
    });

    html += '</main></div>';
    return html;
  }

  /* ---------- LEVEL 3: les ---------- */
  function lessonView() {
    var s = slides[state.current];
    if (!s) return '';
    var d = s.deel, m = META[d], ids = idx(d), st = stats(d), sn = seen();
    var pos = ids.indexOf(state.current);
    var atEnd = pos === ids.length - 1 && ids.length > 0;

    var groups = [];
    ids.forEach(function (i) {
      var label = group(i);
      var g = groups.filter(function (x) { return x.label === label; })[0];
      if (!g) { g = {label:label, items:[]}; groups.push(g); }
      g.items.push({i:i, t:slides[i].t, active: i === state.current, done: !!sn[i]});
    });

    var html = '<div data-noprint><div class="topbar"><div class="topbar__inner">' +
      '<button class="btn btn--icon" data-module="' + d + '" aria-label="Terug naar module ' + d + '">←</button>' +
      '<button class="btn btn--icon" data-nav="1" aria-label="Schermen in deze module" aria-expanded="' + (state.navOpen ? 'true' : 'false') + '">☰</button>' +
      '<div class="topbar__crumb"><b>' + esc(s.t) + '</b><span>Module ' + d + ' · ' + esc(m.title) + '</span>' + bar(st.pct, 'Voortgang module ' + d) + '</div>' +
      '<span class="topbar__count">' + (pos + 1) + '/' + ids.length + '</span></div></div>';

    if (state.navOpen) {
      html += '<div class="scrim" data-nav="0"></div><aside class="drawer" aria-label="Schermen in module ' + d + '">' +
        '<div class="drawer__head"><b>Module ' + d + '</b>' +
        '<button class="drawer__close" data-nav="0" aria-label="Sluiten">✕</button></div>' +
        groups.map(function (g) {
          return '<div class="drawer__group"><div class="drawer__label">' + esc(g.label) + '</div>' +
            g.items.map(function (it) {
              return '<button class="drawer__item' + (it.active ? ' is-active' : '') + (it.done ? ' is-done' : '') + '" data-go="' + it.i + '"' +
                (it.active ? ' aria-current="true"' : '') + '>' +
                '<span class="tick" aria-hidden="true">✓</span><span>' + esc(it.t) + '</span></button>';
            }).join('') + '</div>';
        }).join('') +
        '<div class="drawer__foot">' +
        '<button class="drawer__item" data-view="plan"><span class="tick" aria-hidden="true"></span><span>Jouw ontdekplan</span></button>' +
        '<button class="drawer__item" data-module="' + d + '"><span class="tick" aria-hidden="true"></span><span>Module-overzicht</span></button>' +
        '<button class="drawer__item" data-view="dash"><span class="tick" aria-hidden="true"></span><span>Jouw leerpad</span></button>' +
        '</div></aside>';
    }

    html += '<main class="course-wrap lesson" data-main>' +
      '<div class="screen" id="screen" data-screen="' + state.current + '">' + s.html + '</div>';

    if (atEnd) {
      html += '<section class="summary"><h3>' + (d === 6 ? 'Je hebt het volledige leerpad afgerond' : 'Module ' + d + ' is afgerond') + '</h3>' +
        '<p>' + esc(d === 6
          ? 'Je hoeft niet alles tegelijk toe te passen. Kies wat bij jullie past en blijf kijken naar wat je kind laat zien.'
          : m.milestone + ' Een goed moment om te stoppen en thuis te kijken wat je herkent.') + '</p>' +
        '<div class="summary__actions">' +
        (d < 6 ? '<button class="btn btn--primary" data-module="' + (d + 1) + '">Verder naar module ' + (d + 1) + '</button>' : '') +
        '<button class="btn btn--secondary" data-view="plan">Jouw ontdekplan</button>' +
        '<button class="btn btn--text" data-module="' + d + '">Terug naar module ' + d + '</button>' +
        '</div></section>';
    }

    html += '</main><nav class="lesson-nav" aria-label="Navigatie binnen de module"><div class="lesson-nav__inner">' +
      '<button class="btn btn--secondary" data-go="' + (state.current - 1) + '"' + (pos === 0 ? ' disabled' : '') + '>← Vorige</button>' +
      (atEnd ? '<button class="btn btn--primary" data-module="' + d + '">Module afronden ✓</button>'
             : '<button class="btn btn--primary" data-go="' + (state.current + 1) + '">Volgende →</button>') +
      '</div></nav></div>';
    return html;
  }

  /* ---------- ontdekplan ---------- */
  function planData() {
    var mods = [], count = 0;
    Object.keys(state.answers).map(Number).sort(function (a, b) { return a - b; }).forEach(function (i) {
      var slide = slides[i];
      if (!slide) return;
      var mod = mods.filter(function (m) { return m.n === slide.deel; })[0];
      if (!mod) { mod = {n:slide.deel, title:META[slide.deel].title, items:[]}; mods.push(mod); }
      var bucket = state.answers[i];
      Object.keys(bucket).forEach(function (k) {
        var a = bucket[k];
        var q = (a.q || '').replace(/[…\.]{1,3}$/, '').trim();
        count++;
        mod.items.push({q:q, v:a.v, kind: a.type === 'choice' ? 'Keuze' : 'Notitie', where: slide.t === q ? '' : slide.t, i:i});
      });
    });
    return {mods:mods, count:count};
  }

  function planView() {
    var data = planData();
    var html = '<div><div class="topbar" data-noprint><div class="topbar__inner">' +
      '<button class="btn btn--icon" data-view="dash" aria-label="Terug naar leerpad">←</button>' +
      '<div class="topbar__crumb"><b>Jouw ontdekplan</b><span>' +
      (data.count === 1 ? '1 antwoord' : data.count + ' antwoorden') + ' bewaard</span></div>' +
      '<button class="btn btn--secondary" data-printplan="1">Pdf</button></div></div>' +
      '<main class="course-wrap plan" data-main><h1>Jouw ontdekplan</h1>' +
      '<p class="plan__lead">Alles wat je tijdens de cursus invulde en koos, per module bij elkaar. ' +
      'Neem het mee naar de tafel — je hoeft niets uit je hoofd te doen.</p>';

    if (!data.count) {
      html += '<div class="panel"><h2 style="font-size:1.25rem">Nog niets ingevuld</h2>' +
        '<p class="panel__note" style="margin-bottom:24px">Zodra je in een module een keuze maakt of een veld invult, verschijnt het hier automatisch.</p>' +
        '<button class="btn btn--primary" data-go="' + recommended() + '">Naar de cursus</button></div>';
    }
    html += '<div class="plan__groups">' + data.mods.map(function (mod) {
      return '<section class="panel"><div class="plan__mod"><b>Module ' + mod.n + ' · ' + esc(mod.title) + '</b>' +
        '<span class="meta">' + (mod.items.length === 1 ? '1 antwoord' : mod.items.length + ' antwoorden') + '</span></div>' +
        '<div class="plan__items">' + mod.items.map(function (it) {
          return '<div><span class="plan__kind">' + it.kind + (it.where ? ' · ' + esc(it.where) : '') + '</span>' +
            '<b class="plan__q">' + esc(it.q) + '</b><p class="plan__v">' + esc(it.v) + '</p>' +
            '<button class="btn btn--text" data-noprint data-go="' + it.i + '">Naar dit scherm</button></div>';
        }).join('') + '</div></section>';
    }).join('') + '</div></main></div>';
    return html;
  }

  /* ---------- render + events ---------- */
  function render() {
    var v = state.view;
    app.innerHTML = v === 'lesson' ? lessonView() : (v === 'module' ? moduleView() : (v === 'plan' ? planView() : dashboard()));
    var scope = document.getElementById('screen');
    if (scope) {
      var screenIdx = String(state.current);
      [].slice.call(scope.querySelectorAll('.opt')).forEach(function (o) {
        if (!o.hasAttribute('aria-pressed')) o.setAttribute('aria-pressed','false');
      });
      restore(scope, screenIdx);
      scope.addEventListener('click', function (e) { onScreenClick(e, scope, screenIdx); });
      scope.addEventListener('input', function (e) { onScreenInput(e, scope, screenIdx); });
    }
    if (state.navOpen) {
      var first = app.querySelector('.drawer__item.is-active') || app.querySelector('.drawer__item');
      if (first) first.focus({preventScroll:true});
    }
  }

  app.addEventListener('click', function (e) {
    var t = e.target.closest('[data-go],[data-module],[data-view],[data-nav],[data-print],[data-printplan],[data-reset],[data-export]');
    if (!t) return;
    if (t.hasAttribute('data-go')) return go(Number(t.getAttribute('data-go')));
    if (t.hasAttribute('data-module')) return openModule(t.getAttribute('data-module'));
    if (t.hasAttribute('data-view')) return setView(t.getAttribute('data-view'));
    if (t.hasAttribute('data-nav')) { state.navOpen = t.getAttribute('data-nav') === '1'; return render(); }
    if (t.hasAttribute('data-print')) return printModule(Number(t.getAttribute('data-print')));
    if (t.hasAttribute('data-printplan')) return printPlan();
    if (t.hasAttribute('data-reset')) {
      if (!window.confirm('Weet je zeker dat je jouw voortgang wilt wissen? Ook jouw ontdekplan wordt dan leeg.')) return;
      try { localStorage.removeItem(K.viewed); localStorage.removeItem(K.pos); localStorage.removeItem(K.ans); } catch (err) {}
      state.viewed = []; state.answers = {};
      return render();
    }
    if (t.hasAttribute('data-export')) {
      var blob = new Blob([JSON.stringify({viewed:state.viewed, answers:state.answers, progress:state.current, exportedAt:new Date().toISOString()}, null, 2)], {type:'application/json'});
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = 'samen-aan-tafel-voortgang.json';
      document.body.appendChild(a); a.click(); a.parentNode.removeChild(a);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && state.navOpen) { state.navOpen = false; return render(); }
    if (state.view !== 'lesson') return;
    if (e.target.matches && e.target.matches('input, textarea, button')) return;
    if (e.key === 'ArrowRight') go(state.current + 1);
    if (e.key === 'ArrowLeft') go(state.current - 1);
  });

  /* startpositie: laatst bekeken module onthouden */
  var last = Number(read(K.pos, 0)) || 0;
  if (slides[last]) { state.current = last; state.mod = slides[last].deel; }
  render();
})();
