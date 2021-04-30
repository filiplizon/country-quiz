(this.webpackJsonpcountryinfo = this.webpackJsonpcountryinfo || []).push([
  [0],
  {
    63 (n, e, t) {
      
      t.r(e);
      let i;
        let r;
        let o;
        let c;
        let a;
        let s;
        let u;
        let d;
        let l;
        let h;
        let f;
        let m;
        let p;
        let j;
        let x;
        let b;
        let O;
        let g;
        let w;
        let z;
        let y;
        let v;
        let S;
        let C;
        let k;
        let T;
        let L;
        let E;
        let q;
        let A;
        let Q;
        let N;
        let I;
        let R;
        const F = t(2);
        const B = t(18);
        const M = t.n(B);
        const P = t(19);
        const _ = t(7);
        const U = t(8);
        const W = t(15);
        const H = t(16);
        const G = t(5);
        const V = 'FETCH_COUNTRIES';
        const D = 'CHOOSE_LEVEL';
        const Y = 'CHOOSE_TYPE';
        const K = 'SET_COUNTRIES_LEVEL';
        const Z = 'SET_QUIZ_QUESTOINS';
        const J = 'SET_ANSWER';
        const X = 'CHECK_ANSWER';
        const $ = 'CHANGE_QUESTION';
        const nn = 'RESET_LEVEL';
        const en = 'RESET_TYPE';
        const tn = 'SET_NEXT_LEVEL';
        const rn = 'SET_BEST_SCORE';
        const on = t(17);
        const cn = t.n(on);
        const an = t(28);
        const sn = {
          fetch (n) {
            return { type: V, countries: n };
          },
          chooseType (n) {
            return { type: Y, quizType: n };
          },
          chooseLevel (n) {
            return { type: D, level: n };
          },
          setCountriesLevel () {
            return { type: K };
          },
          setQuizQuestions (n) {
            return { type: Z, level: n };
          },
          setAnswer (n) {
            return { type: J, answer: n };
          },
          checkAnswer (n, e) {
            return { type: X, answer: n, correctAnswer: e };
          },
          changeQuestion () {
            return { type: $ };
          },
          resetLevel (n) {
            return { type: nn, level: n };
          },
          resetType () {
            return { type: en };
          },
          setNextLevel (n) {
            return { type: tn, level: n };
          },
          setBestScore (n, e, t) {
            return { type: rn, score: n, level: e, quizType: t };
          },
        };
        const un = (function () {
          const n = Object(an.a)(
            cn.a.mark(function n() {
              let e; let t;
              return cn.a.wrap((n) => {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), fetch('https://restcountries.eu/rest/v2/all');
                    case 2:
                      return (e = n.sent), (n.next = 5), e.json();
                    case 5:
                      return (t = n.sent), n.abrupt('return', t);
                    case 7:
                    case 'end':
                      return n.stop();
                  }
              }, n);
            }),
          );
          return function () {
            return n.apply(this, arguments);
          };
        })();
        const dn = function (n) {
          let e;
          switch (n.quizType) {
            case 'flags':
              e = n.answer.toLowerCase() === n.countriesForQuiz[n.counter].name.toLowerCase();
              break;
            case 'capitals':
              e = n.answer.toLowerCase() === n.countriesForQuiz[n.counter].capital.toLowerCase();
              break;
            default:
              return;
          }
          return e;
        };
        const ln = t(35);
        const hn = t.n(ln);
        const fn = {
          countries: [],
          countriesByLevel: { easy: [], medium: [], hard: [] },
          countryCodes: {
            easy: [
              'POL',
              'RUS',
              'MEX',
              'ARG',
              'AUS',
              'CHN',
              'CZE',
              'BRA',
              'CAN',
              'FRA',
              'DEU',
              'IND',
              'ISR',
              'PRT',
              'USA',
              'ESP',
              'ITA',
              'BEL',
              'GRC',
            ],
            medium: [
              'AFG',
              'ALB',
              'ARM',
              'BGR',
              'CMR',
              'CHL',
              'COL',
              'HRV',
              'CUB',
              'EGY',
              'EST',
              'GEO',
              'HUN',
              'JPN',
              'KEN',
              'MNE',
              'MAR',
              'PAK',
              'SRB',
            ],
            hard: [
              'TUV',
              'VNM',
              'ZMB',
              'SOM',
              'SYC',
              'SMR',
              'WSM',
              'RWA',
              'QAT',
              'PNG',
              'PAN',
              'PLW',
              'OMN',
              'NER',
              'NIC',
              'NPL',
              'NRU',
              'MOZ',
              'HTI',
            ],
          },
          countriesForQuiz: [],
          quizType: '',
          level: '',
          levels: {
            easy: { name: 'easy', next: 'medium' },
            medium: { name: 'medium', next: 'hard' },
            hard: { name: 'hard', next: '' },
          },
          points: 0,
          bestScore: {
            flags: { easy: 0, medium: 0, hard: 0 },
            capitals: { easy: 0, medium: 0, hard: 0 },
          },
          counter: 0,
          quizLength: 10,
          start: !1,
          isAnswerCorrect: !1,
          isChecked: !1,
          answer: '',
        };
        const mn = function () {
          const n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fn;
            const e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case V:
              return Object(G.a)(Object(G.a)({}, n), {}, { countries: e.countries });
            case Y:
              return Object(G.a)(Object(G.a)({}, n), {}, { quizType: e.quizType });
            case D:
              return Object(G.a)(Object(G.a)({}, n), {}, { level: n.levels[e.level].name });
            case K:
              return Object(G.a)(
                Object(G.a)({}, n),
                {},
                {
                  countriesByLevel: {
                    easy: n.countries.filter((e) => {
                      const t = e.alpha3Code;
                      return n.countryCodes.easy.includes(t);
                    }),
                    medium: n.countries.filter((e) => {
                      const t = e.alpha3Code;
                      return n.countryCodes.medium.includes(t);
                    }),
                    hard: n.countries.filter((e) => {
                      const t = e.alpha3Code;
                      return n.countryCodes.hard.includes(t);
                    }),
                  },
                },
              );
            case Z:
              return Object(G.a)(
                Object(G.a)({}, n),
                {},
                { countriesForQuiz: hn.a.sampleSize(n.countriesByLevel[e.level], 10) },
              );
            case J:
              return Object(G.a)(Object(G.a)({}, n), {}, { answer: e.answer });
            case X:
              return Object(G.a)(
                Object(G.a)({}, n),
                {},
                {
                  isAnswerCorrect: dn(n),
                  isChecked: !n.isChecked,
                  points: dn(n) ? n.points + 1 : n.points,
                },
              );
            case $:
              return Object(G.a)(
                Object(G.a)({}, n),
                {},
                {
                  answer: '',
                  isChecked: !n.isChecked,
                  counter: n.counter + 1,
                  isAnswerCorrect: !1,
                },
              );
            case nn:
              return Object(G.a)(
                Object(G.a)({}, n),
                {},
                {
                  level: e.level ? e.level : fn.level,
                  counter: fn.counter,
                  points: fn.points,
                  answer: fn.answer,
                  isChecked: fn.isChecked,
                },
              );
            case en:
              return Object(G.a)(Object(G.a)({}, n), {}, { quizType: '' });
            case tn:
              return Object(G.a)(Object(G.a)({}, n), {}, { level: n.levels[e.level].next });
            case rn:
              return Object(G.a)(
                Object(G.a)({}, n),
                {},
                {
                  bestScore: Object(G.a)(
                    Object(G.a)({}, n.bestScore),
                    {},
                    Object(H.a)(
                      {},
                      e.quizType,
                      Object(G.a)(
                        Object(G.a)({}, n.bestScore[e.quizType]),
                        {},
                        Object(H.a)(
                          {},
                          e.level,
                          e.score > n.bestScore[e.quizType][e.level]
                            ? e.score
                            : n.bestScore[e.quizType][e.level],
                        ),
                      ),
                    ),
                  ),
                },
              );
            default:
              return n;
          }
        };
        const pn = t(36);
        const jn = t(37);
        const xn = Object(W.createStore)(
          mn,
          Object(pn.composeWithDevTools)(Object(W.applyMiddleware)(jn.a)),
        );
        const bn = t(3);
        const On = t(4);
        const gn = Object(bn.b)(
          i ||
            (i = Object(On.a)([
              "\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');\n\n\n *,*::before,*::after {\n     box-sizing:border-box;\n     -webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\n }\n\n html {\n     font-size:10px;\n }\n\n body {\n     padding: 0;\n     margin: 0;\n     font-size: 1.6rem;\n     font-family: 'Montserrat', sans-serif;\n }\n",
            ])),
        );
        const wn = {
          primary: 'hsl(204, 57%, 34%)',
          secondary: 'hsl(204, 57%, 49%)',
          grey100: 'hsl(0, 0%, 96%)',
          grey200: 'hsl(0, 0%, 94%)',
          grey300: 'hsl(0, 0%, 64%)',
          black: 'hsl(0, 0%, 0%)',
          fontWeight: { light: 300, bold: 600 },
          fontSize: { xs: '1rem', s: '1.6rem', m: '2rem', l: '2.5rem', xl: '3rem', xxl: '3.5rem' },
          boxShadow: '0 10px 30px -10px hsla(0, 0%, 0%, 0.1)',
        };
        const zn = t(1);
        const yn = Object(U.b)(null, (n) => ({
            getAllCountries () {
              return n(
                (function () {
                  const n = Object(an.a)(
                    cn.a.mark(function n(e) {
                      let t;
                      return cn.a.wrap((n) => {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.next = 2), un();
                            case 2:
                              (t = n.sent), e(sn.fetch(t));
                            case 4:
                            case 'end':
                              return n.stop();
                          }
                      }, n);
                    }),
                  );
                  return function (e) {
                    return n.apply(this, arguments);
                  };
                })(),
              );
            },
          }))((n) => {
          const e = n.children;
            const t = n.getAllCountries;
          return (
            Object(F.useEffect)(() => {
              t();
            }, []),
            Object(zn.jsxs)(zn.Fragment, {
              children: [Object(zn.jsx)(gn, {}), Object(zn.jsx)(bn.a, { theme: wn, children: e })],
            })
          );
        });
        const vn = Object(bn.c)(P.b)(
          r ||
            (r = Object(On.a)([
              '\n  text-decoration: none;\n  color: ',
              ';\n  font-weight: ',
              ';\n  font-size: ',
              ';\n\n  @media (min-width: 768px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 800px) and (orientation: landscape) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1024px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1200px) {\n    font-size: ',
              ';\n  }\n\n  :hover {\n    color: ',
              ';\n  }\n',
            ])),
          (n) => n.theme.primary,
          (n) => n.theme.fontWeight.bold,
          (n) => n.theme.fontSize.s,
          (n) => n.theme.fontSize.m,
          (n) => n.theme.fontSize.s,
          (n) => n.theme.fontSize.l,
          (n) => n.theme.fontSize.m,
          (n) => n.theme.secondary,
        );
        const Sn = `${t.p  }static/media/bgQuiz.a506a389.png`;
        const Cn = `${t.p  }static/media/illustration.79db61ac.png`;
        const kn = t(41);
        const Tn = bn.c.div(
          o ||
            (o = Object(On.a)([
              "\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  display: grid;\n  grid-template-rows: 0.6fr 0.25fr;\n  justify-items: center;\n  align-content: center;\n\n  @media (min-width: 768px) {\n    grid-template-rows: 0.6fr 0.35fr;\n  }\n\n  ::after {\n    @media (min-width: 1200px) {\n      position: absolute;\n      right: 0;\n      top: 0;\n      content: '';\n      width: 90vw;\n      height: 100vh;\n      clip-path: polygon(100% 0, 37% 100%, 100% 100%);\n      background-image: url(",
              ');\n      background-position: 50% 35%;\n    }\n  }\n',
            ])),
          Sn,
        );
        const Ln = Object(bn.c)(vn)(
          c ||
            (c = Object(On.a)([
              '\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 20px;\n  left: 20px;\n',
            ])),
        );
        const En = Object(bn.c)(kn.a)(
          a || (a = Object(On.a)(['\n  margin-right: 5px;\n  font-size: ', ';\n'])),
          (n) => n.theme.fontSize.m,
        );
        const qn = bn.c.div(
          s ||
            (s = Object(On.a)([
              '\n  width: 90vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 1200px) {\n    position: absolute;\n    top: 20%;\n    left: -5%;\n  }\n',
            ])),
        );
        const An = bn.c.div(
          u ||
            (u = Object(On.a)([
              '\n  width: 100%;\n  height: 50vh;\n  position: absolute;\n  bottom: 0;\n  background-image: url(',
              ');\n  background-position: 45% 50%;\n  background-size: cover;\n  transition: opacity 0.2s;\n  z-index: -1;\n\n  &.fade-out {\n    opacity: 0.3;\n  }\n\n  @media (min-width: 1024px) and (orientation: landscape) {\n    width: 55%;\n  }\n\n  @media (min-width: 1200px) {\n    height: 47vh;\n    width: 32%;\n    left: 0%;\n  }\n',
            ])),
          Cn,
        );
        const Qn = Object(U.b)(
          (n) => ({ level: n.level, quizType: n.quizType }),
          (n) => ({
              finishQuiz () {
                return n(sn.finishQuiz());
              },
              resetLevel () {
                return n(sn.resetLevel());
              },
              resetType () {
                return n(sn.resetType());
              },
            }),
        )((n) => {
          const e = n.children;
            const t = n.level;
            const i = n.quizType;
            const r = n.resetLevel;
            const o = n.resetType;
          return Object(zn.jsxs)(Tn, {
            children: [
              !i && Object(zn.jsxs)(Ln, { to: '/', children: [Object(zn.jsx)(En, {}), ' home'] }),
              i &&
                Object(zn.jsxs)(Ln, {
                  onClick () {
                    return o();
                  },
                  to: '/quiz',
                  children: [Object(zn.jsx)(En, {}), ' go back'],
                }),
              t &&
                Object(zn.jsxs)(Ln, {
                  onClick () {
                    return r();
                  },
                  to: '/quiz',
                  children: [Object(zn.jsx)(En, {}), ' go back'],
                }),
              Object(zn.jsx)(qn, { children: e }),
              t ? Object(zn.jsx)(An, { className: 'fade-out' }) : Object(zn.jsx)(An, {}),
            ],
          });
        });
        const Nn = Object(bn.d)(
          d ||
            (d = Object(On.a)([
              '\n  from {\n   transform:scale(0);\n   opacity: 0;\n  }\n\n  to {\n   opacity:1;\n   transform:scale(1)\n  }\n',
            ])),
        );
        const In = bn.c.h1(l || (l = Object(On.a)(['\n  margin: 0;\n  display: inline-block;\n'])));
        const Rn = bn.c.p(h || (h = Object(On.a)(['\n  margin: 0;\n'])));
        const Fn = bn.c.button(
          f ||
            (f = Object(On.a)([
              '\n  width: 90px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: ',
              ';\n  background-color: ',
              ';\n  color: white;\n  border: none;\n  border-radius: 15px;\n  padding: 10px 0;\n  transition: transform 0.2s ease;\n  cursor: pointer;\n  outline-color: ',
              ';\n  z-index: 2;\n  animation: ',
              ' 0.3s both ',
              ';\n\n  :hover {\n    transform: scale(1.05);\n  }\n\n  @media (min-width: 500px) and (orientation: landscape) {\n    width: 70px;\n    padding: 5px 0;\n  }\n\n  @media (min-width: 768px) {\n    width: 130px;\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 800px) and (orientation: landscape) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1024px) {\n    width: 180px;\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1200px) {\n    width: 130px;\n    font-size: ',
              ';\n  }\n',
            ])),
          (n) => n.theme.fontSize.s,
          (n) => {
            const e = n.theme;
            return n.secondary ? e.secondary : e.primary;
          },
          (n) => n.theme.secondary,
          (n) => n.animation,
          (n) => n.animationDelay,
          (n) => n.theme.fontSize.m,
          (n) => n.theme.fontSize.s,
          (n) => n.theme.fontSize.xl,
          (n) => n.theme.fontSize.m,
        );
        const Bn = function (n) {
          const e = n.children;
            const t = n.onClick;
            const i = n.secondary;
            const r = n.animation;
            const o = n.animationDelay;
          return Object(zn.jsx)(Fn, {
            animation: r,
            animationDelay: o,
            secondary: i,
            onClick: t,
            children: e,
          });
        };
        const Mn = bn.c.div(
          m ||
            (m = Object(On.a)([
              '\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  color: ',
              ';\n  font-weight: ',
              ';\n  animation: ',
              ' 0.2s linear both;\n\n  @media (min-width: 768px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1024px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1200px) {\n    top: 5%;\n    right: 20%;\n    font-size: ',
              ';\n    background-color: #fff;\n    z-index: 1000;\n  }\n',
            ])),
          (n) => n.theme.secondary,
          (n) => n.theme.fontWeight.light,
          Nn,
          (n) => n.theme.fontSize.m,
          (n) => n.theme.fontSize.l,
          (n) => n.theme.fontSize.m,
        );
        const Pn = function (n) {
          const e = n.children;
          return Object(zn.jsx)(Mn, { children: e });
        };
        const _n = t(42);
        const Un = t(43);
        const Wn = Object(bn.c)(In)(
          p ||
            (p = Object(On.a)([
              '\n  font-size: ',
              ';\n  color: ',
              ';\n  margin-bottom: 10px;\n\n  @media (min-width: 768px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 5rem;\n  }\n\n  @media (min-width: 1024px) and (orientation: landscape) {\n    font-size: 4rem;\n  }\n',
            ])),
          (n) => n.theme.fontSize.l,
          (n) => n.theme.secondary,
          (n) => n.theme.fontSize.xl,
        );
        const Hn = Object(bn.c)(Rn)(
          j ||
            (j = Object(On.a)([
              '\n  margin-bottom: 40px;\n\n  @media (min-width: 768px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1024px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1024px) and (orientation: landscape) {\n    font-size: ',
              ';\n  }\n',
            ])),
          (n) => n.theme.fontSize.l,
          (n) => n.theme.fontSize.xl,
          (n) => n.theme.fontSize.l,
        );
        const Gn = bn.c.div(
          x ||
            (x = Object(On.a)([
              '\n  width: 100%;\n  display: flex;\n  flex-direction: ',
              ';\n  justify-content: space-around;\n  align-items: center;\n\n  @media (min-width: 768px) {\n    width: 90%;\n  }\n\n  @media (min-width: 1200px) {\n    width: 60%;\n  }\n',
            ])),
          (n) => n.column && 'column',
        );
        const Vn = bn.c.div(
          b ||
            (b = Object(On.a)([
              '\n  margin-left: 5px;\n\n  @media (min-width: 768px) {\n    margin-left: 10px;\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1024px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1200px) {\n    font-size: ',
              ';\n  }\n',
            ])),
          (n) => n.theme.fontSize.m,
          (n) => n.theme.fontSize.l,
          (n) => n.theme.fontSize.m,
        );
        const Dn = Object(U.b)(
          (n) => ({
              quizType: n.quizType,
              countries: n.countries,
              countriesByLevel: n.countriesByLevel,
              quizLength: n.quizLength,
              bestScore: n.bestScore,
            }),
          (n) => ({
              chooseType (e) {
                return n(sn.chooseType(e));
              },
              chooseLevel (e) {
                return n(sn.chooseLevel(e));
              },
              setQuizQuestions (e) {
                return n(sn.setQuizQuestions(e));
              },
              setCountriesLevel () {
                return n(sn.setCountriesLevel());
              },
            }),
        )((n) => {
          const e = n.quizType;
            const t = n.chooseLevel;
            const i = n.chooseType;
            const r = n.setQuizQuestions;
            const o = n.quizLength;
            const c = n.bestScore;
            const a = n.setCountriesLevel;
          return Object(zn.jsxs)(zn.Fragment, {
            children: [
              e &&
                Object(zn.jsxs)(Pn, {
                  children: [
                    Object(zn.jsx)(Rn, { children: 'Your best scores:' }),
                    e === 'flags'
                      ? Object(zn.jsxs)(zn.Fragment, {
                          children: [
                            Object(zn.jsxs)(Rn, { children: ['easy: ', c.flags.easy, ' / ', o] }),
                            Object(zn.jsxs)(Rn, {
                              children: ['medium: ', c.flags.medium, ' / ', o],
                            }),
                            Object(zn.jsxs)(Rn, { children: ['hard: ', c.flags.hard, ' / ', o] }),
                          ],
                        })
                      : Object(zn.jsxs)(zn.Fragment, {
                          children: [
                            Object(zn.jsxs)(Rn, {
                              children: ['easy: ', c.capitals.easy, ' / ', o],
                            }),
                            Object(zn.jsxs)(Rn, {
                              children: ['medium: ', c.capitals.medium, ' / ', o],
                            }),
                            Object(zn.jsxs)(Rn, {
                              children: ['hard: ', c.capitals.hard, ' / ', o],
                            }),
                          ],
                        }),
                  ],
                }),
              Object(zn.jsxs)(Gn, {
                column: !0,
                onClick () {
                  return a();
                },
                children: [
                  Object(zn.jsx)(Wn, { children: 'Welcome to the quiz!' }),
                  Object(zn.jsxs)(Hn, {
                    children: ['Choose ', e ? 'level' : 'type', ' of the quiz:'],
                  }),
                  e
                    ? Object(zn.jsxs)(Gn, {
                        children: [
                          Object(zn.jsx)(Bn, {
                            animation: Nn,
                            secondary: !0,
                            onClick () {
                              t('easy'), r('easy');
                            },
                            children: 'Easy',
                          }),
                          Object(zn.jsx)(Bn, {
                            animation: Nn,
                            animationDelay: '.5s',
                            secondary: !0,
                            onClick () {
                              t('medium'), r('medium');
                            },
                            children: 'Medium',
                          }),
                          Object(zn.jsx)(Bn, {
                            animation: Nn,
                            animationDelay: '1s',
                            secondary: !0,
                            onClick () {
                              t('hard'), r('hard');
                            },
                            children: 'Hard',
                          }),
                        ],
                      })
                    : Object(zn.jsxs)(Gn, {
                        children: [
                          Object(zn.jsxs)(Bn, {
                            secondary: !0,
                            onClick () {
                              return i('flags');
                            },
                            children: [
                              'Flags',
                              Object(zn.jsx)(Vn, { children: Object(zn.jsx)(_n.a, {}) }),
                            ],
                          }),
                          Object(zn.jsxs)(Bn, {
                            secondary: !0,
                            onClick () {
                              return i('capitals');
                            },
                            children: [
                              'Capitals',
                              Object(zn.jsx)(Vn, { children: Object(zn.jsx)(Un.a, {}) }),
                            ],
                          }),
                        ],
                      }),
                ],
              }),
            ],
          });
        });
        const Yn = bn.c.div(
          O ||
            (O = Object(On.a)([
              '\n  width: 140px;\n  height: 100px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n',
            ])),
        );
        const Kn = bn.c.img(
          g || (g = Object(On.a)(['\n  height: 100%;\n  border: 1px solid ', ';\n'])),
          (n) => n.theme.grey200,
        );
        const Zn = Object(bn.c)(Rn)(
          w ||
            (w = Object(On.a)([
              '\n  text-align: center;\n\n  @media (min-width: 360px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 500px) and (orientation: landscape) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 768px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 800px) and (orientation: landscape) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1024px) and (orientation: landscape) {\n    font-size: ',
              ';\n  }\n  @media (min-width: 1200px) {\n    font-size: ',
              ';\n  }\n',
            ])),
          (n) => n.theme.fontSize.m,
          (n) => n.theme.fontSize.s,
          (n) => n.theme.fontSize.xl,
          (n) => n.theme.fontSize.m,
          (n) => n.theme.fontSize.l,
          (n) => n.theme.fontSize.m,
        );
        const Jn = function (n) {
          const e = n.flag;
            const t = n.name;
            const i = n.quiz;
          return Object(zn.jsxs)(Yn, {
            children: [
              Object(zn.jsx)(Kn, { src: e, alt: t }),
              i && Object(zn.jsx)(Zn, { children: t }),
            ],
          });
        };
        const Xn = bn.c.div(
          z ||
            (z = Object(On.a)([
              '\n  width: 150px;\n  margin-left: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  font-size: ',
              ';\n  color: ',
              ';\n\n  @media (min-width: 500px) and (orientation: landscape) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 768px) {\n    width: 300px;\n  }\n\n  @media (min-width: 1024px) {\n    width: 350px;\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1200px) {\n    width: 250px;\n    left: 20%;\n    font-size: ',
              ';\n  }\n',
            ])),
          (n) => n.theme.fontSize.l,
          (n) => n.theme.black,
          (n) => n.theme.fontSize.m,
          (n) => n.theme.fontSize.xl,
          (n) => n.theme.fontSize.l,
        );
        const $n = bn.c.input(
          y ||
            (y = Object(On.a)([
              '\n  width: 100%;\n  margin-right: 5px;\n  border: none;\n  border-bottom: 1px solid ',
              ';\n  font-size: 1.6rem;\n  background-color: transparent;\n\n  &::placeholder {\n    color: ',
              ';\n  }\n  @media (min-width: 360px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 500px) and (orientation: landscape) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 768px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 800px) and (orientation: landscape) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1024px) and (orientation: landscape) {\n    font-size: ',
              ';\n  }\n  @media (min-width: 1200px) {\n    font-size: ',
              ';\n  }\n',
            ])),
          (n) => n.theme.black,
          (n) => n.theme.grey300,
          (n) => n.theme.fontSize.m,
          (n) => n.theme.fontSize.s,
          (n) => n.theme.fontSize.xl,
          (n) => n.theme.fontSize.m,
          (n) => n.theme.fontSize.l,
          (n) => n.theme.fontSize.m,
        );
        const ne = function (n) {
          const e = n.className;
            const t = n.onChange;
            const i = n.onKeyPress;
            const r = n.placeholder;
            const o = n.children;
            const c = n.value;
          return Object(zn.jsxs)(Xn, {
            className: e,
            children: [
              Object(zn.jsx)($n, {
                value: c,
                placeholder: r,
                type: 'text',
                onChange: t,
                onKeyPress: i,
              }),
              o,
            ],
          });
        };
        const ee = bn.c.div(
          v ||
            (v = Object(On.a)([
              '\n  height: 45vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n\n  font-weight: ',
              ';\n\n  @media (min-width: 768px) {\n    height: 40vh;\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 4rem;\n  }\n\n  @media (min-width: 1024px) and (orientation: landscape) {\n    margin: 65px 0 10px;\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1200px) {\n    height: 50vh;\n    margin: 0;\n  }\n',
            ])),
          (n) => n.theme.fontWeight.bold,
          (n) => n.theme.fontSize.l,
          (n) => n.theme.fontSize.l,
        );
        const te = Object(bn.c)(Rn)(
          S ||
            (S = Object(On.a)([
              '\n  opacity: ',
              ';\n  color: ',
              ';\n  font-weight: ',
              ';\n  font-size: 1.3rem;\n\n  @media (min-width: 360px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 500px) and (orientation: landscape) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 768px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 800px) and (orientation: landscape) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1024px) and (orientation: landscape) {\n    font-size: ',
              ';\n  }\n  @media (min-width: 1200px) {\n    font-size: ',
              ';\n  }\n',
            ])),
          (n) => n.hidden && 0,
          (n) => n.isAnswerCorrect ? '#3BC14A' : 'red',
          (n) => n.theme.fontWeight.light,
          (n) => n.theme.fontSize.s,
          (n) => n.theme.fontSize.s,
          (n) => n.theme.fontSize.xl,
          (n) => n.theme.fontSize.m,
          (n) => n.theme.fontSize.l,
          (n) => n.theme.fontSize.m,
        );
        const ie = Object(U.b)(
          (n) => ({
              level: n.level,
              quizLength: n.quizLength,
              points: n.points,
              counter: n.counter,
              quizType: n.quizType,
              countriesForQuiz: n.countriesForQuiz,
              answer: n.answer,
              isChecked: n.isChecked,
              isAnswerCorrect: n.isAnswerCorrect,
            }),
          (n) => ({
              setAnswer (e) {
                return n(sn.setAnswer(e));
              },
              checkAnswer (e, t) {
                return n(sn.checkAnswer(e, t));
              },
              changeQuestion () {
                return n(sn.changeQuestion());
              },
              setQuizQuestions (e) {
                return n(sn.setQuizQuestions(e));
              },
            }),
        )((n) => {
          const e = n.level;
            const t = n.quizType;
            const i = n.countriesForQuiz;
            const r = n.counter;
            const o = n.quizLength;
            const c = n.points;
            const a = n.isAnswerCorrect;
            const s = n.isChecked;
            const u = n.setAnswer;
            const d = n.answer;
            const l = n.checkAnswer;
            const h = n.changeQuestion;
            const f = n.setQuizQuestions;
          return (
            Object(F.useEffect)(() => {
              f(e);
            }, []),
            Object(zn.jsxs)(zn.Fragment, {
              children: [
                Object(zn.jsxs)(Pn, {
                  children: [
                    Object(zn.jsxs)(Rn, { children: ['Level: ', e] }),
                    Object(zn.jsxs)(Rn, { children: ['Question: ', r + 1, ' / ', o] }),
                    Object(zn.jsxs)(Rn, { children: ['Points: ', c, ' / ', o] }),
                  ],
                }),
                Object(zn.jsxs)(ee, {
                  children: [
                    Object(zn.jsx)(Rn, {
                      children:
                        t === 'flags'
                          ? 'Guess what country the flag is:'
                          : 'What is capital of this country?',
                    }),
                    t === 'capitals'
                      ? Object(zn.jsx)(Jn, { flag: i[r].flag, name: i[r].name, quiz: 'true' })
                      : Object(zn.jsx)(Jn, { flag: i[r].flag }),
                    Object(zn.jsx)(ne, {
                      value: d,
                      placeholder: t === 'flags' ? 'Country' : 'Capital',
                      onChange (n) {
                        u(n.target.value);
                      },
                      onKeyPress (n) {
                        n.key === 'Enter' && d !== '' && !s && l(d), s && r < 10 && h();
                      },
                    }),
                    s &&
                      Object(zn.jsx)(te, {
                        isAnswerCorrect: a,
                        children: a
                          ? 'Good!'
                          : "You're wrong. It's ".concat(
                              t === 'flags' ? i[r].name : i[r].capital,
                              '.',
                            ),
                      }),
                    Object(zn.jsx)(Bn, {
                      secondary: !0,
                      onClick () {
                        d !== '' && !s && l(d), s && r < 10 && h();
                      },
                      children: s ? 'Next' : 'Check',
                    }),
                  ],
                }),
              ],
            })
          );
        });
        const re = `${t.p  }static/media/Location.dd8c7afc.svg`;
        const oe = bn.c.div(
          C ||
            (C = Object(On.a)([
              '\n  width: 100%;\n  height: ',
              ';\n  display: flex;\n  flex-direction: ',
              ';\n  align-items: center;\n  justify-content: space-around;\n\n  @media (min-width: 1200px) {\n    width: ',
              ';\n  }\n',
            ])),
          (n) => n.row ? '' : '60%',
          (n) => n.row ? 'row' : 'column',
          (n) => n.row ? '' : '40%',
        );
        const ce = bn.c.img(
          k ||
            (k = Object(On.a)([
              '\n  width: 160px;\n  height: 160px;\n\n  @media (min-width: 360px) {\n    width: 215px;\n    height: 215px;\n  }\n\n  @media (min-width: 768px) {\n    width: 300px;\n    height: 300px;\n  }\n\n  @media (min-width: 1024px) {\n    width: 350px;\n    height: 350px;\n  }\n\n  @media (min-width: 1200px) {\n    width: 200px;\n    height: 200px;\n  }\n',
            ])),
        );
        const ae = Object(bn.c)(Rn)(
          T ||
            (T = Object(On.a)([
              '\n  margin-bottom: 20px;\n  line-height: 1.5;\n\n  @media (min-width: 360px) {\n    font-size: ',
              ';\n  }\n  @media (min-width: 768px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1024px) {\n    font-size: ',
              ';\n  }\n\n  @media (min-width: 1024px) and (orientation: landscape) {\n    font-size: ',
              ';\n  }\n',
            ])),
          (n) => n.theme.fontSize.m,
          (n) => n.theme.fontSize.l,
          (n) => n.theme.fontSize.xxl,
          (n) => n.theme.fontSize.m,
        );
        const se = Object(U.b)(
          (n) => ({
              points: n.points,
              quizLength: n.quizLength,
              level: n.level,
              levels: n.levels,
              quizType: n.quizType,
            }),
          (n) => ({
              resetLevel (e) {
                return n(sn.resetLevel(e));
              },
              resetType () {
                return n(sn.resetType());
              },
              setNextLevel (e) {
                return n(sn.setNextLevel(e));
              },
              setBestScore (e, t, i) {
                return n(sn.setBestScore(e, t, i));
              },
            }),
        )((n) => {
          const e = n.points;
            const t = n.quizLength;
            const i = n.resetLevel;
            const r = n.resetType;
            const o = n.level;
            const c = n.setNextLevel;
            const a = n.setBestScore;
            const s = n.quizType;
          return (
            Object(F.useEffect)(() => {
              a(e, o, s);
            }, []),
            Object(zn.jsxs)(oe, {
              children: [
                Object(zn.jsx)(ce, { src: re, alt: '' }),
                Object(zn.jsxs)(ae, {
                  children: ['You answered correctly to ', e, ' / ', t, ' questions.'],
                }),
                o !== 'hard'
                  ? Object(zn.jsxs)(oe, {
                      row: !0,
                      children: [
                        Object(zn.jsx)(Bn, {
                          secondary: !0,
                          onClick () {
                            i(), r();
                          },
                          children: 'Quiz menu',
                        }),
                        e >= 5
                          ? Object(zn.jsx)(Bn, {
                              onClick () {
                                i(), c(o);
                              },
                              secondary: !0,
                              children: 'Next level',
                            })
                          : Object(zn.jsx)(Bn, {
                              onClick () {
                                i(o);
                              },
                              secondary: !0,
                              children: 'Try again',
                            }),
                      ],
                    })
                  : Object(zn.jsxs)(oe, {
                      row: !0,
                      children: [
                        Object(zn.jsx)(Bn, {
                          secondary: !0,
                          onClick () {
                            i(), r();
                          },
                          children: 'Quiz menu',
                        }),
                        Object(zn.jsx)(Bn, {
                          onClick () {
                            i(o);
                          },
                          secondary: !0,
                          children: 'Try again',
                        }),
                      ],
                    }),
              ],
            })
          );
        });
        const ue = Object(U.b)((n) => ({ level: n.level, counter: n.counter, isChecked: n.isChecked }))((n) => {
          const e = n.level;
            const t = n.counter;
            const i = n.isChecked;
          return Object(zn.jsx)(Qn, {
            children:
              t === 9 && i
                ? Object(zn.jsx)(se, {})
                : Object(zn.jsx)(zn.Fragment, {
                    children: e ? Object(zn.jsx)(ie, {}) : Object(zn.jsx)(Dn, {}),
                  }),
          });
        });
        const de = t(20);
        const le = t(21);
        const he = t(23);
        const fe = t(22);
        const me = bn.c.img(L || (L = Object(On.a)(['\n  height: 100%;\n'])));
        const pe = bn.c.div(E || (E = Object(On.a)(['\n  height: 15vh;\n'])));
        const je = function (n) {
          const e = n.src;
            const t = n.alt;
          return Object(zn.jsx)(pe, { children: Object(zn.jsx)(me, { src: e, alt: t }) });
        };
        const xe = `${t.p  }static/media/logo.7c42f9aa.png`;
        const be = t(44);
        const Oe = bn.c.header(
          q ||
            (q = Object(On.a)([
              '\n  position: fixed;\n  height: 15vh;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 0.25fr 1fr 0.15fr;\n  align-items: center;\n  padding-right: 10px;\n  background-color: white;\n  box-shadow: ',
              ';\n  z-index: 1000;\n\n  @media (min-width: 500px) {\n    padding: 0 3vw;\n  }\n\n  @media (min-width: 1200px) {\n    grid-template-columns: 0.15fr 1fr 0.15fr;\n  }\n',
            ])),
          (n) => n.theme.boxShadow,
        );
        const ge = function (n) {
          const e = n.searchCountryFn;
          return Object(zn.jsxs)(Oe, {
            children: [
              Object(zn.jsx)(je, { src: xe, alt: 'CountryInfo logo' }),
              Object(zn.jsx)(ne, {
                className: 'Input',
                placeholder: 'Search',
                onChange (n) {
                  return e(n);
                },
                children: Object(zn.jsx)(be.a, {}),
              }),
              Object(zn.jsx)(vn, { to: '/quiz', children: 'QUIZ' }),
            ],
          });
        };
        const we = bn.c.div(
          A ||
            (A = Object(On.a)([
              '\n  min-height: 55vh;\n  width: 95vw;\n  display: grid;\n  grid-template-rows: 0.7fr 0.15fr 0.25fr;\n  background-color: white;\n  margin-bottom: 20px;\n  box-shadow: ',
              ';\n\n  @media (min-width: 500px) and (orientation: landscape) {\n    width: 80vw;\n    min-height: 85vh;\n  }\n\n  @media (min-width: 768px) {\n    width: 80vw;\n    min-height: 40vh;\n  }\n\n  @media (min-width: 800px) and (orientation: landscape) {\n    width: 80vw;\n    min-height: 85vh;\n  }\n\n  @media (min-width: 1024px) {\n    width: 30vw;\n  }\n',
            ])),
          (n) => n.theme.boxShadow,
        );
        const ze = bn.c.div(
          Q ||
            (Q = Object(On.a)([
              '\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ',
              ';\n  color: white;\n',
            ])),
          (n) => {
            const e = n.theme;
            return n.color && e.primary;
          },
        );
        const ye = bn.c.h2(
          N ||
            (N = Object(On.a)([
              '\n  margin: 15px 0;\n  width: 100%;\n  font-size: ',
              ';\n  line-height: 2;\n  text-align: center;\n\n  @media (min-width: 1200px) {\n    font-size: ',
              ';\n  }\n',
            ])),
          (n) => n.theme.fontSize.m,
          (n) => n.theme.fontSize.l,
        );
        const ve = Object(bn.c)(Rn)(
          I ||
            (I = Object(On.a)([
              '\n  display: ',
              ';\n  margin: 0 0 10px;\n\n  @media (min-width: 1200px) {\n    font-size: ',
              ';\n  }\n\n  :last-child {\n    padding-bottom: 25px;\n  }\n',
            ])),
          (n) => n.hiddenInfo ? 'none' : 'block',
          (n) => n.theme.fontSize.m,
        );
        const Se = (function (n) {
          Object(he.a)(t, n);
          const e = Object(fe.a)(t);
          function t() {
            let n;
            Object(de.a)(this, t);
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
            return ((n = e.call.apply(e, [this].concat(r))).state = { hiddenInfo: !0 }), n;
          }
          return (
            Object(le.a)(t, [
              {
                key: 'toggleInfoVisibility',
                value () {
                  this.setState((n) => ({ hiddenInfo: !n.hiddenInfo }));
                },
              },
              {
                key: 'render',
                value () {
                  const n = this;
                    const e = this.props;
                    const t = e.name;
                    const i = e.flag;
                    const r = e.capital;
                    const o = e.currency;
                    const c = e.language;
                    const a = e.population;
                    const s = e.region;
                    const u = e.subregion;
                    const d = e.timezone;
                    const l = this.state.hiddenInfo;
                  return Object(zn.jsxs)(we, {
                    children: [
                      Object(zn.jsx)(ze, { children: Object(zn.jsx)(Jn, { flag: i, name: t }) }),
                      Object(zn.jsxs)(ze, {
                        color: 'true',
                        children: [
                          Object(zn.jsx)(ye, { children: t }),
                          Object(zn.jsxs)(ze, {
                            children: [
                              Object(zn.jsxs)(ve, { hiddenInfo: l, children: ['Capital: ', r] }),
                              Object(zn.jsxs)(ve, { hiddenInfo: l, children: ['Currency: ', o] }),
                              Object(zn.jsxs)(ve, { hiddenInfo: l, children: ['Language: ', c] }),
                              Object(zn.jsxs)(ve, { hiddenInfo: l, children: ['Population: ', a] }),
                              Object(zn.jsxs)(ve, { hiddenInfo: l, children: ['Region: ', s] }),
                              Object(zn.jsxs)(ve, { hiddenInfo: l, children: ['Subregion: ', u] }),
                              Object(zn.jsxs)(ve, { hiddenInfo: l, children: ['Timezone: ', d] }),
                            ],
                          }),
                        ],
                      }),
                      Object(zn.jsx)(ze, {
                        children: Object(zn.jsx)(Bn, {
                          onClick () {
                            n.toggleInfoVisibility();
                          },
                          hiddenInfo: l,
                          children: l ? 'Show info' : 'Hide info',
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(F.Component);
        const Ce = bn.c.div(
          R ||
            (R = Object(On.a)([
              '\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  padding: 15vh 3% 0;\n\n  @media (min-width: 500px) and (orientation: landscape) {\n    padding: 17vh 3% 0;\n  }\n\n  @media (min-width: 1024px) {\n    grid-template-columns: repeat(3, 1fr);\n    grid-column-gap: 20px;\n    grid-row-gap: 20px;\n  }\n',
            ])),
        );
        const ke = function (n) {
          const e = n.countries;
          return Object(zn.jsx)(Ce, {
            children: e.length
              ? e.map((n) => Object(zn.jsx)(
                    Se,
                    {
                      name: n.name,
                      flag: n.flag,
                      capital: n.capital,
                      currency: n.currencies[0].name,
                      language: n.languages[0].name,
                      population: n.population.toLocaleString(),
                      region: n.region,
                      subregion: n.subregion,
                      timezone: n.timezones[0],
                    },
                    n.alpha3Code,
                  ))
              : null,
          });
        };
        const Te = (function (n) {
          Object(he.a)(t, n);
          const e = Object(fe.a)(t);
          function t() {
            let n;
            Object(de.a)(this, t);
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
            return ((n = e.call.apply(e, [this].concat(r))).state = { filteredCountries: [] }), n;
          }
          return (
            Object(le.a)(t, [
              {
                key: 'findCountry',
                value (n) {
                  const e = this.props.countries.filter((e) => e.name.toLowerCase().includes(n.target.value.toLowerCase()));
                  this.setState({ filteredCountries: e });
                },
              },
              {
                key: 'render',
                value () {
                  const n = this;
                    const e = this.state.filteredCountries;
                    const t = this.props.countries;
                  return Object(zn.jsxs)(zn.Fragment, {
                    children: [
                      Object(zn.jsx)(ge, {
                        searchCountryFn (e) {
                          return n.findCountry(e);
                        },
                      }),
                      Object(zn.jsx)(ke, { countries: e.length ? e : t }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(F.Component);
        const Le = Object(U.b)((n) => ({ countries: n.countries }))(Te);
        const Ee = function () {
          return Object(zn.jsx)(U.a, {
            store: xn,
            children: Object(zn.jsx)(P.a, {
              children: Object(zn.jsx)(yn, {
                children: Object(zn.jsxs)(_.c, {
                  children: [
                    Object(zn.jsx)(_.a, { exact: !0, path: '/', component: Le }),
                    Object(zn.jsx)(_.a, { path: '/quiz', component: ue }),
                  ],
                }),
              }),
            }),
          });
        };
      M.a.render(Object(zn.jsx)(Ee, {}), document.getElementById('root'));
    },
  },
  [[63, 1, 2]],
]);
// # sourceMappingURL=main.7df9acc1.chunk.js.map
