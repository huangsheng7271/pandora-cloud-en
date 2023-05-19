(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[734], {
    69403: function(e, n, t) {
        "use strict";
        var r, a, i, o, s, l, u, c, d;
        t.d(n, {
            Jq: function() {
                return s
            },
            Os: function() {
                return i
            },
            uU: function() {
                return o
            }
        }),
        (l = r || (r = {})).Default = "default",
        l.Dark = "dark",
        (a || (a = {})).Retrieval = "retrieval",
        (u = i || (i = {})).Next = "next",
        u.Variant = "variant",
        u.Continue = "continue",
        (c = o || (o = {})).Unknown = "unknown",
        c.User = "user",
        c.Assistant = "assistant",
        c.System = "system",
        c.Critic = "critic",
        c.Tool = "tool",
        (d = s || (s = {})).Root = "root",
        d.System = "system",
        d.Prompt = "prompt",
        d.Completion = "completion"
    },
    75515: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return i
            }
        });
        var r = t(35250)
          , a = t(19841);
        function i(e) {
            var n = e.url
              , t = e.name
              , i = e.size
              , o = e.large
              , s = e.className;
            return (0,
            r.jsxs)("div", {
                className: (0,
                a.Z)("relative", s),
                style: {
                    width: i,
                    height: i
                },
                children: [(0,
                r.jsx)("img", {
                    src: n,
                    alt: "".concat(t, " logo"),
                    className: (0,
                    a.Z)("h-full w-full bg-white", o ? "rounded-[5px]" : "rounded-sm")
                }), (0,
                r.jsx)("div", {
                    className: (0,
                    a.Z)("absolute inset-0 ring-1 ring-inset ring-black/10", o ? "rounded-[5px]" : "rounded-sm")
                })]
            })
        }
    },
    78042: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return es
            }
        });
        var r = t(22830)
          , a = t(35250)
          , i = t(61888)
          , o = t(70079)
          , s = t(39324)
          , l = t(71209)
          , u = t(3001)
          , c = t(75908)
          , d = t(35290)
          , f = t(82841)
          , h = t(36218)
          , g = t(32787)
          , m = t(85023)
          , p = t(64135)
          , v = t(88038)
          , x = t(55041)
          , b = (0,
        u.vU)({
            welcomeBack: {
                id: "existingUserAgeConfirmationModal.welcomeBack",
                defaultMessage: "Welcome back, Italy!",
                description: "Title for the age confirmation modal for Italian users"
            },
            ageRequirementsButton: {
                id: "existingUserAgeConfirmationModal.ageRequirementsButton",
                defaultMessage: "I meet OpenAI's age requirements",
                description: "Primary button to confirm the user meets the age requirements"
            },
            logoutButton: {
                id: "existingUserAgeConfirmationModal.logoutButton",
                defaultMessage: "Log out",
                description: "Secondary button to log out of the platform"
            },
            announcementParagraph1: {
                id: "existingUserAgeConfirmationModal.announcementParagraph1",
                defaultMessage: "We’re pleased to resume offering ChatGPT in Italy. To continue on ChatGPT, please confirm that you are 18+ or are 13+ and have consent from your parent or guardian to use ChatGPT.",
                description: "First paragraph of the announcement, explaining the age requirements"
            },
            privacyPolicyLink: {
                id: "existingUserAgeConfirmationModal.privacyPolicyLink",
                defaultMessage: "Privacy policy",
                description: "Link to the privacy policy"
            },
            helpCenterArticleLink: {
                id: "existingUserAgeConfirmationModal.helpCenterArticleLink",
                defaultMessage: "this help center article",
                description: "Link to the help center article about ChatGPT development"
            },
            announcementParagraph2: {
                id: "existingUserAgeConfirmationModal.announcementParagraph2",
                defaultMessage: "For information about how we collect and use personal data, please see our {privacyPolicyLink}. For information about how we develop and train ChatGPT, please see {helpCenterArticleLink}.",
                description: "Second paragraph of the announcement, providing links to more information"
            }
        })
          , y = "2023-04-25"
          , j = "".concat("oai/apps/hasSeenAgeConfirmationModal", "/").concat(y);
        function C(e) {
            var n = e.onClose
              , t = (0,
            c.Z)()
              , r = (0,
            o.useCallback)(function() {
                m.m.setItem(j, !0),
                n()
            }, [n])
              , s = (0,
            f.WS)();
            return (0,
            o.useEffect)(function() {
                s && s(h.s6.ageConfirmationModal, {
                    content: y
                })
            }, []),
            (0,
            a.jsx)(x.ZP, {
                isOpen: !0,
                onModalClose: i.noop,
                type: "success",
                title: t.formatMessage(b.welcomeBack),
                primaryButton: (0,
                a.jsx)(x.mH, {
                    title: t.formatMessage(b.ageRequirementsButton),
                    color: "primary",
                    onClick: r
                }),
                secondaryButton: (0,
                a.jsx)(x.mH, {
                    title: t.formatMessage(b.logoutButton),
                    color: "light",
                    onClick: function() {
                        s(h.s6.clickLogOut, {
                            eventSource: "mouse"
                        }),
                        (0,
                        g.w7)()
                    },
                    className: "border-gray-800 hover:border-gray-700"
                }),
                children: (0,
                a.jsx)(w, {})
            })
        }
        var w = function() {
            var e = (0,
            c.Z)();
            return (0,
            a.jsx)("div", {
                className: "mb-6 mt-4 sm:mt-6",
                children: (0,
                a.jsxs)("div", {
                    className: "prose prose-invert text-base text-gray-500",
                    children: [(0,
                    a.jsx)("p", {
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, b.announcementParagraph1))
                    }), (0,
                    a.jsx)("p", {
                        children: (0,
                        a.jsx)(d.Z, (0,
                        l._)((0,
                        s._)({}, b.announcementParagraph2), {
                            values: {
                                privacyPolicyLink: (0,
                                a.jsx)("a", {
                                    href: "https://openai.com/policies/privacy-policy",
                                    target: "_blank",
                                    className: "text-gray-500 underline",
                                    rel: "noreferrer",
                                    children: e.formatMessage(b.privacyPolicyLink)
                                }),
                                helpCenterArticleLink: (0,
                                a.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed",
                                    target: "_blank",
                                    className: "text-gray-500 underline",
                                    rel: "noreferrer",
                                    children: e.formatMessage(b.helpCenterArticleLink)
                                })
                            }
                        }))
                    })]
                })
            })
        }
          , k = t(19208)
          , _ = t.n(k)
          , M = t(68555)
          , T = t(4337)
          , N = t(34303)
          , P = t(53086)
          , I = t(5759)
          , S = t(66958);
        function Z() {
            var e = (0,
            T._)(["flex gap-4 mt-6"]);
            return Z = function() {
                return e
            }
            ,
            e
        }
        function R(e) {
            var n = e.onBack
              , t = e.onNext
              , r = e.onSubmit;
            return (0,
            a.jsxs)(D, {
                children: [n && (0,
                a.jsx)(S.z, {
                    as: "button",
                    color: "neutral",
                    onClick: n,
                    children: "Back"
                }), t && (0,
                a.jsx)(S.z, {
                    as: "button",
                    onClick: t,
                    color: "neutral",
                    className: "ml-auto",
                    children: "Next"
                }), r && (0,
                a.jsx)(S.z, {
                    as: "button",
                    onClick: r,
                    color: "primary",
                    className: "ml-auto",
                    children: "Done"
                })]
            })
        }
        var D = N.Z.div(Z());
        function E() {
            var e = (0,
            T._)(["prose dark:prose-invert"]);
            return E = function() {
                return e
            }
            ,
            e
        }
        function F() {
            var e = (0,
            T._)(["!mt-4 font-normal !mb-2"]);
            return F = function() {
                return e
            }
            ,
            e
        }
        function L() {
            var e = (0,
            T._)(["mb-4"]);
            return L = function() {
                return e
            }
            ,
            e
        }
        function A() {
            var e = (0,
            T._)(["w-full h-[1px] bg-gray-300 opacity-20"]);
            return A = function() {
                return e
            }
            ,
            e
        }
        var B = (0,
        u.vU)({
            pageTitle: {
                id: "onboarding.pageTitle",
                defaultMessage: "Welcome to {name}",
                description: "Page title displayed at the beginning of the onboarding process"
            },
            keepInMind: {
                id: "onboarding.keepInMind",
                defaultMessage: "Here are a few things to keep in mind before we get started:",
                description: "Introduction text for the onboarding process"
            },
            page0Subtitle: {
                id: "onboarding.page0Subtitle",
                defaultMessage: "This is a free research preview.",
                description: "Subtitle for Page 0"
            },
            page0Disclaimer1: {
                id: "onboarding.page0Disclaimer1",
                defaultMessage: "Our goal is to get external feedback in order to improve our systems and make them safer.",
                description: "Disclaimer 1 for Page 0"
            },
            page0Disclaimer2: {
                id: "onboarding.page0Disclaimer2",
                defaultMessage: "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
                description: "Disclaimer 2 for Page 0"
            },
            page1Subtitle: {
                id: "onboarding.page1Subtitle",
                defaultMessage: "How we collect data",
                description: "Subtitle for Page 1"
            },
            page1Disclaimer1: {
                id: "onboarding.page1Disclaimer1",
                defaultMessage: "Conversations may be reviewed by our AI trainers to improve our systems.",
                description: "Disclaimer 1 for Page 1"
            },
            page1Disclaimer2: {
                id: "onboarding.page1Disclaimer2",
                defaultMessage: "Please don't share any sensitive information in your conversations.",
                description: "Disclaimer 2 for Page 1"
            },
            page2Subtitle: {
                id: "onboarding.page2Subtitle",
                defaultMessage: "We'd love your feedback!",
                description: "Subtitle for Page 2"
            },
            page2Disclaimer1: {
                id: "onboarding.page2Disclaimer1",
                defaultMessage: "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.",
                description: "Disclaimer 1 for Page 2"
            },
            page2Disclaimer2: {
                id: "onboarding.page2Disclaimer2",
                defaultMessage: "Share your feedback in our <link>Discord server</link>.",
                description: "Disclaimer 2 for Page 2, with link to Discord"
            }
        })
          , q = "oai/apps/hasSeenOnboarding"
          , U = P.G.id
          , O = P.G.name
          , z = function() {
            var e = (0,
            o.useCallback)(function() {
                m.m.setItem("".concat(q, "/").concat(U), new Date().toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                }))
            }, [])
              , n = (0,
            r._)((0,
            o.useState)(null), 2)
              , t = n[0]
              , a = n[1];
            (0,
            o.useEffect)(function() {
                var e = m.m.getItem("".concat(q, "/").concat(U));
                a(!!e && e)
            }, [a]);
            var i = (0,
            o.useCallback)(function() {
                return t ? new Date(!0 === t ? "2022-12-14" : t) : t
            }, [t]);
            return (0,
            o.useMemo)(function() {
                return {
                    setHasSeenOnboarding: e,
                    getHasSeenOnboardingDate: i
                }
            }, [i, e])
        };
        function H(e) {
            var n = e.onClose
              , t = z().setHasSeenOnboarding
              , i = (0,
            r._)((0,
            o.useState)(0), 2)
              , s = i[0]
              , l = i[1]
              , u = (0,
            o.useCallback)(function() {
                n(!0),
                t()
            }, [n, t]);
            return (0,
            a.jsxs)(Q, {
                children: [0 === s && (0,
                a.jsx)(W, {
                    onChangePage: l
                }), 1 === s && (0,
                a.jsx)(G, {
                    onChangePage: l
                }), 2 === s && (0,
                a.jsx)($, {
                    onChangePage: l,
                    onSubmit: u
                })]
            })
        }
        var V = function() {
            return "chat" === U ? (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("div", {
                    className: "mb-5",
                    children: (0,
                    a.jsx)(J, {
                        children: (0,
                        a.jsx)("b", {
                            children: O
                        })
                    })
                }), (0,
                a.jsx)(K, {})]
            }) : (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(J, {
                    children: (0,
                    a.jsx)(d.Z, (0,
                    l._)((0,
                    s._)({}, B.pageTitle), {
                        values: {
                            name: (0,
                            a.jsx)("b", {
                                children: O
                            })
                        }
                    }))
                }), (0,
                a.jsx)("p", {
                    children: (0,
                    a.jsx)(d.Z, (0,
                    s._)({}, B.keepInMind))
                }), (0,
                a.jsx)(K, {})]
            })
        }
          , W = function(e) {
            var n = e.onChangePage;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(V, {}), (0,
                a.jsx)(Y, {
                    children: (0,
                    a.jsx)(d.Z, (0,
                    s._)({}, B.page0Subtitle))
                }), (0,
                a.jsxs)(I.I, {
                    children: [(0,
                    a.jsx)(I.Z, {
                        icon: "\uD83D\uDD2C",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, B.page0Disclaimer1))
                    }), (0,
                    a.jsx)(I.Z, {
                        icon: "\uD83D\uDEA8",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, B.page0Disclaimer2))
                    })]
                }), (0,
                a.jsx)(R, {
                    onNext: function() {
                        return n(1)
                    }
                })]
            })
        }
          , G = function(e) {
            var n = e.onChangePage;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(V, {}), (0,
                a.jsx)(Y, {
                    children: (0,
                    a.jsx)(d.Z, (0,
                    s._)({}, B.page1Subtitle))
                }), (0,
                a.jsxs)(I.I, {
                    children: [(0,
                    a.jsx)(I.Z, {
                        icon: "\uD83E\uDDBE",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, B.page1Disclaimer1))
                    }), (0,
                    a.jsx)(I.Z, {
                        icon: "\uD83D\uDD10",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, B.page1Disclaimer2))
                    })]
                }), (0,
                a.jsx)(R, {
                    onBack: function() {
                        return n(0)
                    },
                    onNext: function() {
                        return n(2)
                    }
                })]
            })
        }
          , $ = function(e) {
            var n = e.onChangePage
              , t = e.onSubmit
              , r = (0,
            o.useRef)(null);
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(V, {}), (0,
                a.jsx)(Y, {
                    children: (0,
                    a.jsx)(d.Z, (0,
                    s._)({}, B.page2Subtitle))
                }), (0,
                a.jsxs)(I.I, {
                    children: [(0,
                    a.jsx)(I.Z, {
                        icon: "\uD83D\uDC4D",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, B.page2Disclaimer1))
                    }), (0,
                    a.jsx)(I.Z, {
                        icon: "\uD83D\uDCAC",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        l._)((0,
                        s._)({}, B.page2Disclaimer2), {
                            values: {
                                link: function(e) {
                                    return (0,
                                    a.jsx)("a", {
                                        href: "https://discord.gg/openai",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: e
                                    })
                                }
                            }
                        }))
                    })]
                }), (0,
                a.jsx)(R, {
                    onBack: function() {
                        return n(1)
                    },
                    onSubmit: function() {
                        return null == t ? void 0 : t(r)
                    }
                })]
            })
        }
          , Q = N.Z.div(E())
          , J = N.Z.h2(F())
          , Y = N.Z.h4(L())
          , K = N.Z.div(A())
          , X = t(44541)
          , ee = (0,
        u.vU)({
            tryGPT4: {
                id: "releaseAnnouncement.tryGPT4",
                defaultMessage: "Try GPT-4",
                description: "Button text to try GPT-4"
            },
            maybeLater: {
                id: "releaseAnnouncement.maybeLater",
                defaultMessage: "Maybe later",
                description: "Button text to dismiss the release announcement"
            },
            introducingGPT4: {
                id: "releaseAnnouncement.introducingGPT4",
                defaultMessage: "Introducing GPT-4",
                description: "Heading for the GPT-4 release announcement"
            },
            ourLatestModel: {
                id: "releaseAnnouncement.ourLatestModel",
                defaultMessage: "Our latest model, <link>GPT-4</link>, is now available to Plus subscribers.",
                description: "Text to introduce GPT-4 and provide a link to its product page"
            },
            advancedReasoning: {
                id: "releaseAnnouncement.advancedReasoning",
                defaultMessage: "Advanced reasoning",
                description: "List item highlighting advanced reasoning in GPT-4"
            },
            complexInstructions: {
                id: "releaseAnnouncement.complexInstructions",
                defaultMessage: "Complex instructions",
                description: "List item highlighting complex instructions in GPT-4"
            },
            moreCreativity: {
                id: "releaseAnnouncement.moreCreativity",
                defaultMessage: "More creativity",
                description: "List item highlighting more creativity in GPT-4"
            },
            dynamicAdjustment: {
                id: "releaseAnnouncement.dynamicAdjustment",
                defaultMessage: "To give every Plus subscriber a chance to try the model, we'll dynamically adjust the cap for GPT-4 usage based on demand.",
                description: "Text explaining the dynamic adjustment of GPT-4 usage based on demand"
            },
            feb13Update: {
                id: "releaseAnnouncement.feb13Update",
                defaultMessage: "Feb 13 update",
                description: "Text for the February 13 update announcement"
            },
            turboToDefault: {
                id: "releaseAnnouncement.turboToDefault",
                defaultMessage: "Turbo",
                description: "Text for Turbo version in the announcement"
            },
            defaultVersion: {
                id: "releaseAnnouncement.defaultVersion",
                defaultMessage: "Default",
                description: "Text for the Default version in the announcement"
            },
            turboDefaultSwitch: {
                id: "releaseAnnouncement.turboDefaultSwitch",
                defaultMessage: "Based on user feedback, we're defaulting you to a faster version of ChatGPT, previously known as Turbo. We'll keep the previous version around for a while.",
                description: "Text explaining the switch from Turbo to the Default version based on user feedback"
            },
            gpt4HasEnhancedCapabilities: {
                id: "releaseAnnouncement.gpt4HasEnhancedCapabilities",
                defaultMessage: "GPT-4 has enhanced capabilities in:",
                description: "Text to introduce GPT-4's enhanced capabilities"
            }
        })
          , en = "2023-03-12"
          , et = "".concat("oai/apps/hasSeenReleaseAnnouncement", "/").concat(en);
        function er(e) {
            var n = e.onClose
              , t = (0,
            M.useRouter)()
              , r = (0,
            o.useCallback)(function() {
                m.m.setItem(et, !0),
                n()
            }, [n])
              , i = (0,
            o.useCallback)(function() {
                r(),
                t.replace("/?model=".concat(X.f_))
            }, [r, t])
              , s = (0,
            f.WS)();
            return (0,
            o.useEffect)(function() {
                s && s(h.s6.announcementViewed, {
                    content: en
                })
            }, []),
            (0,
            a.jsx)(x.ZP, {
                isOpen: !0,
                onModalClose: r,
                type: "success",
                title: "",
                theme: "dark",
                fullBleed: !0,
                primaryButton: (0,
                a.jsx)(x.mH, {
                    title: "Try GPT-4",
                    color: "light",
                    onClick: i
                }),
                secondaryButton: (0,
                a.jsx)(x.mH, {
                    title: "Maybe later",
                    color: "dark",
                    onClick: r,
                    className: "border-gray-800 hover:border-gray-700"
                }),
                children: (0,
                a.jsx)(ea, {})
            })
        }
        var ea = function() {
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(_(), {
                    src: "/images/gpt-4-motif.svg",
                    alt: "Gpt-4 announcement banner",
                    width: "480",
                    height: "160",
                    className: "mt-3.5 w-full"
                }), (0,
                a.jsx)("div", {
                    className: "m-4 mb-6 flex flex-col gap-6 sm:m-6",
                    children: (0,
                    a.jsxs)("div", {
                        className: "prose prose-invert text-base",
                        children: [(0,
                        a.jsx)("h2", {
                            children: (0,
                            a.jsx)(d.Z, (0,
                            s._)({}, ee.introducingGPT4))
                        }), (0,
                        a.jsx)("p", {
                            children: (0,
                            a.jsx)(d.Z, (0,
                            l._)((0,
                            s._)({}, ee.ourLatestModel), {
                                tagName: "span",
                                values: {
                                    link: function(e) {
                                        return (0,
                                        a.jsx)("a", {
                                            href: "https://openai.com/product/gpt-4",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: e
                                        })
                                    }
                                }
                            }))
                        }), (0,
                        a.jsx)("p", {
                            children: (0,
                            a.jsx)(d.Z, (0,
                            s._)({}, ee.gpt4HasEnhancedCapabilities))
                        }), (0,
                        a.jsxs)("ul", {
                            children: [(0,
                            a.jsxs)("li", {
                                children: [(0,
                                a.jsx)(d.Z, (0,
                                s._)({}, ee.advancedReasoning)), " "]
                            }), (0,
                            a.jsx)("li", {
                                children: (0,
                                a.jsx)(d.Z, (0,
                                s._)({}, ee.complexInstructions))
                            }), (0,
                            a.jsx)("li", {
                                children: (0,
                                a.jsx)(d.Z, (0,
                                s._)({}, ee.moreCreativity))
                            })]
                        }), (0,
                        a.jsx)("p", {
                            children: (0,
                            a.jsx)(d.Z, (0,
                            s._)({}, ee.dynamicAdjustment))
                        })]
                    })
                })]
            })
        }
          , ei = function(e) {
            var n = e.onClose;
            return (0,
            a.jsx)(x.ZP, {
                isOpen: !0,
                onModalClose: i.noop,
                type: "success",
                primaryButton: void 0,
                children: (0,
                a.jsx)(H, {
                    onClose: n
                })
            })
        }
          , eo = function(e) {
            var n = e.onClose;
            return (0,
            a.jsx)(er, {
                onClose: n
            })
        };
        function es(e) {
            var n, t, i, s = e.userCountry, l = (0,
            r._)((0,
            o.useState)(0), 2), u = l[0], c = l[1], d = z().getHasSeenOnboardingDate, f = (t = (n = (0,
            p.hz)()).has(v.Vn),
            i = !!m.m.getItem(j),
            0 === n.size ? "loading" : "IT" !== s || i ? "hide" : t ? "show" : "hide"), h = function() {
                var e = z().getHasSeenOnboardingDate
                  , n = (0,
                p.Xj)().isLoading
                  , t = (0,
                p.hz)();
                if (n)
                    return "loading";
                var r = e();
                return m.m.getItem(et) || !r ? "hide" : t.has("model_preview") && r < new Date(en) ? "show" : "hide"
            }(), g = (0,
            o.useMemo)(function() {
                return [{
                    Modal: C,
                    getModalState: function() {
                        return f
                    }
                }, {
                    Modal: ei,
                    getModalState: function() {
                        var e = d();
                        return null === e ? "loading" : !1 === e ? "show" : "hide"
                    }
                }, {
                    Modal: eo,
                    getModalState: function() {
                        return h
                    }
                }]
            }, [d, f, h]);
            (0,
            o.useEffect)(function() {
                g[u] && "hide" === g[u].getModalState() && c(g.findIndex(function(e) {
                    return "hide" !== e.getModalState()
                }))
            }, [u, g]);
            var x = g[u];
            if (!x)
                return null;
            var b = x.getModalState();
            if ("loading" === b)
                return null;
            "hide" === b && c(function(e) {
                return e + 1
            });
            var y = g[u].Modal;
            return (0,
            a.jsx)(y, {
                onClose: function() {
                    c(function(e) {
                        return e + 1
                    })
                }
            })
        }
    },
    21172: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            default: function() {
                return g
            }
        });
        var r = t(22830)
          , a = t(35250)
          , i = t(70079)
          , o = t(5914)
          , s = t(97688)
          , l = t(87316)
          , u = t(32983)
          , c = t(64135)
          , d = t(75527)
          , f = t(78042)
          , h = t(23491);
        function g(e) {
            var n = e.urlThreadId
              , t = e.clientThreadId
              , g = e.isUserInCanPayGroup
              , m = e.serviceStatus
              , p = e.serviceAnnouncement
              , v = e.userCountry
              , x = (0,
            r._)((0,
            i.useState)(function() {
                return void 0 !== n ? n : void 0 !== t ? t : (0,
                d.OX)()
            }), 2)
              , b = x[0]
              , y = x[1];
            void 0 !== n && b !== n && y(n),
            void 0 !== n || (0,
            d.Zz)(b) || y((0,
            d.OX)());
            var j = (0,
            c.Xj)().data
              , C = null == j ? void 0 : j.accountPlan.hasPaidSubscription
              , w = (0,
            l.g)(function(e) {
                return e.updateFlagValue
            });
            (0,
            i.useEffect)(function() {
                void 0 !== g && w("isUserInCanPayGroup", g)
            }, [w, g]),
            (0,
            i.useEffect)(function() {
                (null == m ? void 0 : m.type) && !1 === C && s.m.warning(m.message, {
                    hasCloseButton: !0,
                    duration: 5
                })
            }, [C, null == m ? void 0 : m.message, null == m ? void 0 : m.type]);
            var k = (0,
            d.GR)(b)
              , _ = (0,
            i.useRef)(!1);
            return (0,
            i.useEffect)(function() {
                if (null != j) {
                    var e = j.accountPlan.hasPaidSubscription ? p.paid : p.public;
                    if ((null == e ? void 0 : e.type) && (null == e ? void 0 : e.message) && !_.current) {
                        _.current = !0;
                        var n = e.message
                          , t = {
                            hasCloseButton: !0,
                            duration: 15
                        };
                        switch (e.type) {
                        case "danger":
                            s.m.danger(n, t);
                            break;
                        case "info":
                            s.m.info(n, t);
                            break;
                        case "warning":
                            s.m.warning(n, t)
                        }
                    }
                }
            }, [p, j]),
            (0,
            a.jsxs)(u.AX.Provider, {
                value: k,
                children: [(0,
                a.jsx)(f.Z, {
                    userCountry: v
                }), (0,
                a.jsx)(o.j, {}), (0,
                a.jsx)(h.Z, {
                    clientThreadId: b,
                    setClientThreadId: y,
                    isStaticSharedThread: !1
                })]
            })
        }
    },
    22208: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            SANDBOX_LINK_PREFIX: function() {
                return y
            },
            default: function() {
                return C
            },
            handleSandboxLinkClick: function() {
                return j
            }
        });
        var r = t(21722)
          , a = t(22830)
          , i = t(39889)
          , o = t(35250)
          , s = t(70079)
          , l = t(24274)
          , u = t(75527)
          , c = t(4337)
          , d = t(1454)
          , f = t(34303)
          , h = t(66958)
          , g = t(38317)
          , m = t(19265);
        function p() {
            var e = (0,
            c._)(["absolute -left-1 top-1 md:left-0 md:top-2"]);
            return p = function() {
                return e
            }
            ,
            e
        }
        function v(e) {
            var n = e.accept
              , t = e.onFilePicked
              , r = e.loading
              , a = e.disabled
              , i = (0,
            s.useRef)(null)
              , l = (0,
            s.useCallback)(function() {
                var e;
                null === (e = i.current) || void 0 === e || e.click()
            }, [])
              , u = (0,
            s.useCallback)(function(e) {
                var n, r = null === (n = e.target.files) || void 0 === n ? void 0 : n[0];
                r && (t(r),
                e.target.value = "")
            }, [t]);
            return (0,
            o.jsxs)(x, {
                children: [(0,
                o.jsx)(h.z, {
                    onClick: l,
                    disabled: a || r,
                    color: "none",
                    children: r ? (0,
                    o.jsx)(m.Z, {}) : (0,
                    o.jsx)(g.ZP, {
                        icon: d.Cje,
                        size: "small"
                    })
                }), (0,
                o.jsx)("input", {
                    type: "file",
                    accept: n,
                    ref: i,
                    className: "hidden",
                    onChange: u
                })]
            })
        }
        var x = f.Z.div(p())
          , b = t(97688)
          , y = "sandbox:";
        function j(e, n) {
            var t;
            return t = (0,
            r._)(function(e, t) {
                var a, o, s, u, c;
                return (0,
                i.Jh)(this, function(d) {
                    switch (d.label) {
                    case 0:
                        var f;
                        a = t.substring(8),
                        o = null,
                        f = 100,
                        s = (0,
                        r._)(function() {
                            return (0,
                            i.Jh)(this, function(e) {
                                switch (e.label) {
                                case 0:
                                    var n;
                                    return f < 1e3 && (f += 100),
                                    [4, (n = f,
                                    new Promise(function(e) {
                                        return setTimeout(e, n)
                                    }
                                    ))];
                                case 1:
                                    return e.sent(),
                                    [2]
                                }
                            })
                        }),
                        d.label = 1;
                    case 1:
                        return [4, l.ZP.downloadFromSandbox(e, n, a)];
                    case 2:
                        if (null == (u = d.sent()) ? void 0 : u.download_url)
                            return o = u.download_url,
                            [3, 6];
                        if ((null == u ? void 0 : u.state) !== "not_ready")
                            return [3, 4];
                        return [4, s()];
                    case 3:
                        return d.sent(),
                        [3, 5];
                    case 4:
                        return b.m.warning("Download failed: ".concat(a)),
                        [2];
                    case 5:
                        return [3, 1];
                    case 6:
                        return (c = document.createElement("a")).href = o,
                        c.click(),
                        [2]
                    }
                })
            }),
            function(e, n) {
                return t.apply(this, arguments)
            }
        }
        function C(e) {
            var n, t = e.onFileUpload, c = e.clientThreadId, d = e.currentLeafId, f = e.modelBackend, h = e.disabled, g = (0,
            a._)((0,
            s.useState)(!1), 2), m = g[0], p = g[1], x = (0,
            s.useCallback)((n = (0,
            r._)(function(e) {
                var n, r, a, o;
                return (0,
                i.Jh)(this, function(i) {
                    switch (i.label) {
                    case 0:
                        p(!0),
                        i.label = 1;
                    case 1:
                        if (i.trys.push([1, , 3, 4]),
                        e.size > 536870912)
                            return r = (e.size / 1024 / 1024).toFixed(0),
                            b.m.warning("File is larger than upload limit: ".concat(r, " MB vs ").concat("512", " MB"), {
                                hasCloseButton: !0,
                                duration: 15
                            }),
                            [2];
                        return o = (null === (n = (a = u.tQ.getTree(c).getNode(d)).message) || void 0 === n ? void 0 : n.id) || a.id,
                        [4, l.ZP.uploadUsingFileService(o, u.tQ.getServerThreadId(c), f, e)];
                    case 2:
                        return t(i.sent()),
                        [3, 4];
                    case 3:
                        return p(!1),
                        [7];
                    case 4:
                        return [2]
                    }
                })
            }),
            function(e) {
                return n.apply(this, arguments)
            }
            ), [t, c, d, f]);
            return (0,
            o.jsx)(v, {
                disabled: m || h,
                onFilePicked: x
            })
        }
    },
    2368: function(e, n, t) {
        "use strict";
        t.d(n, {
            $: function() {
                return b
            },
            Z: function() {
                return x
            }
        });
        var r = t(4337)
          , a = t(35250)
          , i = t(70079)
          , o = t(34303)
          , s = t(64135)
          , l = t(88038)
          , u = t(13282);
        function c() {
            var e = (0,
            r._)(["bg-black rounded-md"]);
            return c = function() {
                return e
            }
            ,
            e
        }
        function d() {
            var e = (0,
            r._)(["flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md ", ""]);
            return d = function() {
                return e
            }
            ,
            e
        }
        function f() {
            var e = (0,
            r._)(["p-4 overflow-y-auto"]);
            return f = function() {
                return e
            }
            ,
            e
        }
        function h() {
            var e = (0,
            r._)(["", ""]);
            return h = function() {
                return e
            }
            ,
            e
        }
        var g = o.Z.div(c())
          , m = o.Z.div(d(), function(e) {
            return e.$isMessageRedesign && "dark:bg-gray-900"
        })
          , p = o.Z.div(f())
          , v = o.Z.code(h(), function(e) {
            return e.$shouldWrap ? "!whitespace-pre-wrap" : "!whitespace-pre"
        });
        function x(e) {
            var n = e.children
              , t = e.className
              , r = e.language
              , o = e.content
              , s = (0,
            i.useCallback)(function() {
                navigator.clipboard.writeText(o)
            }, [o]);
            return (0,
            a.jsx)(b, {
                title: r,
                headerDecoration: (0,
                a.jsx)(u.Z, {
                    buttonText: "Copy code",
                    onCopy: s
                }),
                className: "mb-4",
                codeClassName: t,
                children: n
            })
        }
        function b(e) {
            var n = e.children
              , t = e.title
              , r = e.headerDecoration
              , i = e.shouldWrapCode
              , o = e.className
              , u = e.codeClassName
              , c = (0,
            s.hz)().has(l.FZ);
            return (0,
            a.jsxs)(g, {
                className: o,
                children: [(0,
                a.jsxs)(m, {
                    $isMessageRedesign: c,
                    children: [t && (0,
                    a.jsx)("span", {
                        children: t
                    }), r]
                }), (0,
                a.jsx)(p, {
                    children: (0,
                    a.jsx)(v, {
                        $shouldWrap: void 0 !== i && i,
                        className: u,
                        children: n
                    })
                })]
            })
        }
    },
    13282: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return f
            }
        });
        var r = t(22830)
          , a = t(4337)
          , i = t(35250)
          , o = t(70079)
          , s = t(1454)
          , l = t(34303)
          , u = t(86526)
          , c = t(38317);
        function d() {
            var e = (0,
            a._)(["flex ml-auto gap-2"]);
            return d = function() {
                return e
            }
            ,
            e
        }
        function f(e) {
            var n = e.buttonText
              , t = e.onCopy
              , a = e.className
              , l = (0,
            r._)((0,
            o.useState)(!1), 2)
              , d = l[0]
              , f = l[1]
              , g = (0,
            u.Z)()
              , m = (0,
            o.useCallback)(function() {
                t(),
                f(!0),
                setTimeout(function() {
                    g() && f(!1)
                }, 2e3)
            }, [g, t]);
            return (0,
            i.jsxs)(i.Fragment, {
                children: [!d && (0,
                i.jsxs)(h, {
                    onClick: m,
                    className: a,
                    children: [(0,
                    i.jsx)(c.ZP, {
                        icon: s.j4u
                    }), n]
                }), d && (0,
                i.jsxs)(h, {
                    className: a,
                    children: [(0,
                    i.jsx)(c.ZP, {
                        icon: s.UgA
                    }), n && "Copied!"]
                })]
            })
        }
        var h = l.Z.button(d())
    },
    180: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return a
            }
        });
        var r = t(35250);
        function a(e) {
            var n, t = e.url, a = e.size, i = void 0 === a ? 16 : a, o = e.className;
            try {
                n = new URL(t)
            } catch (e) {
                return console.error(e),
                null
            }
            return (0,
            r.jsx)("img", {
                src: "https://icons.duckduckgo.com/ip3/".concat(n.hostname, ".ico"),
                alt: "Favicon",
                width: i,
                height: i,
                className: o
            })
        }
    },
    37541: function(e, n, t) {
        "use strict";
        var r = t(35250)
          , a = t(70060)
          , i = t.n(a);
        t(70079);
        var o = function(e) {
            var n = e.children;
            return (0,
            r.jsx)(r.Fragment, {
                children: n
            })
        };
        n.Z = i()(function() {
            return Promise.resolve(o)
        }, {
            ssr: !1
        })
    },
    5914: function(e, n, t) {
        "use strict";
        t.d(n, {
            j: function() {
                return f
            }
        });
        var r = t(35250)
          , a = t(70079)
          , i = t(82841)
          , o = t(36218)
          , s = t(85023)
          , l = t(64135)
          , u = t(88038)
          , c = t(97688)
          , d = "oai/apps/hasSeenStatusUpdate/".concat("2023-03-25")
          , f = function() {
            var e = (0,
            l.hz)().has(u.Id)
              , n = (0,
            a.useRef)(!!s.m.getItem(d))
              , t = (0,
            i.WS)();
            return (0,
            a.useEffect)(function() {
                e && !n.current && t && (t(o.s6.oneOffStatusMessageShown),
                c.m.warning("You attempted to purchase ChatGPT Plus during an outage. We've issued a refund and apologize for the inconvenience. If you’d like to continue your subscription, please re-subscribe.", {
                    duration: 0,
                    hasCloseButton: !0,
                    onRemove: function() {
                        s.m.setItem(d, !0),
                        n.current = !0
                    }
                }))
            }, [n, e, t]),
            (0,
            r.jsx)("div", {})
        }
    },
    23491: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return sd
            }
        });
        var r, a, i, o, s, l, u, c, d, f, h = t(39324), g = t(70216), m = t(22830), p = t(4337), v = t(35250), x = t(35448), b = t(68555), y = t(70079), j = t(34303), C = t(82841), w = t(36218), k = t(64135), _ = t(75527), M = t(81292), T = t(58392), N = (0,
        M.ZP)((0,
        T.n)(function() {
            return {
                aborters: {}
            }
        })), P = N.setState, I = {
            addAborter: function(e, n) {
                P(function(t) {
                    null != t.aborters[e] && console.warn("Setting aborter for id ".concat(e, " but it already exists")),
                    t.aborters[e] = n
                })
            },
            abortAndRemoveById: function(e) {
                P(function(n) {
                    var t = n.aborters[e];
                    null != t && (t.abort(),
                    delete n.aborters[e])
                })
            },
            removeAborterById: function(e) {
                P(function(n) {
                    delete n.aborters[e]
                })
            },
            reset: function() {
                P(function() {
                    return {
                        aborters: {}
                    }
                })
            },
            abortAllAndReset: function() {
                P(function(e) {
                    Object.keys(e.aborters).forEach(function(n) {
                        e.aborters[n].abort(),
                        delete e.aborters[n]
                    })
                })
            }
        }, S = t(71209), Z = {
            isNavigationCollapsed: !1,
            sharingModalThreadId: void 0
        }, R = (0,
        M.ZP)()(function(e, n) {
            return (0,
            S._)((0,
            h._)({}, Z), {
                toggleNavigation: function() {
                    e({
                        isNavigationCollapsed: !n().isNavigationCollapsed
                    })
                }
            })
        }), D = {
            openSharingModal: function(e) {
                R.setState({
                    sharingModalThreadId: e
                })
            },
            closeSharingModal: function() {
                R.setState({
                    sharingModalThreadId: void 0
                })
            }
        }, E = t(32983), F = t(19841), L = t(7851), A = t(26430), B = t(84913), q = t(44043), U = t(82187), O = t(69262), z = t(75861), H = t(70575), V = t(91530), W = t.n(V), G = t(1454), $ = t(3001), Q = t(75908), J = t(35290), Y = t(24274), K = t(88038), X = t(77442), ee = t(19051), en = t(51217), et = t(86526);
        function er(e) {
            var n = e.text
              , t = (0,
            et.Z)()
              , r = (0,
            m._)((0,
            y.useState)(!0), 2)
              , a = r[0]
              , i = r[1]
              , o = (0,
            m._)((0,
            y.useState)(0), 2)
              , s = o[0]
              , l = o[1]
              , u = (0,
            y.useMemo)(function() {
                return new ea().humanTypingDelaysQuertyDistance(n)
            }, [n]);
            return (0,
            y.useEffect)(function() {
                n && a && (i(!0),
                u.forEach(function(e, n) {
                    setTimeout(function() {
                        t() && (l(n),
                        n === u.length - 1 && i(!1))
                    }, e)
                }))
            }, [u, t, a, n]),
            (0,
            v.jsxs)(v.Fragment, {
                children: [n.substring(0, s + 1), a && "▋"]
            })
        }
        var ea = function() {
            function e() {
                (0,
                en._)(this, e)
            }
            var n = e.prototype;
            return n.qwertyDistance = function(e, n) {
                var t, r, a = {
                    q: [0, 0],
                    w: [1, 0],
                    e: [2, 0],
                    r: [3, 0],
                    t: [4, 0],
                    y: [5, 0],
                    u: [6, 0],
                    i: [7, 0],
                    o: [8, 0],
                    p: [9, 0],
                    a: [0, 1],
                    s: [1, 1],
                    d: [2, 1],
                    f: [3, 1],
                    g: [4, 1],
                    h: [5, 1],
                    j: [6, 1],
                    k: [7, 1],
                    l: [8, 1],
                    z: [0, 2],
                    x: [1, 2],
                    c: [2, 2],
                    v: [3, 2],
                    b: [4, 2],
                    n: [5, 2],
                    m: [6, 2]
                }, i = (0,
                m._)(null !== (t = a[e.toLowerCase()]) && void 0 !== t ? t : [0, 0], 2), o = i[0], s = i[1], l = (0,
                m._)(null !== (r = a[n.toLowerCase()]) && void 0 !== r ? r : [0, 0], 2);
                return Math.abs(o - l[0]) + Math.abs(s - l[1])
            }
            ,
            n.humanTypingDelaysQuertyDistance = function(e) {
                for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100, r = 0, a = [], i = 0; i < e.length; ++i) {
                    var o = void 0;
                    if (i > 0) {
                        var s = this.qwertyDistance(e[i - 1], e[i]);
                        o = 0 === s ? this.getRandomInt(n, Math.floor(t / 2)) : 1 === s ? this.getRandomInt(n, Math.floor(2 * t / 3)) : this.getRandomInt(n, t)
                    } else
                        o = this.getRandomInt(n, t);
                    a.push(o + r),
                    r += o
                }
                return a
            }
            ,
            n.getRandomInt = function(e, n) {
                return Math.floor(Math.random() * (n - e + 1)) + e
            }
            ,
            e
        }()
          , ei = t(66958)
          , eo = t(38317)
          , es = t(19265)
          , el = t(38675)
          , eu = t(32787)
          , ec = t(85023)
          , ed = t(97688)
          , ef = "oai/apps/hasSeenHistoryFilteredDisclosure/".concat("2023-03-21")
          , eh = "conversationHistory";
        function eg() {
            var e, n = (0,
            k.hz)().has(K.Ud), t = (0,
            k.Xj)().isLoading, r = (0,
            eu.kP)().session, a = null == r ? void 0 : r.accessToken, i = !n && !!a && !t, o = (0,
            el.N)({
                queryKey: [eh],
                queryFn: function(e) {
                    var n = e.pageParam;
                    return Y.ZP.getConversations(n || 0, 28, null == r ? void 0 : r.accessToken)
                },
                getNextPageParam: function(e) {
                    var n = e.offset + e.limit;
                    return n < e.total ? n : void 0
                },
                enabled: i
            }), s = o.data, l = o.fetchNextPage, u = o.hasNextPage, c = o.isInitialLoading, d = o.isFetchingNextPage, f = o.isError, h = (0,
            y.useMemo)(function() {
                return null !== (e = null == s ? void 0 : s.pages.flatMap(function(e) {
                    return e.items
                })) && void 0 !== e ? e : []
            }, [s]);
            return {
                data: s,
                conversations: h,
                fetchNextPage: l,
                hasNextPage: u,
                isLoading: c,
                isFetchingNextPage: d,
                isError: i && f
            }
        }
        function em() {
            var e = (0,
            x.NL)();
            return (0,
            y.useCallback)(function() {
                e.invalidateQueries([eh])
            }, [e])
        }
        function ep() {
            var e = (0,
            p._)(["flex flex-col gap-2 pb-2 text-gray-100 text-sm\n", ""]);
            return ep = function() {
                return e
            }
            ,
            e
        }
        function ev() {
            var e = (0,
            p._)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n", ")}\n", ")}\n", "\n"]);
            return ev = function() {
                return e
            }
            ,
            e
        }
        function ex() {
            var e = (0,
            p._)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n", "\n"]);
            return ex = function() {
                return e
            }
            ,
            e
        }
        function eb() {
            var e = (0,
            p._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
            return eb = function() {
                return e
            }
            ,
            e
        }
        function ey() {
            var e = (0,
            p._)(["flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative"]);
            return ey = function() {
                return e
            }
            ,
            e
        }
        function ej() {
            var e = (0,
            p._)(["h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900"]);
            return ej = function() {
                return e
            }
            ,
            e
        }
        function eC() {
            var e = (0,
            p._)(["absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n", ""]);
            return eC = function() {
                return e
            }
            ,
            e
        }
        function ew() {
            var e = (0,
            p._)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
            return ew = function() {
                return e
            }
            ,
            e
        }
        function ek() {
            var e = (0,
            p._)(["p-1 hover:text-white"]);
            return ek = function() {
                return e
            }
            ,
            e
        }
        var e_ = (0,
        $.vU)({
            historyBucketToday: {
                id: "history.bucket.today",
                defaultMessage: "Today",
                description: "Label for today's history bucket"
            },
            historyBucketYesterday: {
                id: "history.bucket.yesterday",
                defaultMessage: "Yesterday",
                description: "Label for yesterday's history bucket"
            },
            historyBucketLastSeven: {
                id: "history.bucket.lastSeven",
                defaultMessage: "Previous 7 Days",
                description: "Label for the history bucket of the previous 7 days"
            },
            historyBucketLastThirty: {
                id: "history.bucket.lastThirty",
                defaultMessage: "Previous 30 Days",
                description: "Label for the history bucket of the previous 30 days"
            },
            unableToLoadHistory: {
                id: "history.unableToLoad",
                defaultMessage: "Unable to load history",
                description: "Error message when history fails to load"
            },
            retryButton: {
                id: "history.retryButton",
                defaultMessage: "Retry",
                description: "Button to retry loading history"
            },
            showMoreButton: {
                id: "history.showMoreButton",
                defaultMessage: "Show more",
                description: "Button to show more history items"
            }
        })
          , eM = {
            initial: function(e) {
                return e.isNew ? {
                    opacity: 0,
                    height: 0,
                    overflow: "hidden"
                } : {}
            },
            animate: function() {
                return {
                    opacity: 1,
                    height: "auto"
                }
            },
            exit: function() {
                return {
                    opacity: 0,
                    height: 0
                }
            }
        };
        function eT(e) {
            var n, t, r, a, i, o, s = e.activeId, l = e.onNewThread, u = e.onUpdateUserModifiedTitle, c = e.userModifiedTitle, d = e.newChatName, f = e.setNewChatName, g = e.setActiveRequests, p = (0,
            Q.Z)(), x = (0,
            m._)((0,
            y.useState)(!1), 2), b = x[0], j = x[1], C = (0,
            m._)((0,
            y.useState)(0), 2), w = C[0], _ = C[1], M = (0,
            ee.Z)(), T = eg(), N = T.conversations, P = T.hasNextPage, I = T.fetchNextPage, S = T.isLoading, Z = T.isFetchingNextPage, R = T.isError, D = (0,
            k.hz)().has(K.DY), E = (0,
            y.useRef)(null), V = (0,
            y.useCallback)(function(e) {
                var n;
                D && !S && null != e && (null === (n = E.current) || void 0 === n || n.disconnect(),
                E.current = new IntersectionObserver(function(e) {
                    e[0].isIntersecting && P && I()
                }
                ),
                E.current.observe(e))
            }, [D, S, P, I]);
            (0,
            y.useEffect)(function() {
                return function() {
                    var e;
                    null === (e = E.current) || void 0 === e || e.disconnect()
                }
            }, []);
            var W = em();
            n = (0,
            y.useRef)(!!ec.m.getItem(ef)),
            r = (t = eg()).data,
            a = t.isError,
            (0,
            y.useEffect)(function() {
                var e, t;
                a || (null == r ? void 0 : null === (e = r.pages) || void 0 === e ? void 0 : null === (t = e[0]) || void 0 === t ? void 0 : t.has_missing_conversations) !== !0 || n.current || ed.m.warning("We've restored conversation history for all ChatGPT users and resolved the underlying issue, which was caused by a significant bug in an open-source library.\n\nIn order to ensure that this issue does not reoccur, users will not be able to retrieve their chat history from the morning of March 20th. We apologize to our users for any difficulties this may cause.", {
                    duration: 0,
                    hasCloseButton: !0,
                    onRemove: function() {
                        ec.m.setItem(ef, !0),
                        n.current = !0
                    }
                })
            }, [null == r ? void 0 : r.pages, a]);
            var G = (i = (0,
            y.useRef)(),
            o = (0,
            y.useRef)(),
            ((0,
            y.useEffect)(function() {
                i.current = o.current,
                o.current = N
            }, [N]),
            N === o.current) ? i.current : o.current);
            (0,
            y.useEffect)(function() {
                M(function() {
                    _(w + 1)
                }, (0,
                A.Z)((0,
                B.Z)(), Date.now()) + 1e3)
            }, [w, M]);
            var $ = 0 === N.length
              , Y = (0,
            y.useMemo)(function() {
                return N.reduce(function(e, n) {
                    var t, r, a = new Date(null !== (r = null !== (t = n.update_time) && void 0 !== t ? t : n.create_time) && void 0 !== r ? r : 0), i = (0,
                    L.Z)(new Date, a);
                    if (0 === i)
                        e.recent.today.items.push(n);
                    else if (i <= 1)
                        e.recent.yesterday.items.push(n);
                    else if (i <= 7)
                        e.recent.lastSeven.items.push(n);
                    else if (i <= 30)
                        e.recent.lastThirty.items.push(n);
                    else if ((0,
                    O.Z)(a)) {
                        var o = (0,
                        U.Z)(a)
                          , s = (0,
                        q.Z)(a)
                          , l = "".concat(o, "-").concat(s);
                        e.dynamicMonths[l] ? e.dynamicMonths[l].items.push(n) : e.dynamicMonths[l] = {
                            label: p.formatDate(a, {
                                month: "long"
                            }),
                            items: [n]
                        }
                    } else {
                        var u = (0,
                        U.Z)(a)
                          , c = "".concat(u, "-");
                        e.dynamicYears[c] ? e.dynamicYears[c].items.push(n) : e.dynamicYears[c] = {
                            label: p.formatDate(a, {
                                year: "numeric"
                            }),
                            items: [n]
                        }
                    }
                    return e
                }, {
                    recent: {
                        today: {
                            label: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, e_.historyBucketToday)),
                            items: []
                        },
                        yesterday: {
                            label: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, e_.historyBucketYesterday)),
                            items: []
                        },
                        lastSeven: {
                            label: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, e_.historyBucketLastSeven)),
                            items: []
                        },
                        lastThirty: {
                            label: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, e_.historyBucketLastThirty)),
                            items: []
                        }
                    },
                    dynamicMonths: {},
                    dynamicYears: {}
                })
            }, [w, N]);
            return (0,
            v.jsxs)(eN, {
                $centered: S || R && $,
                children: [$ && S && (0,
                v.jsx)(es.Z, {
                    className: "m-auto"
                }), $ && R && (0,
                v.jsxs)("div", {
                    className: "p-3 text-center italic text-gray-500",
                    children: [(0,
                    v.jsx)(J.Z, (0,
                    h._)({}, e_.unableToLoadHistory)), !b && (0,
                    v.jsx)("div", {
                        className: "mt-1",
                        children: (0,
                        v.jsx)(ei.z, {
                            as: "button",
                            color: "dark",
                            size: "small",
                            className: "m-auto mt-2",
                            onClick: function() {
                                j(!0),
                                W()
                            },
                            children: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, e_.retryButton))
                        })
                    })]
                }), !S && (0,
                v.jsx)("div", {
                    children: (0,
                    v.jsx)(z.M, {
                        initial: !1,
                        children: [Y.recent, Y.dynamicMonths, Y.dynamicYears].flatMap(function(e, n) {
                            return (0,
                            v.jsx)("span", {
                                children: Object.entries(e).map(function(e) {
                                    var n = (0,
                                    m._)(e, 2)
                                      , t = n[0]
                                      , r = n[1]
                                      , a = r.items
                                      , i = r.label;
                                    if ("today" !== t && !a.length)
                                        return null;
                                    var o = !!a.find(function(e) {
                                        var n;
                                        return N.length > 0 && e.id === (null === (n = N[0]) || void 0 === n ? void 0 : n.id)
                                    });
                                    return (0,
                                    v.jsxs)(H.E.div, {
                                        className: "relative",
                                        layoutId: "bucket-".concat(t),
                                        layout: "position",
                                        initial: {
                                            height: 0,
                                            opacity: 1,
                                            position: "relative"
                                        },
                                        animate: {
                                            height: "auto",
                                            opacity: 1,
                                            transition: {
                                                duration: .2,
                                                ease: "easeIn"
                                            }
                                        },
                                        children: [a.length > 0 && (0,
                                        v.jsx)(H.E.div, {
                                            className: (0,
                                            F.Z)("sticky top-0", o ? "z-[16]" : "z-[14]"),
                                            layoutId: "bucketTitle-".concat(t),
                                            layout: "position",
                                            children: (0,
                                            v.jsx)(eD, {
                                                children: i
                                            })
                                        }), (0,
                                        v.jsx)("ol", {
                                            children: a.map(function(e, n) {
                                                var t = s === e.id
                                                  , r = null == G ? void 0 : G.find(function(n) {
                                                    return n.id === e.id
                                                });
                                                return (0,
                                                v.jsx)(H.E.li, {
                                                    className: (0,
                                                    F.Z)("relative", o && 0 === n ? "z-[15]" : ""),
                                                    layoutId: "".concat(e.id),
                                                    layout: "position",
                                                    custom: {
                                                        isNew: !r
                                                    },
                                                    variants: eM,
                                                    initial: "initial",
                                                    animate: "animate",
                                                    exit: "exit",
                                                    children: (0,
                                                    v.jsx)(eP, {
                                                        id: e.id,
                                                        title: e.title,
                                                        newChatName: t ? d : void 0,
                                                        setNewChatName: f,
                                                        userModifiedTitle: t ? c : "",
                                                        onUpdateUserModifiedTitle: u,
                                                        active: t,
                                                        onNewThread: l,
                                                        setActiveRequests: g,
                                                        forwardRef: P && N[N.length - 5 - 1].id === e.id ? V : void 0
                                                    })
                                                }, "history-item-".concat(e.id))
                                            })
                                        })]
                                    }, t)
                                })
                            }, "category-".concat(n))
                        })
                    })
                }), D ? Z && (0,
                v.jsx)("div", {
                    className: "m-4 mb-5 flex justify-center",
                    children: (0,
                    v.jsx)(es.Z, {})
                }) : (0,
                v.jsx)(v.Fragment, {
                    children: P && (0,
                    v.jsx)(ei.z, {
                        as: "button",
                        onClick: function() {
                            return I()
                        },
                        color: "dark",
                        className: "m-auto mb-2",
                        size: "small",
                        loading: Z,
                        children: (0,
                        v.jsx)(J.Z, (0,
                        h._)({}, e_.showMoreButton))
                    })
                })]
            })
        }
        var eN = j.Z.div(ep(), function(e) {
            return e.$centered && "h-full justify-center items-center"
        });
        function eP(e) {
            var n = e.id
              , t = e.title
              , r = e.active
              , a = e.onNewThread
              , i = e.onUpdateUserModifiedTitle
              , o = e.newChatName
              , s = e.setNewChatName
              , l = e.userModifiedTitle
              , u = e.forwardRef
              , c = e.setActiveRequests
              , d = (0,
            X.w$)()
              , f = (0,
            C.WS)()
              , h = (0,
            b.useRouter)()
              , g = (0,
            m._)((0,
            y.useState)(!1), 2)
              , p = g[0]
              , x = g[1]
              , j = (0,
            y.useRef)(null)
              , _ = (0,
            m._)((0,
            y.useState)(!1), 2)
              , M = _[0]
              , T = _[1]
              , N = (0,
            k.hz)()
              , P = (0,
            m._)((0,
            y.useState)(), 2)
              , S = P[0]
              , Z = P[1]
              , R = N.has("shareable_links") && r
              , E = em()
              , L = (0,
            y.useCallback)(function(e) {
                var r, a;
                if (null == e || e.preventDefault(),
                x(!1),
                (null === (r = j.current) || void 0 === r ? void 0 : r.value) && (null === (a = j.current) || void 0 === a ? void 0 : a.value) !== t) {
                    var o = j.current.value;
                    Y.ZP.patchConversation(n, {
                        title: o
                    }),
                    i(o),
                    f(w.s6.renameThread, {
                        threadId: n,
                        content: o
                    }),
                    E()
                }
            }, [f, n, E, i, t])
              , A = (0,
            y.useCallback)(function(e) {
                "Enter" === e.key && L()
            }, [L])
              , B = (0,
            y.useCallback)(function() {
                Y.ZP.patchConversation(n, {
                    is_visible: !1
                }).then(function() {
                    E()
                }),
                a()
            }, [n, a, E])
              , q = (0,
            y.useCallback)(function(e) {
                I.abortAllAndReset(),
                c(new Set),
                e.preventDefault(),
                s(""),
                Z(void 0),
                f(w.s6.loadThread, {
                    threadId: n
                }),
                h.push("/c/".concat(n), void 0, {
                    shallow: !0
                })
            }, [f, n, h, c, s])
              , U = l || r && o || t;
            if ((0,
            y.useEffect)(function() {
                r && o && o !== S && Z(o)
            }, [r, o, U, S, l]),
            p)
                return (0,
                v.jsxs)(eS, {
                    $active: r,
                    children: [(0,
                    v.jsx)(eo.ZP, {
                        icon: G.IC0,
                        className: "flex-shrink-0"
                    }), (0,
                    v.jsx)(eZ, {
                        ref: j,
                        type: "text",
                        defaultValue: U,
                        autoFocus: !0,
                        onKeyDown: A,
                        className: "mr-0",
                        onBlur: L
                    }), (0,
                    v.jsxs)(eF, {
                        $active: !0,
                        children: [(0,
                        v.jsx)(eL, {
                            onClick: L,
                            children: (0,
                            v.jsx)(eo.ZP, {
                                icon: G.UgA
                            })
                        }), (0,
                        v.jsx)(eL, {
                            onClick: function(e) {
                                e.preventDefault(),
                                x(!1)
                            },
                            children: (0,
                            v.jsx)(eo.ZP, {
                                icon: G.q5L
                            })
                        })]
                    })]
                });
            var O = S && r && d && !l;
            return (0,
            v.jsxs)(eI, {
                onClick: r ? W() : q,
                $active: r,
                $sharing: R,
                className: (0,
                F.Z)("group", O && "animate-flash"),
                ref: u,
                children: [(0,
                v.jsx)(eo.ZP, {
                    icon: M ? G.Ybf : G.IC0
                }), (0,
                v.jsxs)(eR, {
                    children: [O ? (0,
                    v.jsx)(er, {
                        text: U
                    }) : M ? 'Delete "'.concat(U, '"?') : U, (!S || !r) && (0,
                    v.jsx)(eE, {
                        $active: r
                    })]
                }), M && (0,
                v.jsxs)(eF, {
                    $active: !0,
                    children: [(0,
                    v.jsx)(eL, {
                        onClick: B,
                        children: (0,
                        v.jsx)(eo.ZP, {
                            icon: G.UgA
                        })
                    }), (0,
                    v.jsx)(eL, {
                        onClick: function() {
                            T(!1)
                        },
                        children: (0,
                        v.jsx)(eo.ZP, {
                            icon: G.q5L
                        })
                    })]
                }), r && !M && (0,
                v.jsxs)(eF, {
                    $active: r,
                    children: [(0,
                    v.jsx)(eL, {
                        onClick: function(e) {
                            e.preventDefault(),
                            x(!0)
                        },
                        children: (0,
                        v.jsx)(eo.ZP, {
                            icon: G.Nte
                        })
                    }), R && (0,
                    v.jsx)(eL, {
                        onClick: function(e) {
                            e.preventDefault(),
                            D.openSharingModal(n)
                        },
                        children: (0,
                        v.jsx)(eo.ZP, {
                            icon: G.A8q
                        })
                    }), (0,
                    v.jsx)(eL, {
                        onClick: function() {
                            return T(!0)
                        },
                        children: (0,
                        v.jsx)(eo.ZP, {
                            icon: G.Ybf
                        })
                    })]
                })]
            })
        }
        var eI = j.Z.a(ev(), function(e) {
            var n = e.$active
              , t = e.$sharing;
            return n && t ? "pr-[4.5rem]" : ""
        }, function(e) {
            var n = e.$active
              , t = e.$sharing;
            return n && !t ? "pr-14" : ""
        }, function(e) {
            return e.$active ? "bg-gray-800 hover:bg-gray-800" : "hover:pr-4 bg-gray-900"
        })
          , eS = j.Z.div(ex(), function(e) {
            return e.$active ? "pr-14 bg-gray-800 hover:bg-gray-800" : "bg-gray-900"
        })
          , eZ = j.Z.input(eb())
          , eR = j.Z.div(ey())
          , eD = j.Z.h3(ej())
          , eE = j.Z.div(eC(), function(e) {
            return e.$active ? "from-gray-800" : "from-gray-900 group-hover:from-[#2A2B32]"
        })
          , eF = j.Z.div(ew(), function(e) {
            return e.$active ? "visible" : "invisible group-hover:visible"
        })
          , eL = j.Z.button(ek())
          , eA = t(9849)
          , eB = t(40638)
          , eq = t(24760)
          , eU = t(37812)
          , eO = t(87316)
          , ez = t(53086)
          , eH = t(54887)
          , eV = t.n(eH)
          , eW = t(13002)
          , eG = t(75515);
        function e$() {
            var e = (0,
            p._)(["relative p-1 ", " text-white flex items-center justify-center"]);
            return e$ = function() {
                return e
            }
            ,
            e
        }
        function eQ() {
            var e = (0,
            p._)(["\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ", "\n  ", "\n"]);
            return eQ = function() {
                return e
            }
            ,
            e
        }
        function eJ() {
            var e = (0,
            p._)(["text-white flex justify-center items-center relative tracking-widest"]);
            return eJ = function() {
                return e
            }
            ,
            e
        }
        function eY() {
            var e = (0,
            p._)(["relative flex"]);
            return eY = function() {
                return e
            }
            ,
            e
        }
        var eK = j.Z.div(e$(), function(e) {
            return e.$isMessageRedesign ? "rounded-full h-7 w-7" : "rounded-sm h-[30px] w-[30px]"
        })
          , eX = j.Z.span(eQ(), function(e) {
            return "warning" === e.$type && "bg-orange-500 text-white"
        }, function(e) {
            return "danger" === e.$type && "bg-red-500 text-white"
        })
          , e0 = function(e) {
            var n = e.iconName
              , t = e.background
              , r = e.notice
              , a = (0,
            k.hz)().has(K.FZ)
              , i = eo.nI;
            switch (n) {
            case "globe":
                i = G.RsK;
                break;
            case "terminal":
                i = G.cDN;
                break;
            case "text":
                i = G.RUS;
                break;
            case "browsing":
                i = G.jRj;
                break;
            case "code":
                i = eW.oT$;
                break;
            case "plugin":
                i = G.yG
            }
            return (0,
            v.jsxs)(eK, {
                $isMessageRedesign: a,
                style: {
                    backgroundColor: t
                },
                children: [(0,
                v.jsx)(eo.ZP, {
                    icon: i,
                    size: "medium",
                    className: a ? "!h-5 !w-5" : ""
                }), r && (0,
                v.jsx)(eX, {
                    $type: r,
                    children: "!"
                })]
            })
        }
          , e1 = function(e) {
            var n = e.plugin
              , t = e.notice
              , r = (0,
            k.hz)().has(K.FZ);
            return (0,
            v.jsxs)(eK, {
                $isMessageRedesign: r,
                className: "p-0",
                children: [(0,
                v.jsx)(eG.Z, {
                    url: n.manifest.logo_url,
                    name: n.manifest.name_for_human,
                    size: "100%"
                }), t && (0,
                v.jsx)(eX, {
                    $type: t,
                    children: "!"
                })]
            })
        }
          , e2 = j.Z.div(eJ())
          , e3 = j.Z.div(eY())
          , e5 = {
            small: 20,
            redesign: 28,
            medium: 38
        }
          , e4 = function(e) {
            var n, t = e.user, r = e.size, a = e.notice, i = e.backgroundColorForInitials, o = a && (0,
            v.jsx)(eX, {
                $type: a,
                children: "!"
            }), s = (0,
            k.hz)().has(K.FZ);
            if ((null == t ? void 0 : t.picture) != null)
                return (0,
                v.jsxs)(e3, {
                    children: [(0,
                    v.jsx)(eV(), {
                        src: t.picture,
                        alt: "User",
                        width: e5[r],
                        height: e5[r],
                        className: s ? "rounded-full" : "rounded-sm"
                    }), o]
                });
            var l = (null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : "").split(" ").map(function(e) {
                return e[0]
            }).join("");
            return (0,
            v.jsxs)(e2, {
                className: (0,
                F.Z)("redesign" === r ? "h-7 w-7 text-xs" : "small" === r ? "h-5 w-5 text-xs" : "h-10 w-10 text-lg", s ? "rounded-full" : "rounded-sm"),
                style: {
                    backgroundColor: null != i ? i : "#5436DA"
                },
                children: [l || (0,
                v.jsx)(eo.ZP, {
                    icon: G.fzv,
                    size: "redesign" === r ? "small" : r
                }), o]
            })
        };
        function e7(e) {
            var n = e.children;
            return (0,
            v.jsx)(eB.u, {
                as: y.Fragment,
                enter: "transition ease-out duration-200",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-1",
                children: n
            })
        }
        var e8 = t(24396)
          , e6 = t(2827)
          , e9 = t(55041)
          , ne = (0,
        $.vU)({
            profilePlaceholder: {
                id: "profile.myprofile.placeholder",
                defaultMessage: "• Where I live: San Francisco\n• My native language is: English\n• What I do for work: Researcher at OpenAI\n• What I do for fun: Hiking, music, and cooking\n• Preferred communication style: concise, simple language\n• I'd like ChatGPT to be: a helpful assistant",
                description: "placeholder for my profile textarea"
            },
            save: {
                id: "profile.myprofile.save",
                defaultMessage: "Save",
                description: "save button for my profile modal"
            },
            close: {
                id: "profile.myprofile.close",
                defaultMessage: "Close",
                description: "close button for my profile modal"
            },
            helpText: {
                id: "profile.myprofile.helptext",
                defaultMessage: "Add any information that you’d like ChatGPT to remember about you and your preferences.",
                description: "help text for my profile modal"
            },
            profileTitle: {
                id: "profile.myprofile.title",
                defaultMessage: "My Profile",
                description: "title for my profile modal"
            }
        })
          , nn = (0,
        M.ZP)(function() {
            return {
                isProfileModalOpen: !1,
                userMessage: ""
            }
        })
          , nt = {
            setIsProfileModalOpen: function(e) {
                nn.setState({
                    isProfileModalOpen: e
                })
            },
            setUserMessage: function(e) {
                nn.setState({
                    userMessage: e
                })
            }
        };
        function nr() {
            var e = nn()
              , n = e.isProfileModalOpen
              , t = e.userMessage
              , r = (0,
            y.useCallback)(function() {
                nt.setIsProfileModalOpen(!1)
            }, [])
              , a = (0,
            eu.kP)()
              , i = a.session
              , o = a.loading
              , s = (0,
            y.useCallback)(function() {
                Y.ZP.createOrUpdateUserSystemMessage((null == i ? void 0 : i.accessToken) || "", t),
                nt.setIsProfileModalOpen(!1)
            }, [t, i])
              , l = (0,
            k.hz)();
            (0,
            e8.a)([null == i ? void 0 : i.accessToken], function() {
                return Y.ZP.getUserSystemMessage((null == i ? void 0 : i.accessToken) || "")
            }, {
                enabled: !!(!o && (null == i ? void 0 : i.accessToken) && l.has("system_message2")),
                onSuccess: function(e) {
                    (null == e ? void 0 : e.data) && nt.setUserMessage(e.data)
                },
                onError: function() {
                    ed.m.danger("Failed to get the profile")
                }
            });
            var u = (0,
            Q.Z)();
            return (0,
            v.jsxs)(e9.ZP, {
                isOpen: n,
                onModalClose: function() {
                    nt.setIsProfileModalOpen(!1)
                },
                type: "success",
                title: u.formatMessage(ne.profileTitle),
                closeButton: (0,
                v.jsx)(e9.ol, {
                    onClose: r
                }),
                secondaryButton: (0,
                v.jsx)(e9.mH, {
                    onClick: r,
                    children: (0,
                    v.jsx)(J.Z, (0,
                    h._)({}, ne.close))
                }),
                primaryButton: (0,
                v.jsx)(e9.mH, {
                    onClick: s,
                    color: "primary",
                    children: (0,
                    v.jsx)(J.Z, (0,
                    h._)({}, ne.save))
                }),
                children: [(0,
                v.jsx)("p", {
                    className: "text-muted pb-4 pt-2",
                    children: (0,
                    v.jsx)(J.Z, (0,
                    h._)({}, ne.helpText))
                }), (0,
                v.jsx)(e6.ZP, {
                    className: "w-full rounded border-gray-300 p-4 placeholder:text-gray-300  dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                    rows: 8,
                    placeholder: u.formatMessage(ne.profilePlaceholder),
                    value: t,
                    onChange: function(e) {
                        return nt.setUserMessage(e.target.value)
                    }
                })]
            })
        }
        var na = t(181)
          , ni = t(13451)
          , no = t(86546)
          , ns = t(21437)
          , nl = t(21722)
          , nu = t(39889)
          , nc = t(14412);
        function nd() {
            var e, n, t = (0,
            b.useRouter)(), r = (0,
            eu.kP)().session, a = (null == r ? void 0 : null === (e = r.user) || void 0 === e ? void 0 : e.idp) === "auth0", i = !!(null == r ? void 0 : null === (n = r.user) || void 0 === n ? void 0 : n.mfa), o = (0,
            m._)((0,
            y.useState)(!1), 2), s = o[0], l = o[1], u = (0,
            y.useCallback)((0,
            nl._)(function() {
                var e;
                return (0,
                nu.Jh)(this, function(n) {
                    if (e = new URL(t.asPath,window.location.origin).toString(),
                    !a)
                        throw Error("Only username/password users can enable MFA");
                    if (!r)
                        throw Error("No session found, cannot enable MFA");
                    if ("mocked" === r.authProvider)
                        throw Error("Mock users can't enable MFA! Please setup Auth0 following the instructions in the README");
                    return (0,
                    nc.signIn)(r.authProvider, {
                        callbackUrl: e
                    }, (0,
                    h._)({
                        prompt: "login"
                    }, r.authProvider === eu.Ho.OpenAI ? {
                        login_hint: (0,
                        eu.W_)({
                            oai_enforce_mfa: !0,
                            idp: "openai"
                        })
                    } : {
                        oai_enforce_mfa: "true"
                    })),
                    [2]
                })
            }), [t.asPath, r, a]), c = (0,
            y.useCallback)((0,
            nl._)(function() {
                var e;
                return (0,
                nu.Jh)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        if (!a)
                            throw Error("Only username/password users can disable MFA");
                        if (!r)
                            throw Error("No session found, cannot enable MFA");
                        if ("mocked" === r.authProvider)
                            throw Error("Mock users can't enable MFA! Please setup Auth0 following the instructions in the README");
                        return l(!0),
                        [4, Y.ZP.deleteMfa()];
                    case 1:
                        return n.sent(),
                        [4, (0,
                        nc.signOut)({
                            redirect: !1,
                            callbackUrl: "/auth/login?next=".concat(encodeURIComponent(t.asPath))
                        })];
                    case 2:
                        return e = n.sent(),
                        l(!1),
                        t.push(e.url),
                        [2]
                    }
                })
            }), [a, t, r]);
            return {
                setupMfa: u,
                isUsernamePassword: a,
                isLoggedInWithMfa: i,
                removeMfa: c,
                isLoading: s
            }
        }
        function nf() {
            var e = (0,
            p._)(["absolute right-0 top-1/2 -translate-y-1/2"]);
            return nf = function() {
                return e
            }
            ,
            e
        }
        var nh = y.forwardRef(function(e, n) {
            var t = e.name
              , r = e.placeholder
              , a = e.type
              , i = e.displayName
              , o = e.onChange
              , s = e.onBlur
              , l = e.value
              , u = e.saveOnBlur
              , c = e.icon
              , d = e.onInputIconClick
              , f = e.className
              , g = e.autoComplete
              , p = e.autoFocus
              , x = e.onPressEnter
              , b = (0,
            m._)((0,
            y.useState)(l), 2)
              , j = b[0]
              , C = b[1]
              , w = (0,
            y.useCallback)(function(e) {
                null == s || s(e),
                u && C(e.target.value)
            }, [s, u])
              , k = (0,
            y.useCallback)(function(e) {
                null == o || o(e),
                u && C(e.target.value)
            }, [o, u])
              , _ = (0,
            y.useCallback)(function(e) {
                "Enter" === e.key && x && (e.preventDefault(),
                x())
            }, [x]);
            (0,
            y.useEffect)(function() {
                C(l)
            }, [l]);
            var M = (0,
            h._)({}, u ? {} : {
                value: l
            }, u ? {
                value: j
            } : {});
            return (0,
            v.jsxs)("div", {
                className: (0,
                F.Z)("rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:bg-gray-700", f),
                children: [(0,
                v.jsx)("label", {
                    htmlFor: t,
                    className: "block text-xs font-medium text-gray-900 dark:text-gray-100",
                    children: i
                }), (0,
                v.jsxs)("div", {
                    className: (0,
                    F.Z)(i && "mt-1", "relative"),
                    children: [(0,
                    v.jsx)("input", (0,
                    h._)({
                        ref: n,
                        type: a,
                        name: t,
                        id: t,
                        className: (0,
                        F.Z)("block w-full border-0 p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 sm:text-sm", c && "pr-6"),
                        placeholder: r,
                        onBlur: w,
                        onChange: k,
                        onKeyDown: _,
                        autoComplete: g,
                        autoFocus: p
                    }, M)), c && (0,
                    v.jsx)(ng, {
                        onClick: d,
                        children: (0,
                        v.jsx)(eo.ZP, {
                            icon: c
                        })
                    })]
                })]
            })
        })
          , ng = j.Z.button(nf())
          , nm = t(16681);
        function np(e) {
            var n = e.onChange
              , t = e.enabled
              , r = e.label
              , a = e.disabled
              , i = (0,
            y.useCallback)(function() {
                n(!t)
            }, [t, n]);
            return (0,
            v.jsx)(nm.fC, {
                checked: t,
                disabled: a,
                onCheckedChange: i,
                "aria-label": r,
                className: (0,
                F.Z)(a && "cursor-not-allowed opacity-30", "bg-gray-200 radix-state-checked:bg-green-600", "relative h-[25px] w-[42px] cursor-pointer rounded-full"),
                children: (0,
                v.jsx)(nm.bU, {
                    className: (0,
                    F.Z)("block h-[21px] w-[21px] rounded-full", "translate-x-0.5 transition-transform duration-100 will-change-transform radix-state-checked:translate-x-[19px]", "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)]")
                })
            })
        }
        var nv = t(57311)
          , nx = t(13282);
        function nb(e) {
            var n = e.children
              , t = e.sidebarOpen
              , r = e.onClose;
            return (0,
            v.jsx)(eB.u.Root, {
                show: t,
                as: y.Fragment,
                children: (0,
                v.jsxs)(eq.V, {
                    as: "div",
                    className: "relative z-10",
                    onClose: r,
                    children: [(0,
                    v.jsx)("div", {
                        className: "fixed inset-0"
                    }), (0,
                    v.jsx)("div", {
                        className: "fixed inset-0 overflow-hidden",
                        children: (0,
                        v.jsx)("div", {
                            className: "absolute inset-0 overflow-hidden",
                            children: (0,
                            v.jsx)("div", {
                                className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                                children: (0,
                                v.jsx)(eB.u.Child, {
                                    as: y.Fragment,
                                    enter: "transform transition ease-in-out duration-100 sm:duration-300",
                                    enterFrom: "translate-x-full",
                                    enterTo: "translate-x-0",
                                    leave: "transform transition ease-in-out duration-300 sm:duration-500",
                                    leaveFrom: "translate-x-0",
                                    leaveTo: "translate-x-full",
                                    children: (0,
                                    v.jsx)(eq.V.Panel, {
                                        className: "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                                        children: (0,
                                        v.jsx)("div", {
                                            className: "h-full overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                                            children: n
                                        })
                                    })
                                })
                            })
                        })
                    })]
                })
            })
        }
        var ny = t(57924);
        function nj() {
            var e = (0,
            p._)(["overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 bg-white dark:bg-gray-800"]);
            return nj = function() {
                return e
            }
            ,
            e
        }
        function nC() {
            var e = (0,
            p._)(["whitespace-pre-wrap text-sm"]);
            return nC = function() {
                return e
            }
            ,
            e
        }
        function nw() {
            var e = (0,
            p._)(["px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-black/10 border-gray-200"]);
            return nw = function() {
                return e
            }
            ,
            e
        }
        function nk(e) {
            var n = e.children
              , t = e.title
              , r = e.icon
              , a = e.isOpen
              , i = e.slideOver
              , o = e.onClose
              , s = (0,
            v.jsxs)(nT, {
                children: [(0,
                v.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [(0,
                    v.jsxs)("div", {
                        className: "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                        children: [(0,
                        v.jsx)(eo.ZP, {
                            icon: r
                        }), t]
                    }), (0,
                    v.jsx)("div", {
                        className: "mr-2 mt-2 flex h-7 items-center",
                        children: (0,
                        v.jsxs)("button", {
                            type: "button",
                            className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                            onClick: o,
                            children: [(0,
                            v.jsx)("span", {
                                className: "sr-only",
                                children: "Close sidebar"
                            }), (0,
                            v.jsx)(eo.ZP, {
                                icon: G.q5L,
                                size: "medium",
                                "aria-hidden": "true"
                            })]
                        })
                    })]
                }), n]
            });
            return i ? (0,
            v.jsx)(nb, {
                sidebarOpen: a,
                onClose: o,
                children: s
            }) : a ? s : null
        }
        function n_(e) {
            var n = e.clientThreadId
              , t = e.currentLeafId
              , r = e.isOpen
              , a = e.slideOver
              , i = e.onClose
              , o = (0,
            _.u9)(n, t)
              , s = (0,
            m._)((0,
            y.useState)(), 2)
              , l = s[0]
              , u = s[1]
              , c = (0,
            k.hz)()
              , d = (0,
            y.useCallback)(function() {
                u(void 0)
            }, [])
              , f = (0,
            y.useCallback)(function() {
                var e = _.tQ.getTree(n);
                navigator.clipboard.writeText(e.getTextFromThread(t))
            }, [t, n]);
            if (!c.has("debug"))
                return null;
            var h = o.map(function(e, n) {
                var t = e.author
                  , r = t.role
                  , a = t.name;
                return (0,
                v.jsxs)(nP, {
                    role: "button",
                    onClick: function() {
                        return u(n)
                    },
                    children: [(0,
                    v.jsxs)("div", {
                        className: "text-xs font-medium uppercase text-gray-400",
                        children: [r, a && a !== r && " (".concat(a, ")"), " -> ", nv.Cv.getRecipientFromMessage(e)]
                    }), (0,
                    v.jsx)("div", {
                        children: nv.Cv.getTextFromMessage(e)
                    })]
                }, e.id)
            });
            return (0,
            v.jsxs)(nk, {
                icon: G.cDN,
                title: "Debug",
                isOpen: r,
                slideOver: a,
                onClose: i,
                children: [(0,
                v.jsxs)("div", {
                    className: "flex items-center justify-between border-y bg-gray-100 px-4 py-1 text-xs font-medium uppercase text-gray-700",
                    children: ["Conversation messages", (0,
                    v.jsxs)("div", {
                        className: "flex gap-2",
                        children: [(0,
                        v.jsx)(ny.u, {
                            label: "Copy conversation text to clipboard",
                            children: (0,
                            v.jsx)(nx.Z, {
                                onCopy: f
                            })
                        }), (0,
                        v.jsx)(ny.u, {
                            label: "Download raw conversation",
                            children: (0,
                            v.jsx)(nM, {
                                clientThreadId: n,
                                messages: o
                            })
                        })]
                    })]
                }), (0,
                v.jsx)(nN, {
                    children: h
                }), void 0 !== l && (0,
                v.jsx)(e9.ZP, {
                    isOpen: !0,
                    onModalClose: d,
                    type: "success",
                    children: (0,
                    v.jsx)("pre", {
                        className: "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                        children: JSON.stringify(o[l], null, 2)
                    })
                }, "DebugMessageModal-".concat(l))]
            })
        }
        function nM(e) {
            var n = e.clientThreadId
              , t = e.messages
              , r = (0,
            y.useCallback)(function() {
                var e = JSON.stringify(t) + "\n"
                  , r = new Blob([e],{
                    type: "application/json"
                })
                  , a = URL.createObjectURL(r)
                  , i = document.createElement("a");
                i.href = a,
                i.download = "messages-".concat(_.tQ.getServerThreadId(n), ".jsonl"),
                i.click(),
                URL.revokeObjectURL(a)
            }, [n, t]);
            return (0,
            v.jsx)("button", {
                onClick: r,
                children: (0,
                v.jsx)(eo.ZP, {
                    icon: G._hL
                })
            })
        }
        var nT = j.Z.div(nj())
          , nN = j.Z.pre(nC())
          , nP = j.Z.div(nw());
        function nI(e) {
            var n = e.plugin
              , t = n.manifest.name_for_human;
            return (0,
            v.jsxs)("div", {
                className: "flex gap-4 rounded bg-gray-50 px-4 py-2 dark:bg-gray-800",
                children: [(0,
                v.jsx)(eG.Z, {
                    url: n.manifest.logo_url,
                    name: t,
                    size: 32,
                    className: "flex-shrink-0"
                }), (0,
                v.jsxs)("div", {
                    className: "flex flex-col gap-1",
                    children: [(0,
                    v.jsx)("h2", {
                        className: "align-top text-base font-medium",
                        children: t
                    }), (0,
                    v.jsx)("div", {
                        className: "text-sm",
                        children: n.manifest.description_for_human
                    })]
                })]
            })
        }
        function nS(e) {
            var n = e.manifestValidationInfo
              , t = (0,
            g._)(e, ["manifestValidationInfo"])
              , r = n.manifest_dict
              , a = n.warnings
              , i = n.errors;
            return (0,
            v.jsx)(nD, (0,
            h._)({
                name: "manifest",
                content: r,
                warnings: a,
                errors: i
            }, t))
        }
        function nZ(e) {
            var n = e.apiValidationInfo
              , t = (0,
            g._)(e, ["apiValidationInfo"])
              , r = n.openapi_spec_dict
              , a = n.warnings
              , i = n.errors;
            return (0,
            v.jsx)(nD, (0,
            h._)({
                name: "OpenAPI spec",
                content: r,
                warnings: a,
                errors: i
            }, t))
        }
        function nR(e) {
            var n = e.apiValidationInfo
              , t = (0,
            g._)(e, ["apiValidationInfo"])
              , r = n.api_typescript;
            return r ? (0,
            v.jsx)(nE, (0,
            h._)({
                text: "Prompt for ChatGPT",
                content: r
            }, t)) : null
        }
        function nD(e) {
            var n = e.name
              , t = e.content
              , r = e.warnings
              , a = e.errors
              , i = (0,
            g._)(e, ["name", "content", "warnings", "errors"])
              , o = r && r.length > 0
              , s = a && a.length > 0
              , l = "Validated ".concat(n)
              , u = (0,
            v.jsx)(eo.ZP, {
                icon: G.UgA,
                className: "text-green-500"
            });
            return s ? (l = "Errors in ".concat(n),
            u = (0,
            v.jsx)(eo.ZP, {
                icon: G.q5L,
                className: "text-red-500"
            })) : o && (l = "Warnings in ".concat(n),
            u = (0,
            v.jsx)(eo.ZP, {
                icon: G.bcx,
                className: "text-yellow-500"
            })),
            (0,
            v.jsx)(nE, (0,
            h._)({
                icon: u,
                text: l,
                content: t,
                warnings: r,
                errors: a
            }, i))
        }
        function nE(e) {
            var n = e.icon
              , t = e.text
              , r = e.content
              , a = e.warnings
              , i = e.errors
              , o = e.expanded
              , s = e.onChangeExpanded
              , l = (0,
            m._)((0,
            y.useState)(!1), 2)
              , u = l[0]
              , c = l[1]
              , d = null != o ? o : u
              , f = (0,
            y.useCallback)(function() {
                s ? s(!d) : c(function(e) {
                    return !e
                })
            }, [d, s]);
            return (0,
            v.jsxs)("div", {
                className: "flex flex-col gap-2 text-sm",
                children: [(0,
                v.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [n && (0,
                    v.jsx)("div", {
                        children: n
                    }), (0,
                    v.jsx)("div", {
                        children: t
                    }), (0,
                    v.jsx)("div", {
                        role: "button",
                        className: "cursor-pointer text-gray-500 hover:text-gray-700",
                        onClick: f,
                        children: (0,
                        v.jsx)(eo.ZP, {
                            icon: d ? G.rH8 : G.bTu
                        })
                    })]
                }), d && (0,
                v.jsxs)(v.Fragment, {
                    children: [(0,
                    v.jsxs)("div", {
                        className: "flex flex-col gap-2 font-semibold",
                        children: [i && i.map(function(e, n) {
                            return (0,
                            v.jsx)("div", {
                                className: "text-red-500",
                                children: e
                            }, n)
                        }), a && a.map(function(e, n) {
                            return (0,
                            v.jsx)("div", {
                                className: "text-yellow-500",
                                children: e
                            }, n)
                        })]
                    }), r && (0,
                    v.jsx)("pre", {
                        className: "overflow-auto whitespace-pre-wrap text-xs",
                        children: "string" == typeof r ? r : JSON.stringify(r, null, 2)
                    })]
                })]
            })
        }
        var nF = t(81949);
        function nL(e) {
            var n = e.onSuccess
              , t = e.onError
              , r = e.onSettled
              , a = (0,
            x.NL)()
              , i = (0,
            ni.D)(Y.ZP.updatePluginUserSettings.bind(Y.ZP), {
                onSuccess: function(e) {
                    nA(e, a, ["installedAip"]),
                    nB(e, a, ["approvedAip"]),
                    n(e)
                },
                onError: t,
                onSettled: r
            }).mutate;
            return (0,
            y.useCallback)(function(e) {
                i({
                    pluginId: e,
                    isInstalled: !0
                })
            }, [i])
        }
        function nA(e, n, t) {
            n.setQueryData(t, function(n) {
                var t = (0,
                nF._)((null == n ? void 0 : n.items) || [])
                  , r = t.findIndex(function(n) {
                    return n.id === e.id
                });
                return -1 !== r ? t[r] = e : t.push(e),
                {
                    count: t.length,
                    items: t
                }
            })
        }
        function nB(e, n, t) {
            n.setQueryData(t, function(n) {
                var t = (0,
                nF._)((null == n ? void 0 : n.items) || [])
                  , r = t.findIndex(function(n) {
                    return n.id === e.id
                });
                return -1 !== r && (t[r] = e),
                {
                    count: t.length,
                    items: t
                }
            })
        }
        function nq(e) {
            var n = e.manifest.auth;
            if ("oauth" !== n.type || !e.oauth_client_id)
                return null;
            var t = new URLSearchParams({
                response_type: "code",
                client_id: e.oauth_client_id,
                redirect_uri: "".concat(window.location.origin, "/aip/").concat(e.id, "/oauth/callback"),
                scope: n.scope
            });
            return n.client_url.includes("slack.com") && (t.delete("scope"),
            t.append("user_scope", n.scope)),
            "".concat(n.client_url, "?").concat(t)
        }
        var nU = t(8844)
          , nO = t(22121)
          , nz = t(69403);
        function nH() {
            return (nH = (0,
            nl._)(function(e) {
                var n;
                return (0,
                nu.Jh)(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]),
                        [4, function(e) {
                            return nV.apply(this, arguments)
                        }(e)];
                    case 1:
                        return [2, t.sent()];
                    case 2:
                        return console.error("Error making localhost plugin HTTP call", n = t.sent()),
                        [2, [{
                            id: (0,
                            nU.Z)(),
                            author: {
                                role: nz.uU.Tool,
                                name: "plugin_service"
                            },
                            content: {
                                content_type: "text",
                                parts: ["Error making localhost plugin HTTP call: ".concat(n)]
                            },
                            metadata: {
                                parent_message_id: e.parent_message_id,
                                is_complete: !0
                            },
                            recipient: "all"
                        }]];
                    case 3:
                        return [2]
                    }
                })
            })).apply(this, arguments)
        }
        function nV() {
            return (nV = (0,
            nl._)(function(e) {
                var n, t, r, a;
                function i(e) {
                    return Object.keys(e).map(function(e) {
                        return e.toLowerCase()
                    })
                }
                return (0,
                nu.Jh)(this, function(o) {
                    switch (o.label) {
                    case 0:
                        var s;
                        if (n = {
                            "content-type": "application/json"
                        },
                        s = [i(e.headers), i(n)].flat(),
                        new Set(s).size !== s.length)
                            throw Error("Refusing to make localhost plugin HTTP call with duplicate header keys");
                        return t = e.url,
                        e.qs_params.length > 0 && (t = t + "?" + new URLSearchParams(e.qs_params)),
                        r = void 0,
                        null !== e.body && (r = JSON.stringify(e.body)),
                        [4, fetch(t, {
                            method: e.method,
                            headers: (0,
                            h._)({}, n, e.headers),
                            body: r
                        })];
                    case 1:
                        return [4, o.sent().text()];
                    case 2:
                        if (a = o.sent(),
                        "chat" === e.api_function_type)
                            return [2, [JSON.parse(a)]];
                        if ("kwargs" === e.api_function_type)
                            return [2, [{
                                id: (0,
                                nU.Z)(),
                                author: {
                                    role: nz.uU.Tool,
                                    name: "".concat(e.namespace, ".").concat(e.function_name)
                                },
                                content: {
                                    content_type: "text",
                                    parts: [a]
                                },
                                metadata: {
                                    parent_message_id: e.parent_message_id,
                                    is_complete: !0
                                },
                                recipient: "all"
                            }]];
                        throw Error("Not implemented")
                    }
                })
            })).apply(this, arguments)
        }
        function nW(e) {
            return !!nG(e.domain)
        }
        function nG(e) {
            return /^localhost:\d+$/.test(e) ? "http://".concat(e) : /^https?:\/\/localhost:\d+$/.test(e) ? e : null
        }
        function n$(e) {
            return nQ.apply(this, arguments)
        }
        function nQ() {
            return (nQ = (0,
            nl._)(function(e) {
                var n, t, r, a, i;
                return (0,
                nu.Jh)(this, function(o) {
                    switch (o.label) {
                    case 0:
                        return [4, fetch(e + "/.well-known/ai-plugin.json").then(function(e) {
                            return e.json()
                        }).catch(function(e) {
                            throw Error("Failed to fetch localhost manifest. Check to ensure your localhost is running and your localhost server has CORS enabled.")
                        })];
                    case 1:
                        if (!(r = null == (t = o.sent()) ? void 0 : null === (n = t.api) || void 0 === n ? void 0 : n.url))
                            throw Error("Localhost manifest is missing OpenAPI spec URL.");
                        if ("pathname" === (a = function(e) {
                            try {
                                return new URL(e),
                                "full url"
                            } catch (n) {
                                if (e.startsWith("/"))
                                    return "pathname";
                                return "neither"
                            }
                        }(r)))
                            r = e + r;
                        else if ("neither" === a)
                            throw Error("Localhost manifest OpenAPI spec URL is not a valid URL or path.");
                        return [4, fetch(r).then(function(e) {
                            return e.text()
                        }).catch(function(e) {
                            throw Error("Failed to fetch localhost OpenAPI spec.")
                        }).then(function(e) {
                            try {
                                return nO.ZP.parse(e)
                            } catch (e) {}
                            try {
                                return JSON.parse(e)
                            } catch (e) {}
                            throw Error("Failed to parse localhost OpenAPI spec as JSON or YAML.")
                        })];
                    case 2:
                        i = o.sent(),
                        o.label = 3;
                    case 3:
                        return o.trys.push([3, 5, , 6]),
                        [4, Y.ZP.createOrUpdateLocalhostPlugin({
                            localhost: e,
                            manifest: t,
                            openapiSpec: i
                        })];
                    case 4:
                        return [2, o.sent()];
                    case 5:
                        return o.sent(),
                        ed.m.danger("Failed to create or update localhost plugin at ".concat(e)),
                        [3, 6];
                    case 6:
                        return [2]
                    }
                })
            })).apply(this, arguments)
        }
        var nJ = t(697)
          , nY = (0,
        M.ZP)(function() {
            return {
                isOpen: !1
            }
        })
          , nK = {
            close: function() {
                nY.setState({
                    isOpen: !1
                })
            },
            setIsOpen: function(e) {
                nY.setState({
                    isOpen: e
                })
            }
        };
        function nX(e) {
            var n = e.slideOver
              , t = (0,
            m._)((0,
            y.useState)(), 2)
              , r = t[0]
              , a = t[1]
              , i = (0,
            m._)((0,
            y.useState)(!1), 2)
              , o = i[0]
              , s = i[1]
              , l = (0,
            m._)((0,
            y.useState)(!1), 2)
              , u = l[0]
              , c = l[1]
              , d = (0,
            m._)((0,
            y.useState)(!1), 2)
              , f = d[0]
              , h = d[1]
              , g = (0,
            k.hz)()
              , p = (0,
            x.NL)()
              , b = nY(function(e) {
                return e.isOpen
            })
              , j = (0,
            nJ.p0)()
              , C = (0,
            y.useMemo)(function() {
                return j.find(nW)
            }, [j])
              , w = (0,
            y.useCallback)((0,
            nl._)(function() {
                var e, n;
                return (0,
                nu.Jh)(this, function(t) {
                    switch (t.label) {
                    case 0:
                        if (!C)
                            return [3, 2];
                        return a(void 0),
                        [4, n$(C.domain)];
                    case 1:
                        if (void 0 === (e = t.sent()))
                            return [2];
                        n = e.plugin,
                        a({
                            manifestValidationInfo: e.manifest_validation_info,
                            apiValidationInfo: e.api_validation_info
                        }),
                        n && nB(n, p, ["installedAip"]),
                        t.label = 2;
                    case 2:
                        return [2]
                    }
                })
            }), [C, p]);
            return ((0,
            y.useEffect)(function() {
                w()
            }, [w]),
            g.has("tools3_dev")) ? (0,
            v.jsx)(nk, {
                icon: G.V7f,
                title: "Plugin devtools",
                isOpen: b,
                slideOver: n,
                onClose: nK.close,
                children: (0,
                v.jsx)("div", {
                    className: "border-t border-gray-100 p-2 text-sm dark:border-gray-700",
                    children: C ? (0,
                    v.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0,
                        v.jsx)("div", {
                            children: (0,
                            v.jsx)(ei.z, {
                                size: "small",
                                color: "neutral",
                                onClick: w,
                                children: "Refresh plugin"
                            })
                        }), r ? (0,
                        v.jsxs)(v.Fragment, {
                            children: [(0,
                            v.jsx)(nI, {
                                plugin: C
                            }), (0,
                            v.jsx)(nS, {
                                manifestValidationInfo: r.manifestValidationInfo,
                                expanded: o,
                                onChangeExpanded: s
                            }), (0,
                            v.jsx)(nZ, {
                                apiValidationInfo: r.apiValidationInfo,
                                expanded: u,
                                onChangeExpanded: c
                            }), (0,
                            v.jsx)(nR, {
                                apiValidationInfo: r.apiValidationInfo,
                                expanded: f,
                                onChangeExpanded: h
                            })]
                        }) : (0,
                        v.jsx)("div", {
                            className: "self-center",
                            children: (0,
                            v.jsx)(es.Z, {})
                        })]
                    }) : (0,
                    v.jsx)("div", {
                        className: "mt-4 text-center",
                        children: "Please enable a localhost plugin to use devtools."
                    })
                })
            }) : null
        }
        var n0 = t(44925);
        function n1() {
            var e = (0,
            p._)(["block text-sm font-medium mb-1"]);
            return n1 = function() {
                return e
            }
            ,
            e
        }
        var n2 = (0,
        $.vU)({
            settings: {
                id: "settingsModal.settings",
                defaultMessage: "Settings",
                description: "Title for the settings modal"
            },
            theme: {
                id: "settingsModal.theme",
                defaultMessage: "Theme",
                description: "Label for the theme setting"
            },
            system: {
                id: "settingsModal.system",
                defaultMessage: "System",
                description: "Option for the system theme"
            },
            dark: {
                id: "settingsModal.dark",
                defaultMessage: "Dark",
                description: "Option for the dark theme"
            },
            light: {
                id: "settingsModal.light",
                defaultMessage: "Light",
                description: "Option for the light theme"
            },
            exportData: {
                id: "settingsModal.exportData",
                defaultMessage: "Export data",
                description: "Label for the export data button"
            },
            exportButton: {
                id: "settingsModal.exportButton",
                defaultMessage: "Export",
                description: "Export data button"
            },
            deleteAccount: {
                id: "settingsModal.deleteAccount",
                defaultMessage: "Delete account",
                description: "Label for the delete account button"
            },
            deleteAccountButton: {
                id: "settingsModal.deleteButton",
                defaultMessage: "Delete",
                description: "Delete account button"
            },
            openPluginDevtools: {
                id: "settingsModal.openPluginDevtools",
                defaultMessage: "Open plugin devtools",
                description: "Label for the open plugin devtools setting"
            },
            enable2fa: {
                id: "settingsModal.enable2fa",
                defaultMessage: "Enable two-factor authentication",
                description: "Label for the enable 2FA button"
            },
            enable: {
                id: "settingsModal.enable",
                defaultMessage: "Enable",
                description: "Enable 2FA button"
            },
            disable: {
                id: "settingsModal.disable",
                defaultMessage: "Disable",
                description: "Disable 2FA button"
            },
            disable2fa: {
                id: "settingsModal.disable2fa",
                defaultMessage: "Disable two factor authentication",
                description: "Label for the mfa remove button."
            },
            chatHistoryDescription: {
                id: "settingsModal.chatHistoryDescription",
                defaultMessage: "Save new chats to your history and allow them to be used to improve ChatGPT via model training. Unsaved chats will be deleted from our systems within 30 days. <link>Learn more</link>",
                description: "Description for the chat history setting"
            },
            dataExportRequested: {
                id: "settingsModal.dataExportRequested",
                defaultMessage: "Successfully exported data. You should receive an email shortly with your data.",
                description: "Message shown when a data export request is received"
            },
            dataExportFailed: {
                id: "settingsModal.dataExportFailed",
                defaultMessage: "We were unable to process your export at this time. Please try again later.",
                description: "Message shown when a data export request fails"
            },
            dataExportModalTitle: {
                id: "settingsModal.dataExportModalTitle",
                defaultMessage: "Request data export - are you sure?",
                description: "Title for the data export modal"
            },
            dataExportModalConfirm: {
                id: "settingsModal.dataExportModalConfirm",
                defaultMessage: "Confirm export",
                description: "Confirm button for the data export modal"
            },
            dataExportModalCancel: {
                id: "settingsModal.dataExportModalCancel",
                defaultMessage: "Cancel",
                description: "Cancel button for the data export modal"
            },
            dataExportModalDescription1: {
                id: "settingsModal.dataExportModalDescription1",
                defaultMessage: "Your account details and conversations will be included in the export.",
                description: "Description for the data export modal"
            },
            dataExportModalDescription2: {
                id: "settingsModal.dataExportModalDescription2",
                defaultMessage: "The data will be sent to your registered email in a downloadable file.",
                description: "Description for the data export modal"
            },
            dataExportModalDescription3: {
                id: "settingsModal.dataExportModalDescription3",
                defaultMessage: "Processing may take some time. You'll be notified when it's ready.",
                description: "Description for the data export modal"
            },
            dataExportModalDescription4: {
                id: "settingsModal.dataExportModalDescription4",
                defaultMessage: 'To proceed, click "Confirm export" below.',
                description: "Description for the data export modal"
            },
            deleteAccountSessionTooOld: {
                id: "settingsModal.deleteAccountSessionTooOld",
                defaultMessage: "Your login session is too old. Please log in again before deleting your account.",
                description: "Message shown when the user's login session is too old to delete their account."
            },
            deleteAccountFailed: {
                id: "settingsModal.deleteAccountFailed",
                defaultMessage: "Failed to delete account. Please try again later.",
                description: "Message shown when there's an error deleting the user's account."
            },
            deleteAccountTitle: {
                id: "settingsModal.deleteAccountTitle",
                defaultMessage: "Delete account - are you sure?",
                description: "Title for the delete account confirmation modal."
            },
            deleteAccountWarning: {
                id: "settingsModal.deleteAccountWarning",
                defaultMessage: "Deleting your account is permanent and cannot be undone.",
                description: "Warning message about account deletion being permanent."
            },
            reuseEmailPhoneWarning: {
                id: "settingsModal.reuseEmailPhoneWarning",
                defaultMessage: "For security reasons, you cannot reuse the same email or phone number for a new account.",
                description: "Warning message about not being able to reuse email or phone number for a new account."
            },
            dataRemovalWarning: {
                id: "settingsModal.dataRemovalWarning",
                defaultMessage: "All your data, including profile, conversations, and API usage, will be removed.",
                description: "Warning message about data removal after account deletion."
            },
            apiAccessDeletionWarning: {
                id: "settingsModal.apiAccessDeletionWarning",
                defaultMessage: "If you've been using ChatGPT with the API, this access will also be deleted.",
                description: "Warning message about API access being deleted."
            },
            iapSubscriptionWarning: {
                id: "settingsModal.iapSubscriptionWarning",
                defaultMessage: "You will need to cancel your in-app purchase subscription in the Apple App Store. We cannot cancel your subscription for you.",
                description: "Warning message about cancelling in-app subscriptions."
            },
            typeEmailLabel: {
                id: "settingsModal.typeEmailLabel",
                defaultMessage: "Please type your account email.",
                description: "Label for email input field when deleting an account."
            },
            typeDeleteInputLabel: {
                id: "settingsModal.typeDeleteInputLabel",
                defaultMessage: 'To proceed, type "DELETE" in the input field below.',
                description: "Label for DELETE input field when deleting an account."
            },
            lockedButtonLabel: {
                id: "settingsModal.lockedButtonLabel",
                defaultMessage: "Locked",
                description: "Label for the locked button when deleting an account."
            },
            deleteAccountButtonLabel: {
                id: "settingsModal.deleteAccountButtonLabel",
                defaultMessage: "Permanently delete my account",
                description: "Label for the button to confirm account deletion."
            },
            recentLoginMessage: {
                id: "settingsModal.recentLoginMessage",
                defaultMessage: "You may only delete your account if you have logged in within the last 10 minutes. Please log in again, then return here to continue.",
                description: "Message shown when the user needs to log in again to delete their account."
            },
            refreshLoginButtonLabel: {
                id: "settingsModal.refreshLoginButtonLabel",
                defaultMessage: "Refresh login",
                description: "Label for the button to refresh login."
            },
            dataControlsLabel: {
                id: "settingsModal.dataControlsLabel",
                defaultMessage: "Data Controls",
                description: "Label for the data controls section."
            },
            hideLabel: {
                id: "settingsModal.hideLabel",
                defaultMessage: "Hide",
                description: "Label for the hide button."
            },
            showLabel: {
                id: "settingsModal.showLabel",
                defaultMessage: "Show",
                description: "Label for the show button."
            },
            chatHistoryToggleLabel: {
                id: "settingsModal.chatHistoryToggleLabel",
                defaultMessage: "Chat History & Training",
                description: "Label for the chat history toggle."
            },
            dataControlsTab: {
                id: "settingsModal.dataControls",
                defaultMessage: "Data controls",
                description: "Label for the data controls tab"
            },
            betaIntro: {
                id: "settingsModal.betaIntro",
                defaultMessage: "As a Plus user, enjoy early access to experimental new features, which may change during development.",
                description: "Introduction for the beta features tab"
            },
            betaSettingsUpdateFailed: {
                id: "settingsModal.betaSettingsUpdateFailed",
                defaultMessage: "Failed to update your beta setting",
                description: "Message shown when there's an error updating beta settings"
            },
            betaPluginToggleLabel: {
                id: "settingsModal.betaPluginToggleLabel",
                defaultMessage: "Plugins",
                description: "Label for the Plugins beta toggle."
            },
            betaPluginToggleDescription: {
                id: "settingsModal.betaPluginToggleDescription",
                defaultMessage: "Try a version of ChatGPT that knows when and how to use third-party plugins that you enable.",
                description: "Description for the Plugins beta toggle."
            },
            betaBrowsingToggleLabel: {
                id: "settingsModal.betaBrowsingToggleLabel",
                defaultMessage: "Web browsing",
                description: "Label for the Browsing beta toggle."
            },
            betaBrowsingToggleDescription: {
                id: "settingsModal.betaBrowsingToggleDescription",
                defaultMessage: "Try a version of ChatGPT that knows when and how to browse the internet to answer questions about recent topics and events.",
                description: "Description for the Browsing beta toggle."
            },
            betaCodeInterpreterToggleLabel: {
                id: "settingsModal.betaCodeInterpreterToggleLabel",
                defaultMessage: "Code interpreter",
                description: "Label for the Code interpreter beta toggle."
            },
            betaCodeInterpreterToggleDescription: {
                id: "settingsModal.betaCodeInterpreterToggleDescription",
                defaultMessage: "Your favorite GPT models now use a python sandbox. Once enabled, ChatGPT can build and run python code.",
                description: "Description for the Code interpreter beta toggle."
            },
            generalTab: {
                id: "settingsModal.general",
                defaultMessage: "General",
                description: "Label for the general tab"
            },
            betaTab: {
                id: "settingsModal.beta",
                defaultMessage: "Beta features",
                description: "Label for the Beta Features tab"
            },
            clearChatLabel: {
                id: "settingsModal.clearChatLabel",
                defaultMessage: "Clear all chats",
                description: "Label for the clear chat button"
            },
            clearChatButton: {
                id: "settingsModal.clearChatButton",
                defaultMessage: "Clear",
                description: "Clear chat button"
            }
        });
        function n3(e) {
            var n, t, r = e.onClose, a = e.onToggleHistoryDisabled, i = e.onDeleteHistory, o = (0,
            Q.Z)(), s = eg().conversations.length > 0, u = (0,
            X.w$)(), c = (0,
            m._)((0,
            y.useState)(!1), 2), d = c[0], f = c[1], g = (0,
            m._)((0,
            y.useState)(!1), 2), p = g[0], x = g[1], b = (0,
            m._)((0,
            y.useState)(l.General), 2), j = b[0], C = b[1], w = (0,
            y.useContext)(E.QL), _ = w.historyDisabled, M = w.toggleHistoryDisabled, T = nY(function(e) {
                return e.isOpen
            }), N = (0,
            k.hz)(), P = N.has("data_export_enabled"), I = N.has("data_deletion_enabled"), Z = (0,
            eu.kP)().session, R = (0,
            ns.Fl)(), D = R.isBetaFeaturesUiEnabled, L = R.isPluginsAvailable, A = R.isBrowsingAvailable, B = R.isCodeInterpreterAvailable, q = (0,
            y.useCallback)(function() {
                f(!1)
            }, []), U = (0,
            y.useCallback)(function() {
                x(!1)
            }, []), O = (0,
            y.useCallback)(function() {
                f(!0)
            }, []), z = (0,
            y.useCallback)(function() {
                x(!0)
            }, []), H = (0,
            y.useCallback)(function() {
                a(),
                M()
            }, [a, M]), V = nd(), W = V.setupMfa, G = V.isUsernamePassword, $ = V.removeMfa;
            return d ? (0,
            v.jsx)(n6, {
                onClose: q
            }) : p ? (0,
            v.jsx)(tt, {
                onClose: U
            }) : (0,
            v.jsx)(e9.ZP, {
                size: "custom",
                isOpen: !0,
                onModalClose: r,
                className: "md:w-[680px]",
                type: "success",
                title: o.formatMessage(n2.settings),
                closeButton: (0,
                v.jsx)(e9.ol, {
                    onClose: r
                }),
                children: (0,
                v.jsxs)(na.fC, {
                    className: "flex flex-col gap-6 md:flex-row",
                    defaultValue: j,
                    orientation: u ? "vertical" : void 0,
                    onValueChange: function(e) {
                        C(e)
                    },
                    children: [(0,
                    v.jsxs)(na.aV, {
                        className: (0,
                        F.Z)("-ml-[8px] flex min-w-[180px] flex-shrink-0", u ? "flex-col" : "flex-row rounded-lg bg-gray-100 p-1 dark:bg-gray-800/30"),
                        children: [(0,
                        v.jsx)(n9, {
                            value: l.General,
                            icon: eW.oq2,
                            label: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, n2.generalTab))
                        }), D && (A || L || B) && (0,
                        v.jsx)(n9, {
                            value: l.BetaFeatures,
                            icon: eW.rTN,
                            label: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, n2.betaTab))
                        }), (0,
                        v.jsx)(n9, {
                            value: l.DataControls,
                            icon: eW.tQn,
                            label: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, n2.dataControlsTab))
                        })]
                    }), (0,
                    v.jsxs)(te, {
                        value: l.General,
                        children: [(0,
                        v.jsx)(tn, {
                            children: (0,
                            v.jsx)(n8, {})
                        }), N.has("tools3_dev") && (0,
                        v.jsx)(tn, {
                            children: (0,
                            v.jsx)(n4, {
                                label: o.formatMessage(n2.openPluginDevtools),
                                enabled: T,
                                onChange: nK.setIsOpen
                            })
                        }), (0,
                        v.jsx)(tn, {
                            children: (0,
                            v.jsx)(n7, {
                                color: "danger",
                                disabled: !s,
                                label: o.formatMessage(n2.clearChatLabel),
                                buttonLabel: o.formatMessage(n2.clearChatButton),
                                onClick: i
                            })
                        })]
                    }), (0,
                    v.jsx)(te, {
                        value: l.BetaFeatures,
                        children: (0,
                        v.jsx)(n5, {})
                    }), (0,
                    v.jsxs)(te, {
                        value: l.DataControls,
                        children: [(0,
                        v.jsx)(tn, {
                            children: (0,
                            v.jsx)(n4, {
                                label: o.formatMessage(n2.chatHistoryToggleLabel),
                                enabled: !_,
                                onChange: H,
                                description: (0,
                                v.jsx)(J.Z, (0,
                                S._)((0,
                                h._)({}, n2.chatHistoryDescription), {
                                    values: {
                                        link: function(e) {
                                            return (0,
                                            v.jsx)("a", {
                                                href: "https://help.openai.com/en/articles/7730893 ",
                                                target: "_blank",
                                                className: "underline",
                                                rel: "noreferrer",
                                                children: e
                                            })
                                        }
                                    }
                                }))
                            })
                        }), P && (0,
                        v.jsx)(tn, {
                            children: (0,
                            v.jsx)(n7, {
                                label: o.formatMessage(n2.exportData),
                                buttonLabel: o.formatMessage(n2.exportButton),
                                onClick: O
                            })
                        }), I && (0,
                        v.jsx)(tn, {
                            children: (0,
                            v.jsx)(n7, {
                                label: o.formatMessage(n2.deleteAccount),
                                buttonLabel: o.formatMessage(n2.deleteAccountButton),
                                color: "danger",
                                onClick: z
                            })
                        }), !(null == Z ? void 0 : null === (n = Z.user) || void 0 === n ? void 0 : n.mfa) && G && (0,
                        v.jsx)(tn, {
                            children: (0,
                            v.jsx)(n7, {
                                label: o.formatMessage(n2.enable2fa),
                                buttonLabel: o.formatMessage(n2.enable),
                                onClick: W
                            })
                        }), (null == Z ? void 0 : null === (t = Z.user) || void 0 === t ? void 0 : t.mfa) && G && (0,
                        v.jsx)(tn, {
                            children: (0,
                            v.jsx)(n7, {
                                label: o.formatMessage(n2.disable2fa),
                                buttonLabel: o.formatMessage(n2.disable),
                                onClick: $,
                                color: "danger"
                            })
                        })]
                    })]
                })
            })
        }
        function n5() {
            var e, n = (0,
            Q.Z)(), t = (0,
            eu.kP)().session, r = (0,
            ns.N2)(), a = (0,
            ns.Fl)(), i = a.isBrowsingAvailable, o = a.isBrowsingEnabled, s = a.isPluginsAvailable, l = a.isPluginsEnabled, u = a.isCodeInterpreterAvailable, c = a.isCodeInterpreterEnabled, d = (0,
            ni.D)({
                mutationFn: function(n) {
                    var r = n.feature
                      , a = n.enabled;
                    return Y.ZP.setUserSettingsBetaFeature(null !== (e = null == t ? void 0 : t.accessToken) && void 0 !== e ? e : "", r, a)
                },
                onSettled: r,
                onError: function() {
                    ed.m.danger(n.formatMessage(n2.betaSettingsUpdateFailed))
                }
            }), f = d.isLoading, g = d.variables, m = d.mutate, p = f && (null == g ? void 0 : g.feature) === ns.tr.BROWSING, x = f && (null == g ? void 0 : g.feature) === ns.tr.CODE_INTERPRETER, b = f && (null == g ? void 0 : g.feature) === ns.tr.PLUGINS;
            return (0,
            v.jsxs)(v.Fragment, {
                children: [(0,
                v.jsx)(tn, {
                    children: (0,
                    v.jsx)("p", {
                        children: (0,
                        v.jsx)(J.Z, (0,
                        h._)({}, n2.betaIntro))
                    })
                }), i && (0,
                v.jsx)(tn, {
                    children: (0,
                    v.jsx)(n4, {
                        label: n.formatMessage(n2.betaBrowsingToggleLabel),
                        disabled: p,
                        enabled: p ? null == g ? void 0 : g.enabled : o,
                        onChange: function(e) {
                            m({
                                feature: ns.tr.BROWSING,
                                enabled: e
                            })
                        },
                        description: (0,
                        v.jsx)(J.Z, (0,
                        h._)({}, n2.betaBrowsingToggleDescription))
                    })
                }), s && (0,
                v.jsx)(tn, {
                    children: (0,
                    v.jsx)(n4, {
                        label: n.formatMessage(n2.betaPluginToggleLabel),
                        disabled: b,
                        enabled: b ? null == g ? void 0 : g.enabled : l,
                        onChange: function(e) {
                            m({
                                feature: ns.tr.PLUGINS,
                                enabled: e
                            })
                        },
                        description: (0,
                        v.jsx)(J.Z, (0,
                        h._)({}, n2.betaPluginToggleDescription))
                    })
                }), u && (0,
                v.jsx)(tn, {
                    children: (0,
                    v.jsx)(n4, {
                        label: n.formatMessage(n2.betaCodeInterpreterToggleLabel),
                        disabled: x,
                        enabled: x ? null == g ? void 0 : g.enabled : c,
                        onChange: function(e) {
                            m({
                                feature: ns.tr.CODE_INTERPRETER,
                                enabled: e
                            })
                        },
                        description: (0,
                        v.jsx)(J.Z, (0,
                        h._)({}, n2.betaCodeInterpreterToggleDescription))
                    })
                })]
            })
        }
        function n4(e) {
            var n = e.label
              , t = e.disabled
              , r = e.enabled
              , a = e.onChange
              , i = e.description;
            return (0,
            v.jsxs)(v.Fragment, {
                children: [(0,
                v.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0,
                    v.jsx)("div", {
                        children: n
                    }), (0,
                    v.jsx)(np, {
                        disabled: t,
                        enabled: r,
                        onChange: a,
                        label: n
                    })]
                }), null != i && (0,
                v.jsx)("div", {
                    className: "mt-2 text-xs text-gray-500 dark:text-gray-600",
                    children: i
                })]
            })
        }
        function n7(e) {
            var n = e.color
              , t = e.disabled
              , r = e.label
              , a = e.buttonLabel
              , i = e.onClick;
            return (0,
            v.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0,
                v.jsx)("div", {
                    children: r
                }), (0,
                v.jsx)(ei.z, {
                    color: void 0 === n ? "neutral" : n,
                    disabled: !!t,
                    onClick: i,
                    children: a
                })]
            })
        }
        function n8() {
            var e = (0,
            no.F)()
              , n = e.theme
              , t = e.setTheme;
            return (0,
            v.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0,
                v.jsx)("div", {
                    children: (0,
                    v.jsx)(J.Z, (0,
                    h._)({}, n2.theme))
                }), (0,
                v.jsxs)("select", {
                    value: n,
                    onChange: function(e) {
                        t(e.target.value)
                    },
                    className: "rounded border border-black/10 bg-transparent text-sm dark:border-white/20",
                    children: [(0,
                    v.jsx)("option", {
                        value: "system",
                        children: (0,
                        v.jsx)(J.Z, (0,
                        h._)({}, n2.system))
                    }), (0,
                    v.jsx)("option", {
                        value: "dark",
                        children: (0,
                        v.jsx)(J.Z, (0,
                        h._)({}, n2.dark))
                    }), (0,
                    v.jsx)("option", {
                        value: "light",
                        children: (0,
                        v.jsx)(J.Z, (0,
                        h._)({}, n2.light))
                    })]
                })]
            })
        }
        function n6(e) {
            var n = e.onClose
              , t = (0,
            Q.Z)()
              , r = (0,
            eu.kP)().session
              , a = null == r ? void 0 : r.accessToken
              , i = (0,
            y.useCallback)(function() {
                try {
                    Y.ZP.submitDataExport(a).then(function() {
                        ed.m.success(t.formatMessage(n2.dataExportRequested)),
                        n()
                    })
                } catch (e) {
                    ed.m.warning(t.formatMessage(n2.dataExportFailed), {
                        hasCloseButton: !0
                    })
                }
            }, [a, t, n]);
            return (0,
            v.jsx)(e9.ZP, {
                isOpen: !0,
                onModalClose: n,
                type: "success",
                title: t.formatMessage(n2.dataExportModalTitle),
                primaryButton: (0,
                v.jsx)(e9.mH, {
                    title: t.formatMessage(n2.dataExportModalConfirm),
                    color: "primary",
                    onClick: i
                }),
                secondaryButton: (0,
                v.jsx)(e9.mH, {
                    title: t.formatMessage(n2.dataExportModalCancel),
                    color: "neutral",
                    onClick: n
                }),
                children: (0,
                v.jsxs)("div", {
                    className: "text-sm",
                    children: [(0,
                    v.jsxs)("ul", {
                        className: "my-3 flex list-disc flex-col gap-1 pl-3",
                        children: [(0,
                        v.jsx)("li", {
                            children: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, n2.dataExportModalDescription1))
                        }), (0,
                        v.jsx)("li", {
                            children: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, n2.dataExportModalDescription2))
                        }), (0,
                        v.jsx)("li", {
                            children: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, n2.dataExportModalDescription3))
                        })]
                    }), (0,
                    v.jsx)("div", {
                        children: (0,
                        v.jsx)(J.Z, (0,
                        h._)({}, n2.dataExportModalDescription4))
                    })]
                })
            })
        }
        function n9(e) {
            var n = e.value
              , t = e.icon
              , r = e.label
              , a = (0,
            X.w$)();
            return (0,
            v.jsxs)(na.xz, {
                className: (0,
                F.Z)("group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm radix-state-active:bg-gray-800 radix-state-active:text-white dark:text-gray-500 dark:radix-state-active:text-white", {
                    "flex-1 items-center justify-center": !a
                }),
                value: n,
                children: [(0,
                v.jsx)(eo.ZP, {
                    icon: t,
                    strokeWidth: 0,
                    className: "h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500"
                }), (0,
                v.jsx)("div", {
                    children: r
                })]
            })
        }
        function te(e) {
            var n = e.value
              , t = e.children;
            return (0,
            v.jsx)(na.VY, {
                className: "w-full md:min-h-[300px]",
                value: n,
                children: (0,
                v.jsx)("div", {
                    className: "flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300",
                    children: t
                })
            })
        }
        function tn(e) {
            var n = e.children;
            return (0,
            v.jsx)("div", {
                className: "border-b pb-3 last-of-type:border-b-0 dark:border-gray-700",
                children: n
            })
        }
        function tt(e) {
            var n, t = e.onClose, r = (0,
            Q.Z)(), a = (0,
            eu.kP)().session, i = null == a ? void 0 : a.accessToken, o = null == a ? void 0 : null === (n = a.user) || void 0 === n ? void 0 : n.email, s = (0,
            m._)((0,
            y.useState)(""), 2), l = s[0], u = s[1], c = (0,
            m._)((0,
            y.useState)(""), 2), d = c[0], f = c[1], g = (0,
            y.useCallback)(function() {
                var e, n = null == a ? void 0 : null === (e = a.user) || void 0 === e ? void 0 : e.iat;
                return void 0 === n || Date.now() / 1e3 - n < 600
            }, [a]), p = (0,
            y.useCallback)(function() {
                try {
                    g() ? Y.ZP.deactivateAccount(i).then(function() {
                        (0,
                        eu.w7)()
                    }) : ed.m.warning(r.formatMessage(n2.deleteAccountSessionTooOld), {
                        hasCloseButton: !0
                    })
                } catch (e) {
                    ed.m.warning(r.formatMessage(n2.deleteAccountFailed), {
                        hasCloseButton: !0
                    })
                }
            }, [i, r, g]), x = (0,
            y.useCallback)(function() {
                (0,
                eu.w7)()
            }, []), b = "DELETE" === d && (void 0 === o || l === o), j = (0,
            m._)((0,
            y.useState)(function() {
                return g()
            }), 1)[0], C = (0,
            k.e2)();
            return (0,
            v.jsx)(e9.ZP, {
                isOpen: !0,
                onModalClose: t,
                type: "success",
                title: r.formatMessage(n2.deleteAccountTitle),
                closeButton: (0,
                v.jsx)(e9.ol, {
                    onClose: t
                }),
                children: (0,
                v.jsxs)("div", {
                    className: "text-sm",
                    children: [(0,
                    v.jsxs)("ul", {
                        className: "mb-6 mt-4 flex list-disc flex-col gap-1 pl-3",
                        children: [(0,
                        v.jsx)("li", {
                            children: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, n2.deleteAccountWarning))
                        }), (0,
                        v.jsx)("li", {
                            children: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, n2.reuseEmailPhoneWarning))
                        }), (0,
                        v.jsx)("li", {
                            children: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, n2.dataRemovalWarning))
                        }), (0,
                        v.jsx)("li", {
                            children: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, n2.apiAccessDeletionWarning))
                        }), (null == C ? void 0 : C.purchase_origin_platform) === n0._.MOBILE_IOS && (0,
                        v.jsx)("li", {
                            children: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, n2.iapSubscriptionWarning))
                        })]
                    }), j ? (0,
                    v.jsxs)(v.Fragment, {
                        children: [void 0 !== o ? (0,
                        v.jsxs)("div", {
                            className: "mb-4",
                            children: [(0,
                            v.jsx)(tr, {
                                children: (0,
                                v.jsx)(J.Z, (0,
                                h._)({}, n2.typeEmailLabel))
                            }), (0,
                            v.jsx)(nh, {
                                value: l,
                                placeholder: o,
                                name: "email",
                                onChange: function(e) {
                                    u(e.target.value)
                                }
                            })]
                        }) : null, (0,
                        v.jsxs)("div", {
                            className: "mb-4",
                            children: [(0,
                            v.jsx)(tr, {
                                children: (0,
                                v.jsx)(J.Z, (0,
                                h._)({}, n2.typeDeleteInputLabel))
                            }), (0,
                            v.jsx)(nh, {
                                value: d,
                                onChange: function(e) {
                                    f(e.target.value)
                                },
                                name: "delete",
                                className: "mb-4"
                            })]
                        }), (0,
                        v.jsx)(ei.z, {
                            color: b ? "danger" : "disabled",
                            onClick: p,
                            disabled: !b,
                            className: "w-full",
                            children: b ? (0,
                            v.jsxs)(v.Fragment, {
                                children: [(0,
                                v.jsx)(eo.ZP, {
                                    icon: G.BJv
                                }), " ", (0,
                                v.jsx)(J.Z, (0,
                                h._)({}, n2.deleteAccountButtonLabel))]
                            }) : (0,
                            v.jsxs)(v.Fragment, {
                                children: [(0,
                                v.jsx)(eo.ZP, {
                                    icon: G.UIZ
                                }), " ", (0,
                                v.jsx)(J.Z, (0,
                                h._)({}, n2.lockedButtonLabel))]
                            })
                        })]
                    }) : (0,
                    v.jsxs)(v.Fragment, {
                        children: [(0,
                        v.jsx)("p", {
                            className: "pb-4 text-xs text-gray-500",
                            children: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, n2.recentLoginMessage))
                        }), (0,
                        v.jsx)(ei.z, {
                            color: "primary",
                            onClick: x,
                            className: "w-full",
                            children: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, n2.refreshLoginButtonLabel))
                        })]
                    })]
                })
            })
        }
        (r = l || (l = {})).General = "General",
        r.BetaFeatures = "BetaFeatures",
        r.DataControls = "DataControls";
        var tr = j.Z.label(n1());
        function ta() {
            var e = (0,
            p._)(["flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm"]);
            return ta = function() {
                return e
            }
            ,
            e
        }
        function ti() {
            var e = (0,
            p._)(["", ""]);
            return ti = function() {
                return e
            }
            ,
            e
        }
        function to() {
            var e = (0,
            p._)(["my-1.5 h-px bg-white/20"]);
            return to = function() {
                return e
            }
            ,
            e
        }
        function ts() {
            var e = (0,
            p._)(["rounded-md border border-white/20 hover:bg-gray-500/10"]);
            return ts = function() {
                return e
            }
            ,
            e
        }
        function tl() {
            var e = (0,
            p._)(["flex-col flex-1 transition-opacity duration-500\n", "\n", ""]);
            return tl = function() {
                return e
            }
            ,
            e
        }
        var tu = (0,
        $.vU)({
            helpAndFaq: {
                id: "navigation.helpAndFaq",
                defaultMessage: "Help & FAQ",
                description: "Help & FAQ menu item"
            },
            confirmClearConversations: {
                id: "navigation.confirmClearConversations",
                defaultMessage: "Confirm clear conversations",
                description: "Confirmation text for clearing conversations"
            },
            clearConversations: {
                id: "navigation.clearConversations",
                defaultMessage: "Clear conversations",
                description: "Clear conversations menu item"
            },
            setupTeam: {
                id: "navigation.setupTeam",
                defaultMessage: "Buy ChatGPT Business",
                description: "Buy ChatGPT for teams menu item"
            },
            myPlan: {
                id: "navigation.myPlan",
                defaultMessage: "My plan",
                description: "My plan menu item"
            },
            myProfile: {
                id: "navigation.myProfile",
                defaultMessage: "My profile",
                description: "Profile menu item"
            },
            settings: {
                id: "navigation.settings",
                defaultMessage: "Settings",
                description: "Settings menu item"
            },
            logOut: {
                id: "navigation.logOut",
                defaultMessage: "Log out",
                description: "Log out menu item"
            },
            upgradeToPlus: {
                id: "navigation.upgradeToPlus",
                defaultMessage: "Upgrade to Plus",
                description: "Upgrade to Plus menu item"
            },
            renewPlus: {
                id: "navigation.renewPlus",
                defaultMessage: "Renew Plus",
                description: "Renew Plus menu item"
            },
            newChat: {
                id: "navigation.newChat",
                defaultMessage: "New chat",
                description: "New chat button label"
            },
            clearChat: {
                id: "navigation.clearChat",
                defaultMessage: "Clear chat",
                description: "Clear chat button label"
            },
            chatHistoryLabel: {
                id: "navigation.chatHistoryLabel",
                defaultMessage: "Chat history",
                description: "Chat history label heading"
            },
            chatHistoryOff: {
                id: "navigation.chatHistoryOff",
                defaultMessage: "Chat History is off.",
                description: "Text indicating that chat history is turned off"
            },
            chatHistoryOffDescription: {
                id: "navigation.chatHistoryOffDescription",
                defaultMessage: "Chats won’t be saved in your history or used for training our models to improve ChatGPT. Unsaved chats will be deleted from our systems within 30 days. {learnMore}",
                description: "Description for chat history being off"
            },
            learnMore: {
                id: "navigation.learnMore",
                defaultMessage: "Learn more",
                description: "Learn more link text"
            },
            enableChatHistory: {
                id: "navigation.enableChatHistory",
                defaultMessage: "Enable chat history",
                description: "Enable chat history button label"
            },
            closeSidebar: {
                id: "navigation.closeSidebar",
                defaultMessage: "Close sidebar",
                description: "Close sidebar button label"
            },
            openSidebar: {
                id: "navigation.openSidebar",
                defaultMessage: "Open sidebar",
                description: "Open sidebar button label"
            },
            newLabel: {
                id: "navigation.newLabel",
                defaultMessage: "NEW",
                description: "Label for new features or items"
            }
        })
          , tc = j.Z.a(ta())
          , td = (0,
        j.Z)(tc)(ti(), function(e) {
            return e.$active ? "bg-gray-800" : "hover:bg-gray-800"
        });
        function tf(e) {
            var n = e.onClick
              , t = e.href
              , r = e.target
              , a = e.children;
            return (0,
            v.jsx)(eA.v.Item, {
                children: function(e) {
                    var i = e.active;
                    return (0,
                    v.jsx)(tc, {
                        as: void 0 !== t ? "a" : "button",
                        onClick: n,
                        href: t,
                        target: r,
                        className: (0,
                        F.Z)(i ? "bg-gray-700" : "hover:bg-gray-700"),
                        children: a
                    })
                }
            })
        }
        var th = j.Z.div(to())
          , tg = (0,
        j.Z)(tc)(ts())
          , tm = j.Z.div(tl(), function(e) {
            return e.$disableScroll ? "overflow-y-hidden opacity-20 pointer-events-none" : "overflow-y-auto"
        }, function(e) {
            return e.$offsetScrollbar && "-mr-2"
        });
        function tp(e) {
            var n = e.showCustomerPortalMenuItem
              , t = e.onClickCustomerPortal
              , r = e.onClickSettings
              , a = e.onDeleteHistory
              , i = (0,
            C.WS)()
              , o = (0,
            m._)((0,
            y.useState)(!1), 2)
              , s = o[0]
              , l = o[1]
              , u = (0,
            y.useCallback)(function() {
                l(!1),
                a()
            }, [a])
              , c = eg().conversations.length > 0
              , d = (0,
            k.hz)();
            return (0,
            v.jsxs)("nav", {
                children: [(0,
                v.jsxs)(tf, {
                    as: "a",
                    href: "https://help.openai.com/en/collections/3742473-chatgpt",
                    target: "_blank",
                    onClick: function() {
                        i(w.s6.clickFaqLink)
                    },
                    children: [(0,
                    v.jsx)(eo.ZP, {
                        icon: G.AlO
                    }), (0,
                    v.jsx)(J.Z, (0,
                    h._)({}, tu.helpAndFaq))]
                }), (0,
                v.jsx)(th, {}), c && (0,
                v.jsxs)(tf, {
                    onClick: function(e) {
                        s ? u() : (l(!0),
                        e.preventDefault())
                    },
                    children: [(0,
                    v.jsx)(eo.ZP, {
                        icon: s ? G.UgA : G.Ybf
                    }), s ? (0,
                    v.jsx)(J.Z, (0,
                    h._)({}, tu.confirmClearConversations)) : (0,
                    v.jsx)(J.Z, (0,
                    h._)({}, tu.clearConversations))]
                }), n && t && (0,
                v.jsxs)(tf, {
                    onClick: t,
                    children: [(0,
                    v.jsx)(eo.ZP, {
                        icon: G.fzv
                    }), (0,
                    v.jsx)(J.Z, (0,
                    h._)({}, tu.myPlan))]
                }), d.has("system_message2") && (0,
                v.jsxs)(tf, {
                    onClick: function() {
                        return nt.setIsProfileModalOpen(!0)
                    },
                    children: [(0,
                    v.jsx)(eo.ZP, {
                        icon: G.yK7
                    }), (0,
                    v.jsx)(J.Z, (0,
                    h._)({}, tu.myProfile))]
                }), (0,
                v.jsxs)(tf, {
                    onClick: r,
                    children: [(0,
                    v.jsx)(eo.ZP, {
                        icon: G.nbt
                    }), (0,
                    v.jsx)(J.Z, (0,
                    h._)({}, tu.settings))]
                }), (0,
                v.jsx)(th, {}), (0,
                v.jsxs)(tf, {
                    onClick: function() {
                        i(w.s6.clickLogOut, {
                            eventSource: "mouse"
                        }),
                        (0,
                        eu.w7)()
                    },
                    children: [(0,
                    v.jsx)(eo.ZP, {
                        icon: G.xqh
                    }), (0,
                    v.jsx)(J.Z, (0,
                    h._)({}, tu.logOut))]
                })]
            })
        }
        function tv(e) {
            var n, t = e.showCustomerPortalMenuItem, r = e.onClickCustomerPortal, a = e.onClickSettings, i = e.onDeleteHistory, o = (0,
            eu.kP)().session;
            return (0,
            v.jsxs)(eA.v, {
                as: "div",
                className: "group relative",
                children: [(0,
                v.jsxs)(eA.v.Button, {
                    className: "flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800",
                    children: [(0,
                    v.jsx)("div", {
                        className: "-ml-0.5 w-5 flex-shrink-0",
                        children: null != o ? (0,
                        v.jsx)(e4, {
                            user: o.user,
                            size: "small"
                        }) : null
                    }), (0,
                    v.jsx)("div", {
                        className: "grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white",
                        children: null == o ? void 0 : null === (n = o.user) || void 0 === n ? void 0 : n.name
                    }), (0,
                    v.jsx)(eo.ZP, {
                        icon: G.K9M,
                        size: "small",
                        className: "flex-shrink-0 text-gray-500"
                    })]
                }), (0,
                v.jsx)(e7, {
                    children: (0,
                    v.jsx)(eA.v.Items, {
                        className: "absolute bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md bg-[#050509] py-1.5 outline-none",
                        children: (0,
                        v.jsx)(tp, {
                            showCustomerPortalMenuItem: t,
                            onClickCustomerPortal: r,
                            onClickSettings: a,
                            onDeleteHistory: i
                        })
                    })
                })]
            })
        }
        var tx = ez.G.href;
        function tb(e) {
            var n = e.onClickAccountPayment
              , t = e.showAccountPaymentMenuItem
              , r = e.onClickCustomerPortal
              , a = e.showCustomerPortalMenuItem
              , i = e.onDeleteHistory
              , o = e.onNewThread
              , s = e.children
              , l = (0,
            Q.Z)()
              , u = (0,
            k.hz)()
              , c = (0,
            y.useRef)(null)
              , d = (0,
            m._)((0,
            y.useState)(!1), 2)
              , f = d[0]
              , g = d[1]
              , p = (0,
            y.useContext)(E.QL)
              , x = p.historyDisabled
              , b = p.toggleHistoryDisabled
              , j = p.getModifiedSettings
              , C = p.unsetModifiedSettings
              , w = j()
              , _ = (0,
            m._)((0,
            y.useState)(w), 2)
              , M = _[0]
              , T = _[1]
              , N = (0,
            y.useCallback)(function() {
                T(!0)
            }, [])
              , P = (0,
            y.useCallback)(function() {
                T(!1),
                C()
            }, [C])
              , I = (0,
            y.useCallback)(function() {
                o(),
                b()
            }, [o, b])
              , Z = (0,
            y.useMemo)(function() {
                return (0,
                v.jsxs)("div", {
                    className: (0,
                    F.Z)("absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500", x ? "visible max-h-72" : "invisible max-h-0"),
                    children: [(0,
                    v.jsxs)("div", {
                        className: "bg-gray-900 px-4 py-3",
                        children: [(0,
                        v.jsx)("div", {
                            className: "p-1 text-sm text-gray-100",
                            children: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, tu.chatHistoryOff))
                        }), (0,
                        v.jsx)("div", {
                            className: "p-1 text-xs text-gray-500",
                            children: (0,
                            v.jsx)(J.Z, (0,
                            S._)((0,
                            h._)({}, tu.chatHistoryOffDescription), {
                                values: {
                                    learnMore: (0,
                                    v.jsx)("a", {
                                        href: "https://help.openai.com/en/articles/7730893",
                                        target: "_blank",
                                        className: "underline",
                                        rel: "noreferrer",
                                        children: (0,
                                        v.jsx)(J.Z, (0,
                                        h._)({}, tu.learnMore))
                                    })
                                }
                            }))
                        }), (0,
                        v.jsxs)(ei.z, {
                            className: "mt-4 w-full",
                            onClick: I,
                            color: "primary",
                            size: "medium",
                            children: [(0,
                            v.jsx)(eo.ZP, {
                                icon: G.$IY
                            }), (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, tu.enableChatHistory))]
                        })]
                    }), (0,
                    v.jsx)("div", {
                        className: "h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"
                    })]
                })
            }, [x, I]);
            (0,
            y.useEffect)(function() {
                if (c.current) {
                    var e;
                    g((e = c.current).scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth)
                }
            }, [s]);
            var R = !(0,
            k.nR)() && !u.has("disable_upgrade_ui")
              , D = (0,
            k.KQ)();
            return (0,
            v.jsxs)(v.Fragment, {
                children: [(0,
                v.jsxs)("div", {
                    className: "scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",
                    children: [(0,
                    v.jsx)(eU.f, {
                        asChild: !0,
                        children: (0,
                        v.jsx)("h2", {
                            children: (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, tu.chatHistoryLabel))
                        })
                    }), (0,
                    v.jsxs)("nav", {
                        className: "flex h-full w-full flex-col p-2",
                        "aria-label": l.formatMessage(tu.chatHistoryLabel),
                        children: [(0,
                        v.jsxs)(tg, {
                            onClick: o,
                            className: "mb-1 flex-shrink-0",
                            children: [(0,
                            v.jsx)(eo.ZP, {
                                icon: x ? G.Bw1 : G.OvN
                            }), (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, x ? tu.clearChat : tu.newChat))]
                        }), Z, (0,
                        v.jsx)(tm, {
                            ref: c,
                            $offsetScrollbar: f,
                            $disableScroll: x,
                            children: s
                        }), (0,
                        v.jsxs)("div", {
                            className: "border-t border-white/20 pt-2",
                            children: [t && (0,
                            v.jsx)(td, {
                                onClick: n,
                                className: "rounded-md",
                                children: (0,
                                v.jsxs)("span", {
                                    className: "flex w-full flex-row justify-between",
                                    children: [(0,
                                    v.jsxs)("span", {
                                        className: "gold-new-button flex items-center gap-3",
                                        children: [(0,
                                        v.jsx)(eo.ZP, {
                                            icon: G.fzv
                                        }), D ? (0,
                                        v.jsx)(J.Z, (0,
                                        h._)({}, tu.renewPlus)) : (0,
                                        v.jsx)(J.Z, (0,
                                        h._)({}, tu.upgradeToPlus))]
                                    }), R && !D && (0,
                                    v.jsx)("span", {
                                        className: "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
                                        children: (0,
                                        v.jsx)(J.Z, (0,
                                        h._)({}, tu.newLabel))
                                    })]
                                })
                            }), (0,
                            v.jsx)(tv, {
                                showCustomerPortalMenuItem: a,
                                onClickCustomerPortal: r,
                                onClickSettings: N,
                                onDeleteHistory: i
                            })]
                        })]
                    })]
                }), M && (0,
                v.jsx)(n3, {
                    onClose: P,
                    onToggleHistoryDisabled: o,
                    onDeleteHistory: i
                }), u.has("system_message2") && (0,
                v.jsx)(nr, {})]
            })
        }
        var ty = function(e) {
            var n = e.onClickAccountPayment
              , t = e.showAccountPaymentMenuItem
              , r = e.onClickCustomerPortal
              , a = e.showCustomerPortalMenuItem
              , i = e.onDeleteHistory
              , o = e.onNewThread
              , s = e.children;
            return (0,
            v.jsx)(v.Fragment, {
                children: (0,
                v.jsx)("div", {
                    className: "flex h-full min-h-0 flex-col ",
                    children: (0,
                    v.jsx)(tb, {
                        onClickAccountPayment: n,
                        showAccountPaymentMenuItem: t,
                        onClickCustomerPortal: r,
                        showCustomerPortalMenuItem: a,
                        onDeleteHistory: i,
                        onNewThread: o,
                        children: s
                    })
                })
            })
        }
          , tj = function(e) {
            var n = e.onClickAccountPayment
              , t = e.showAccountPaymentMenuItem
              , r = e.onClickCustomerPortal
              , a = e.showCustomerPortalMenuItem
              , i = e.onDeleteHistory
              , o = e.onClose
              , s = e.sidebarOpen
              , l = e.onNewThread
              , u = e.children;
            return (0,
            v.jsx)(eB.u.Root, {
                show: s,
                as: y.Fragment,
                children: (0,
                v.jsxs)(eq.V, {
                    as: "div",
                    className: "relative",
                    onClose: o,
                    children: [(0,
                    v.jsx)(eB.u.Child, {
                        as: y.Fragment,
                        enter: "transition-opacity ease-linear duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition-opacity ease-linear duration-300",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: (0,
                        v.jsx)("div", {
                            className: "fixed inset-0 bg-gray-600 bg-opacity-75"
                        })
                    }), (0,
                    v.jsxs)("div", {
                        className: "fixed inset-0 flex",
                        children: [(0,
                        v.jsx)(eB.u.Child, {
                            as: y.Fragment,
                            enter: "transition ease-in-out duration-300 transform",
                            enterFrom: "-translate-x-full",
                            enterTo: "translate-x-0",
                            leave: "transition ease-in-out duration-300 transform",
                            leaveFrom: "translate-x-0",
                            leaveTo: "-translate-x-full",
                            children: (0,
                            v.jsxs)(eq.V.Panel, {
                                className: "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                                children: [(0,
                                v.jsx)(eB.u.Child, {
                                    as: y.Fragment,
                                    enter: "ease-in-out duration-300",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "ease-in-out duration-300",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0,
                                    v.jsx)("div", {
                                        className: "absolute right-0 top-0 -mr-12 pt-2",
                                        children: (0,
                                        v.jsxs)("button", {
                                            type: "button",
                                            className: "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                            onClick: o,
                                            children: [(0,
                                            v.jsx)("span", {
                                                className: "sr-only",
                                                children: (0,
                                                v.jsx)(J.Z, (0,
                                                h._)({}, tu.closeSidebar))
                                            }), (0,
                                            v.jsx)(eo.ZP, {
                                                icon: G.q5L,
                                                size: "medium",
                                                className: "text-white",
                                                "aria-hidden": "true"
                                            })]
                                        })
                                    })
                                }), (0,
                                v.jsx)(tb, {
                                    onClickAccountPayment: n,
                                    showAccountPaymentMenuItem: t,
                                    onClickCustomerPortal: r,
                                    showCustomerPortalMenuItem: a,
                                    onDeleteHistory: i,
                                    onNewThread: l,
                                    children: u
                                })]
                            })
                        }), (0,
                        v.jsx)("div", {
                            className: "w-14 flex-shrink-0"
                        })]
                    })]
                })
            })
        }
          , tC = function(e) {
            var n = e.onClickOpenSidebar
              , t = e.onNewThread
              , r = e.title
              , a = e.newChatName
              , i = (0,
            m._)((0,
            y.useState)(), 2)
              , o = i[0]
              , s = i[1]
              , l = (0,
            y.useContext)(E.QL)
              , u = l.historyDisabled
              , c = l.toggleHistoryDisabled;
            return (0,
            y.useEffect)(function() {
                a !== o && s(a)
            }, [a, o]),
            (0,
            v.jsxs)("div", {
                className: "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
                children: [(0,
                v.jsxs)("button", {
                    type: "button",
                    className: "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                    onClick: n,
                    children: [(0,
                    v.jsx)("span", {
                        className: "sr-only",
                        children: (0,
                        v.jsx)(J.Z, (0,
                        h._)({}, tu.openSidebar))
                    }), (0,
                    v.jsx)(eo.ZP, {
                        icon: G.cur,
                        "aria-hidden": "true",
                        size: "medium"
                    })]
                }), (0,
                v.jsx)("h1", {
                    className: "flex-1 text-center text-base font-normal",
                    children: u ? (0,
                    v.jsxs)("div", {
                        className: "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                        onClick: c,
                        children: [(0,
                        v.jsx)(G.$IY, {}), (0,
                        v.jsx)(J.Z, (0,
                        h._)({}, tu.enableChatHistory))]
                    }) : o && a ? (0,
                    v.jsx)(er, {
                        text: a
                    }) : r || (0,
                    v.jsx)(J.Z, (0,
                    h._)({}, tu.newChat))
                }), (0,
                v.jsx)("button", {
                    type: "button",
                    className: "px-3",
                    onClick: t,
                    children: (0,
                    v.jsx)(eo.ZP, {
                        icon: u ? G.Bw1 : G.OvN,
                        size: "medium"
                    })
                })]
            })
        };
        function tw(e) {
            var n = e.toggleNavigationSidebar
              , t = e.handleAccountPayment
              , r = e.handleClickCustomerPortal
              , a = e.handleResetThread
              , i = e.activeSidebar
              , o = e.isAccountPaid
              , s = e.children
              , l = (0,
            b.useRouter)()
              , u = (0,
            y.useRef)(null)
              , c = (0,
            X.w$)()
              , d = (0,
            eO.g)(function(e) {
                return e.flags.isUserInCanPayGroup
            })
              , f = em()
              , h = R(function(e) {
                return e.isNavigationCollapsed
            })
              , g = !0 === o
              , m = (0,
            y.useCallback)(function() {
                Y.ZP.deleteConversations().then(function() {
                    f()
                }),
                a(),
                l.asPath !== tx && l.replace({
                    pathname: tx
                })
            }, [a, f, l]);
            return c ? (0,
            v.jsx)(H.E.div, {
                className: "dark flex-shrink-0 overflow-x-hidden bg-gray-900",
                ref: u,
                initial: !1,
                animate: {
                    width: h ? 0 : "260px",
                    transition: {
                        duration: .2,
                        ease: "easeOut"
                    }
                },
                onAnimationStart: function() {
                    u.current && (u.current.style.visibility = "visible")
                },
                onAnimationComplete: function() {
                    u.current && h && (u.current.style.visibility = "hidden")
                },
                children: (0,
                v.jsx)("div", {
                    className: "h-full w-[260px]",
                    children: (0,
                    v.jsx)(ty, {
                        onClickAccountPayment: t,
                        showAccountPaymentMenuItem: !1 === o && d,
                        onClickCustomerPortal: r,
                        showCustomerPortalMenuItem: g,
                        onDeleteHistory: m,
                        onNewThread: a,
                        children: s
                    })
                })
            }) : (0,
            v.jsx)(tj, {
                onClose: n,
                sidebarOpen: "navigation" === i,
                onClickAccountPayment: t,
                showAccountPaymentMenuItem: !1 === o && d,
                onClickCustomerPortal: r,
                showCustomerPortalMenuItem: g,
                onDeleteHistory: m,
                onNewThread: a,
                children: s
            })
        }
        var tk = t(37541)
          , t_ = t(6128)
          , tM = t(5437)
          , tT = t.n(tM)
          , tN = t(11253)
          , tP = t.n(tN)
          , tI = t(75179)
          , tS = t(22208);
        function tZ(e) {
            var n = e.id
              , t = e.label;
            return (0,
            v.jsxs)("div", {
                className: "form-check",
                children: [(0,
                v.jsx)("input", {
                    className: "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
                    type: "checkbox",
                    value: "",
                    id: n
                }), (0,
                v.jsx)("label", {
                    className: "form-check-label inline-block text-gray-800 dark:text-gray-100",
                    htmlFor: n,
                    children: t
                })]
            })
        }
        var tR = t(54655)
          , tD = t(64664);
        function tE(e) {
            var n, t;
            if (e.author.role === nz.uU.Assistant) {
                if ("browser" === e.recipient)
                    return u.Browsing;
                if ("code" === e.content.content_type || "python" === e.recipient && "text" === e.content.content_type)
                    return u.Code;
                if (null === (n = e.recipient) || void 0 === n ? void 0 : n.includes("."))
                    return u.Plugin
            } else if (e.author.role === nz.uU.Tool) {
                if ("browser" === e.author.name)
                    return u.BrowseTool;
                if ("execution_output" === e.content.content_type)
                    return u.CodeExecutionOutput;
                if ((null === (t = e.author.name) || void 0 === t ? void 0 : t.includes(".")) || "plugin_service" === e.author.name)
                    return u.PluginTool
            }
            return "text" === e.content.content_type ? u.Text : u.Unknown
        }
        (a = u || (u = {}))[a.Text = 0] = "Text",
        a[a.Browsing = 1] = "Browsing",
        a[a.BrowseTool = 2] = "BrowseTool",
        a[a.Code = 3] = "Code",
        a[a.CodeExecutionOutput = 4] = "CodeExecutionOutput",
        a[a.Plugin = 5] = "Plugin",
        a[a.PluginTool = 6] = "PluginTool",
        a[a.Unknown = 7] = "Unknown";
        var tF = t(95182)
          , tL = t.n(tF);
        function tA() {
            var e = (0,
            p._)(["text-xs flex items-center justify-center gap-1"]);
            return tA = function() {
                return e
            }
            ,
            e
        }
        function tB() {
            var e = (0,
            p._)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]);
            return tB = function() {
                return e
            }
            ,
            e
        }
        function tq() {
            var e = (0,
            p._)(["flex-grow flex-shrink-0"]);
            return tq = function() {
                return e
            }
            ,
            e
        }
        function tU(e) {
            var n = e.currentPage
              , t = e.onChangeIndex
              , r = e.length
              , a = e.className
              , i = function(e) {
                t(tL()(n + e, 0, r - 1))
            };
            return (0,
            v.jsxs)(tO, {
                className: a,
                children: [(0,
                v.jsx)(tz, {
                    onClick: function() {
                        return i(-1)
                    },
                    disabled: 0 === n,
                    children: (0,
                    v.jsx)(eo.ZP, {
                        size: "xsmall",
                        icon: G.YFh
                    })
                }), (0,
                v.jsx)(tH, {
                    children: "".concat(n + 1, " / ").concat(r)
                }), (0,
                v.jsx)(tz, {
                    onClick: function() {
                        return i(1)
                    },
                    disabled: n === r - 1,
                    children: (0,
                    v.jsx)(eo.ZP, {
                        size: "xsmall",
                        icon: G.Tfp
                    })
                })]
            })
        }
        var tO = j.Z.div(tA())
          , tz = j.Z.button(tB())
          , tH = j.Z.span(tq())
          , tV = t(36716);
        function tW() {
            var e = (0,
            p._)(["flex flex-col items-start"]);
            return tW = function() {
                return e
            }
            ,
            e
        }
        function tG() {
            var e = (0,
            p._)(["flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ", ""]);
            return tG = function() {
                return e
            }
            ,
            e
        }
        function t$() {
            var e = (0,
            p._)(["max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800"]);
            return t$ = function() {
                return e
            }
            ,
            e
        }
        var tQ = y.memo(function(e) {
            var n = e.children
              , t = e.isComplete
              , r = e.expanderClosedLabel
              , a = e.expanderOpenLabel
              , i = e.resultsPreview
              , o = e.results
              , s = e.initialExpanded
              , l = e.onExpand
              , u = (0,
            m._)((0,
            y.useState)(void 0 !== s && s), 2)
              , c = u[0]
              , d = u[1]
              , f = (0,
            y.useCallback)(function() {
                d(function(e) {
                    return !e
                }),
                null == l || l()
            }, [l]);
            return (0,
            v.jsxs)(tJ, {
                children: [(0,
                v.jsxs)(tY, {
                    $complete: t,
                    children: [(0,
                    v.jsx)("div", {
                        children: n
                    }), !t && (0,
                    v.jsx)(es.Z, {
                        className: o ? "ml-1" : "ml-12"
                    }), o && (0,
                    v.jsxs)("div", {
                        className: "ml-12 flex items-center gap-2",
                        role: "button",
                        onClick: f,
                        children: [a && r && (0,
                        v.jsx)("div", {
                            className: "text-xs text-gray-600",
                            children: c ? a : r
                        }), !c && i, (0,
                        v.jsx)(eo.ZP, {
                            icon: c ? G.rH8 : G.bTu
                        })]
                    })]
                }), c && o]
            })
        })
          , tJ = j.Z.div(tW())
          , tY = j.Z.div(tG(), function(e) {
            return e.$complete && "bg-gray-100"
        })
          , tK = j.Z.div(t$())
          , tX = (0,
        $.vU)({
            startingBrowsing: {
                id: "browsingMessage.startingBrowsing",
                defaultMessage: "Browsing the web...",
                description: "Status message when browsing is starting"
            },
            finishedBrowsing: {
                id: "browsingMessage.finishedBrowsing",
                defaultMessage: "Finished browsing",
                description: "Status message when browsing is finished"
            },
            thinking: {
                id: "browsingMessage.thinking",
                defaultMessage: "Thinking...",
                description: "Status message when the next browsing command is being generated"
            },
            searchInProgress: {
                id: "browsingMessage.command.search.inProgress",
                defaultMessage: "Searching: <bold>“{searchQuery}”</bold>",
                description: "Browsing command to search the web is in progress"
            },
            searchFinished: {
                id: "browsingMessage.command.search.finished",
                defaultMessage: "Searched: <bold>“{searchQuery}”</bold>",
                description: "Browsing command to search the web finished"
            },
            searchError: {
                id: "browsingMessage.command.search.error",
                defaultMessage: "Search failed",
                description: "Browsing command to search the web failed"
            },
            clickInProgress: {
                id: "browsingMessage.command.click.inProgress",
                defaultMessage: "Clicking on a link...",
                description: "Browsing command to click on a link is in progress"
            },
            clickFinished: {
                id: "browsingMessage.command.click.finished",
                defaultMessage: "Clicked on a link",
                description: "Browsing command to click on a link finished"
            },
            clickFinishedWithLink: {
                id: "browsingMessage.command.click.finishedWithLink",
                defaultMessage: "Clicked on:",
                description: "Browsing command to click on a link finished. The link that was clicked will be displayed after the :"
            },
            clickError: {
                id: "browsingMessage.command.click.error",
                defaultMessage: "Click failed",
                description: "Browsing command to click on a link failed"
            },
            quote: {
                id: "browsingMessage.command.quote",
                defaultMessage: "Reading content",
                description: "Browsing command to read a specific quote from a page"
            },
            quoteError: {
                id: "browsingMessage.command.quote.error",
                defaultMessage: "Reading content failed",
                description: "Browsing command to read a specific quote from a page failed"
            },
            back: {
                id: "browsingMessage.command.back",
                defaultMessage: "Going back to last page",
                description: "Browsing command to go back to the last page"
            },
            backError: {
                id: "browsingMessage.command.back.error",
                defaultMessage: "Going back failed",
                description: "Browsing command to go back to the last page failed"
            },
            scroll: {
                id: "browsingMessage.command.scroll",
                defaultMessage: "Scrolling down",
                description: "Browsing command to scroll down on a page"
            },
            scrollError: {
                id: "browsingMessage.command.scroll.error",
                defaultMessage: "Scroll failed",
                description: "Browsing command to scroll down on a page failed"
            }
        })
          , t0 = y.memo(function(e) {
            var n, t = e.messages, r = e.isComplete, a = (0,
            k.hz)(), i = t.map(function(e) {
                return e.message
            }), o = i.map(function(e, n) {
                if (e.author.role !== nz.uU.Tool || n > 0 && rn(e) && rn(i[n - 1]))
                    return null;
                var t = e.metadata;
                if (!t)
                    return null;
                var r = t.command
                  , a = t.status;
                return r ? {
                    type: r,
                    status: a,
                    didError: "system_error" === e.content.content_type,
                    message: e
                } : null
            }).filter(Boolean), s = o.map(function(e, n) {
                return (0,
                v.jsx)(t1, {
                    command: e
                }, n)
            });
            r ? (s.push((0,
            v.jsx)(t9, {}, "finished")),
            n = (0,
            v.jsx)(t9, {
                compact: !0
            })) : 0 === s.length ? (s.push((0,
            v.jsx)(t6, {}, "waiting")),
            n = (0,
            v.jsx)(t6, {
                compact: !0
            })) : "finished" === o[o.length - 1].status && s.push((0,
            v.jsx)(re, {
                icon: G.Wqx,
                children: (0,
                v.jsx)(J.Z, (0,
                h._)({}, tX.thinking))
            }, "thinking")),
            n || (n = (0,
            v.jsx)(t1, {
                command: o[o.length - 1],
                compact: !0
            }));
            var l = a.has(K.UG) && !r ? function(e) {
                var n, t = e.reverse().find(function(e) {
                    return e.author.role === nz.uU.Assistant
                });
                if (!t)
                    return null;
                for (var r = nv.Cv.getTextFromMessage(t), a = /^#\s*(.*)/gm, i = []; null !== (n = a.exec(r)); )
                    i.push(n[1]);
                return i.length > 0 ? i.join("\n") : null
            }(i) : null;
            return (0,
            v.jsxs)(tQ, {
                isComplete: r,
                results: (0,
                v.jsx)(tK, {
                    className: "text-xs",
                    children: s
                }),
                children: [null != l && (0,
                v.jsx)("div", {
                    className: "mb-2 whitespace-pre-wrap font-medium",
                    children: l
                }), n]
            })
        });
        function t1(e) {
            var n = e.command
              , t = e.compact;
            if (n.didError)
                return (0,
                v.jsx)(t8, {
                    commandType: n.type
                });
            switch (n.type) {
            case "search":
                var r, a, i = null === (r = n.message.metadata) || void 0 === r ? void 0 : null === (a = r.args) || void 0 === a ? void 0 : a[0];
                if (!i)
                    return null;
                return (0,
                v.jsx)(t2, {
                    searchQuery: i,
                    isComplete: "finished" === n.status,
                    compact: t
                });
            case "click":
            case "open_url":
                var o, s, l = null === (o = n.message.metadata) || void 0 === o ? void 0 : null === (s = o._cite_metadata) || void 0 === s ? void 0 : s.metadata_list[0];
                return (0,
                v.jsx)(t3, {
                    pageInfo: l,
                    compact: t
                });
            case "quote":
            case "quote_full":
                return (0,
                v.jsx)(t5, {
                    compact: t
                });
            case "back":
                return (0,
                v.jsx)(t4, {
                    compact: t
                });
            case "scroll":
                return (0,
                v.jsx)(t7, {
                    compact: t
                });
            default:
                return null
            }
        }
        function t2(e) {
            var n = e.searchQuery
              , t = e.isComplete
              , r = e.compact;
            return (0,
            v.jsx)(re, {
                icon: G.jRj,
                compact: r,
                children: t ? (0,
                v.jsx)(J.Z, (0,
                S._)((0,
                h._)({}, tX.searchFinished), {
                    values: {
                        bold: function(e) {
                            return (0,
                            v.jsx)("span", {
                                className: "font-medium",
                                children: e
                            })
                        },
                        searchQuery: n
                    }
                })) : (0,
                v.jsx)(J.Z, (0,
                S._)((0,
                h._)({}, tX.searchInProgress), {
                    values: {
                        bold: function(e) {
                            return (0,
                            v.jsx)("span", {
                                className: "font-medium",
                                children: e
                            })
                        },
                        searchQuery: n
                    }
                }))
            })
        }
        function t3(e) {
            var n = e.pageInfo
              , t = e.compact;
            return (0,
            v.jsx)(re, {
                icon: G.PS6,
                compact: t,
                children: n ? !0 === t ? (0,
                v.jsx)(J.Z, (0,
                h._)({}, tX.clickFinished)) : (0,
                v.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0,
                    v.jsx)(J.Z, (0,
                    h._)({}, tX.clickFinishedWithLink)), (0,
                    v.jsx)("div", {
                        className: "rounded border border-black/10 bg-white px-2 py-1",
                        children: (0,
                        v.jsx)(tV.Op, {
                            pageInfo: n
                        })
                    })]
                }) : (0,
                v.jsx)(J.Z, (0,
                h._)({}, tX.clickInProgress))
            })
        }
        function t5(e) {
            var n = e.compact;
            return (0,
            v.jsx)(re, {
                icon: G.SnF,
                compact: n,
                children: (0,
                v.jsx)(J.Z, (0,
                h._)({}, tX.quote))
            })
        }
        function t4(e) {
            var n = e.compact;
            return (0,
            v.jsx)(re, {
                icon: G.cww,
                compact: n,
                children: (0,
                v.jsx)(J.Z, (0,
                h._)({}, tX.back))
            })
        }
        function t7(e) {
            var n = e.compact;
            return (0,
            v.jsx)(re, {
                icon: G.nlg,
                compact: n,
                children: (0,
                v.jsx)(J.Z, (0,
                h._)({}, tX.scroll))
            })
        }
        function t8(e) {
            var n, t = e.commandType, r = e.compact;
            switch (t) {
            case "search":
                n = tX.searchError;
                break;
            case "click":
            case "open_url":
                n = tX.clickError;
                break;
            case "quote":
            case "quote_full":
                n = tX.quoteError;
                break;
            case "back":
                n = tX.backError;
                break;
            case "scroll":
                n = tX.scrollError;
                break;
            default:
                return null
            }
            return (0,
            v.jsx)(re, {
                icon: G.bcx,
                compact: r,
                children: (0,
                v.jsx)(J.Z, (0,
                h._)({}, n))
            })
        }
        function t6(e) {
            var n = e.compact;
            return (0,
            v.jsx)(re, {
                icon: G.jRj,
                compact: n,
                children: (0,
                v.jsx)(J.Z, (0,
                h._)({}, tX.startingBrowsing))
            })
        }
        function t9(e) {
            var n = e.compact;
            return (0,
            v.jsx)(re, {
                icon: G._rq,
                compact: n,
                children: (0,
                v.jsx)(J.Z, (0,
                h._)({}, tX.finishedBrowsing))
            })
        }
        function re(e) {
            var n = e.children
              , t = e.icon
              , r = e.compact;
            return (0,
            v.jsxs)("div", {
                className: (0,
                F.Z)("flex items-center gap-2", !0 !== r && "min-h-[24px]"),
                children: [(0,
                v.jsx)(eo.ZP, {
                    icon: t,
                    className: "shrink-0"
                }), (0,
                v.jsx)("div", {
                    children: n
                })]
            })
        }
        function rn(e) {
            var n, t;
            return (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) === "quote" || (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) === "quote_full"
        }
        var rt = y.memo(function(e) {
            var n, t = e.message, r = e.isCollapsed, a = null === (n = t.message.metadata) || void 0 === n ? void 0 : n.aggregate_result;
            if (!a)
                return console.error("Corrupt code execution result message"),
                null;
            var i = a.messages.filter(ro)
              , o = r && i.length > 0
              , s = r && null != a.final_expression_output
              , l = r && null != a.in_kernel_exception
              , u = !r && a.messages.filter(ri).length > 0;
            return (0,
            v.jsxs)(v.Fragment, {
                children: [o && (0,
                v.jsx)(rr, {
                    label: "STDOUT/STDERR",
                    output: i.map(function(e, n) {
                        return (0,
                        v.jsx)("span", {
                            className: "stderr" === e.stream_name ? "text-red-500" : "",
                            children: e.text
                        }, "".concat(n))
                    })
                }), s && (0,
                v.jsx)(rr, {
                    label: "RESULT",
                    output: a.final_expression_output
                }), l && (0,
                v.jsx)("div", {
                    className: "overflow-auto rounded border-t border-gray-500 bg-black text-white",
                    children: (0,
                    v.jsx)("div", {
                        className: "border-l-4 border-red-500 p-2 text-xs",
                        children: (0,
                        v.jsx)("div", {
                            className: "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",
                            children: (0,
                            v.jsx)("pre", {
                                className: "shrink-0",
                                children: a.in_kernel_exception.traceback.join("")
                            })
                        })
                    })
                }), u && a.messages.filter(ri).map(function(e, n) {
                    var t = null != e.image_payload ? (0,
                    v.jsx)("img", {
                        src: "data:image/png;base64,".concat(e.image_payload)
                    }) : null != e.image_url ? (0,
                    v.jsx)(ra, {
                        downloadUrl: e.image_url
                    }) : null;
                    return t ? (0,
                    v.jsx)("div", {
                        children: t
                    }, n) : null
                })]
            })
        });
        function rr(e) {
            var n = e.label
              , t = e.output;
            return (0,
            v.jsxs)("div", {
                className: "rounded-md bg-black p-4 text-xs",
                children: [(0,
                v.jsx)("div", {
                    className: "mb-1 text-gray-400",
                    children: n
                }), (0,
                v.jsx)("div", {
                    className: "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white",
                    children: (0,
                    v.jsx)("pre", {
                        className: "shrink-0",
                        children: t
                    })
                })]
            })
        }
        function ra(e) {
            var n = e.downloadUrl
              , t = (0,
            m._)((0,
            y.useState)(""), 2)
              , r = t[0]
              , a = t[1];
            return (0,
            e8.a)(["fsDownloadUrl", n], (0,
            nl._)(function() {
                return (0,
                nu.Jh)(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, Y.ZP.downloadFileService(n)];
                    case 1:
                        return [2, e.sent()]
                    }
                })
            }), {
                onSuccess: function(e) {
                    e.url && a(e.url)
                }
            }),
            (0,
            v.jsxs)(v.Fragment, {
                children: [" ", r && (0,
                v.jsx)("img", {
                    src: r
                }), " "]
            })
        }
        function ri(e) {
            return "image" === e.message_type
        }
        function ro(e) {
            return "stream" === e.message_type
        }
        var rs = t(28869);
        function rl(e) {
            return nv.Cv.getIsMessageFinished(e.message) && !nv.Cv.getIsStopFromMessage(e.message)
        }
        var ru = {}
          , rc = {};
        function rd(e) {
            var n, t = e.message, r = e.outputMessage, a = (0,
            no.F)().theme, i = (0,
            C.WS)(), o = null === (n = null == r ? void 0 : r.message.metadata) || void 0 === n ? void 0 : n.aggregate_result, s = (null == o ? void 0 : o.status) !== void 0 && (null == o ? void 0 : o.status) !== "running" || rl(t);
            (0,
            y.useEffect)(function() {
                ru[t.message.id] || (i(w.s6.renderTool2Message, {
                    id: t.message.id,
                    finishedExecuting: s
                }),
                ru[t.message.id] = !0)
            }, [i, t, s]);
            var l = (0,
            y.useCallback)(function() {
                rc[t.message.id] || (i(w.s6.expandTool2Message, {
                    id: t.message.id,
                    finishedExecuting: s
                }),
                rc[t.message.id] = !0)
            }, [i, t, s])
              , u = (0,
            v.jsxs)(v.Fragment, {
                children: [(0,
                v.jsx)("div", {
                    className: "mt-3 self-stretch",
                    children: (0,
                    v.jsx)(rs.Z, {
                        className: (0,
                        F.Z)("markdown prose w-full break-words dark:prose-invert", "dark" === a ? "dark" : "light"),
                        children: function(e) {
                            var n = function(e, n) {
                                return "```".concat(n, "\n").concat(e, "\n```")
                            };
                            if ("code" === e.message.content.content_type)
                                return n(e.message.content.text, "python");
                            if ("python" === e.message.recipient) {
                                if ("text" !== e.message.content.content_type)
                                    throw Error("Unexpected content type for code message");
                                var t = e.message.content.parts;
                                if (1 !== t.length || "string" != typeof t[0])
                                    throw Error("Unexpected parts for code message");
                                return n(t[0], "python")
                            }
                            throw Error("Unexpected code message format")
                        }(t)
                    })
                }), r && (0,
                v.jsx)("div", {
                    className: "self-stretch",
                    children: (0,
                    v.jsx)(rt, {
                        message: r,
                        isCollapsed: !0
                    })
                })]
            });
            return (0,
            v.jsx)(tQ, {
                expanderClosedLabel: "Show work",
                expanderOpenLabel: "Hide work",
                isComplete: s,
                results: u,
                onExpand: l,
                children: s ? "Finished working" : "Working..."
            })
        }
        var rf = t(99585);
        function rh(e) {
            var n = e.messages
              , t = e.isCompletionInProgress
              , r = e.isCompletion
              , a = e.onRequestMoreCompletions
              , i = n.reduce(function(e, n) {
                return n.err ? e : e + nv.Cv.getTextFromMessage(n.message)
            }, "");
            return (0,
            v.jsx)(rf.Cf, {
                text: i,
                format: !0,
                isCompletion: r,
                isCompletionInProgress: t,
                id: "",
                onRequestMoreCompletions: a
            })
        }
        var rg = t(2368)
          , rm = t(44878);
        function rp() {
            var e = (0,
            p._)(["flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800"]);
            return rp = function() {
                return e
            }
            ,
            e
        }
        var rv = y.memo(function(e) {
            var n, t = e.messages, r = (0,
            m._)(t, 2), a = r[0], i = r[1], o = (0,
            rm.Z)(), s = null === (n = a.message.recipient) || void 0 === n ? void 0 : n.split(".")[0], l = o.find(function(e) {
                return e.namespace === s
            }), u = null == l ? void 0 : l.manifest.name_for_human;
            if (!u)
                return (0,
                v.jsx)("div", {
                    className: "result-streaming prose dark:prose-invert",
                    children: (0,
                    v.jsx)("span", {
                        children: "​"
                    })
                });
            var c = rl(a)
              , d = null != i ? (0,
            v.jsxs)("div", {
                children: ["Used ", (0,
                v.jsx)("b", {
                    children: u
                })]
            }) : c ? (0,
            v.jsxs)("div", {
                children: ["Tried to use ", (0,
                v.jsx)("b", {
                    children: u
                })]
            }) : (0,
            v.jsxs)("div", {
                children: ["Using ", (0,
                v.jsx)("b", {
                    children: u
                }), "..."]
            })
              , f = nW(l) ? (0,
            v.jsx)(rb, {}) : "approved" !== l.status ? (0,
            v.jsx)(rx, {}) : void 0;
            return (0,
            v.jsx)(tQ, {
                isComplete: null != i || c,
                results: (0,
                v.jsx)(rj, {
                    pluginName: u,
                    pluginMessage: a,
                    toolMessage: i
                }),
                children: (0,
                v.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [d, f]
                })
            })
        });
        function rx() {
            return (0,
            v.jsxs)(ry, {
                children: [(0,
                v.jsx)(eo.ZP, {
                    icon: G.OH,
                    className: "h-3 w-3",
                    strokeWidth: 2.5
                }), (0,
                v.jsx)("div", {
                    children: "Unverified"
                })]
            })
        }
        function rb() {
            return (0,
            v.jsxs)(ry, {
                children: [(0,
                v.jsx)(eo.ZP, {
                    icon: G.V7f,
                    className: "h-3 w-3"
                }), (0,
                v.jsx)("div", {
                    children: "Localhost"
                })]
            })
        }
        var ry = j.Z.div(rp());
        function rj(e) {
            var n = e.pluginName
              , t = e.pluginMessage
              , r = e.toolMessage
              , a = nv.Cv.getTextFromMessage(t.message)
              , i = r ? nv.Cv.getTextFromMessage(r.message) : null;
            try {
                a = JSON.stringify(JSON.parse(a), null, 2),
                i && (i = JSON.stringify(JSON.parse(i), null, 2))
            } catch (e) {}
            var o = (null == r ? void 0 : r.message.author.name) === "plugin_service";
            return (0,
            v.jsxs)("div", {
                className: "my-3 flex max-w-full flex-col gap-3",
                children: [(0,
                v.jsx)(rC, {
                    title: "Request to ".concat(n),
                    infoTooltip: t.message.recipient,
                    children: a
                }), i && (0,
                v.jsx)(rC, {
                    title: o ? "Error" : "Response from ".concat(n),
                    infoTooltip: t.message.recipient,
                    children: (0,
                    v.jsx)("span", {
                        className: (0,
                        F.Z)(o && "text-red-500"),
                        children: i
                    })
                })]
            })
        }
        function rC(e) {
            var n = e.title
              , t = e.infoTooltip
              , r = e.children;
            return (0,
            v.jsx)(rg.$, {
                title: (0,
                v.jsx)("span", {
                    className: "uppercase",
                    children: n
                }),
                headerDecoration: void 0 !== t ? (0,
                v.jsx)(ny.u, {
                    label: t,
                    children: (0,
                    v.jsx)(eo.ZP, {
                        icon: G.H33,
                        className: "text-white/50"
                    })
                }) : void 0,
                shouldWrapCode: !0,
                className: "w-full text-xs text-white/80",
                children: r
            })
        }
        var rw = t(44541);
        function rk() {
            var e = (0,
            p._)([""]);
            return rk = function() {
                return e
            }
            ,
            e
        }
        function r_() {
            var e = (0,
            p._)(["flex flex-grow flex-col gap-3"]);
            return r_ = function() {
                return e
            }
            ,
            e
        }
        function rM() {
            var e = (0,
            p._)(["flex p-4 gap-4 ", ""]);
            return rM = function() {
                return e
            }
            ,
            e
        }
        function rT() {
            var e = (0,
            p._)(["flex-shrink-0 flex flex-col relative items-end"]);
            return rT = function() {
                return e
            }
            ,
            e
        }
        function rN() {
            var e = (0,
            p._)(["p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2"]);
            return rN = function() {
                return e
            }
            ,
            e
        }
        function rP() {
            var e = (0,
            p._)(["p-1 ", ""]);
            return rP = function() {
                return e
            }
            ,
            e
        }
        function rI() {
            var e = (0,
            p._)(["text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n", ""]);
            return rI = function() {
                return e
            }
            ,
            e
        }
        function rS() {
            var e = (0,
            p._)(["text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs"]);
            return rS = function() {
                return e
            }
            ,
            e
        }
        function rZ() {
            var e = (0,
            p._)(["flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"]);
            return rZ = function() {
                return e
            }
            ,
            e
        }
        var rR = ["#19c37d", "#ab68ff"];
        (i = c || (c = {}))[i.Text = 0] = "Text",
        i[i.MultiText = 1] = "MultiText",
        i[i.Browsing = 2] = "Browsing",
        i[i.Code = 3] = "Code",
        i[i.CodeExecutionOutput = 4] = "CodeExecutionOutput",
        i[i.Plugin = 5] = "Plugin";
        var rD = y.memo(function(e) {
            var n, t, r, a = e.turnIndex, i = e.turnLeafId, o = e.isFinalTurn, s = e.clientThreadId, l = e.onChangeItemInView, d = e.onChangeRating, f = e.onRequestMoreCompletions, g = e.onDeleteNode, p = e.onRequestCompletion, x = e.onUpdateNode, b = e.onSandboxLinkClick, j = e.onHandleChangeVariantFeedbackInlineComparisonRating, M = e.activeRequests, T = e.showInlineEmbeddedDisplay, N = void 0 !== T && T, P = e.modelBackend, I = e.isStaticSharedThread, Z = void 0 !== I && I, R = e.onTurnEnteredViewport, D = e.initiallyHighlightedMessageId, L = e.avatarColor, A = (0,
            _.GD)(s, a, i), B = A.role, q = A.messages, U = A.variantIds, O = ez.G.theme, z = O.color, H = O.icon, V = O.activeColor, W = (0,
            eu.kP)().session, $ = (0,
            X.x_)(), Q = (0,
            C.WS)(), J = (0,
            m._)((0,
            y.useState)(!1), 2), Y = J[0], ee = J[1], en = (0,
            y.useMemo)(function() {
                return U.findIndex(function(e) {
                    return e === q[0].nodeId
                })
            }, [U, q]), et = B !== nz.uU.User, er = (0,
            y.useContext)(E.QL).historyDisabled, ea = (0,
            k.hz)().has(K.FZ), ei = (0,
            ns.Fl)(), es = ei.isBrowsingAvailable, el = ei.isPluginsAvailable, ec = ei.isCodeInterpreterAvailable, ed = es || el || ec, ef = (0,
            y.useRef)(null);
            (0,
            y.useEffect)(function() {
                var e = ef.current;
                if (R && e) {
                    var n = new IntersectionObserver(function(e, n) {
                        R(A, a, e[0].isIntersecting)
                    }
                    ,{
                        threshold: .51
                    });
                    return n.observe(e),
                    function() {
                        n.unobserve(e)
                    }
                }
            }, [ef, R, A, a]),
            (0,
            y.useEffect)(function() {
                var e;
                null != D && A.messages.map(function(e) {
                    return e.message.id
                }).includes(D) && (null === (e = ef.current) || void 0 === e || e.scrollIntoView({
                    behavior: "auto"
                }))
            }, [D]);
            var eh = q[q.length - 1]
              , eg = (0,
            m._)((0,
            y.useState)(eh.rating), 2)
              , em = eg[0]
              , ep = eg[1]
              , ev = (0,
            k.hz)()
              , ex = (0,
            rm.Z)()
              , eb = (0,
            y.useMemo)(function() {
                return et && (null == q ? void 0 : q[0]) && nv.Cv.getModelFromMessage(null == q ? void 0 : q[0].message) || P
            }, [et, q, P])
              , ey = (0,
            y.useCallback)(function() {
                1 === q.length && (Q(B === nz.uU.User ? w.s6.editPrompt : w.s6.editCompletion, {
                    id: q[0].message.id,
                    threadId: _.tQ.getServerThreadId(s)
                }),
                ee(!0))
            }, [q, Q, B, s])
              , ej = (0,
            y.useCallback)(function() {
                ee(!1)
            }, [])
              , eC = (0,
            y.useCallback)(function() {
                var e = q.reduce(function(e, n) {
                    return n.err || n.message.author.role !== nz.uU.Assistant || "all" !== n.message.recipient ? e : e + (e ? "\n\n" : "") + nv.Cv.getTextFromMessage(n.message)
                }, "");
                navigator.clipboard.writeText(e),
                Q(w.s6.copyToClipboard, {
                    threadId: _.tQ.getServerThreadId(s),
                    id: q[0].message.id,
                    eventSource: "mouse",
                    model: eb
                }),
                tD.m.logEvent("chatgpt_copy_to_clipboard")
            }, [eb, Q, q, s])
              , ew = (0,
            y.useCallback)(function(e) {
                d(eh.nodeId, eh.message.id, e),
                ep(e)
            }, [eh, d])
              , ek = (0,
            m._)((0,
            y.useState)(eh.inlineComparisonRating), 2)
              , e_ = ek[0]
              , eM = ek[1];
            (0,
            y.useEffect)(function() {
                ep(function(e) {
                    return null != e ? e : eh.rating
                }),
                eM(function(e) {
                    return null != e ? e : eh.inlineComparisonRating
                })
            }, [eh]);
            var eT = (0,
            y.useMemo)(function() {
                return nv.Cv.getRequestIdFromConversationTurn(A)
            }, [A])
              , eN = (0,
            y.useMemo)(function() {
                return M.has(eT)
            }, [M, eT])
              , eP = (0,
            y.useMemo)(function() {
                var e = !0
                  , n = !1
                  , t = void 0;
                try {
                    for (var r, a = q[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
                        var i = r.value;
                        if (i.errType)
                            return i.errType
                    }
                } catch (e) {
                    n = !0,
                    t = e
                } finally {
                    try {
                        e || null == a.return || a.return()
                    } finally {
                        if (n)
                            throw t
                    }
                }
                return !1
            }, [q])
              , eI = (0,
            y.useMemo)(function() {
                if (et) {
                    var e, n, t = _.tQ.getTree(s), r = null === (e = t.getParentPromptNode(q[0].nodeId)) || void 0 === e ? void 0 : e.parentId, a = r && (null === (n = t.getNode(r).message.metadata) || void 0 === n ? void 0 : n.model_slug);
                    if (eb && a && eb !== a)
                        return rw.n2.has(a) ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model." : "The previous model used in this conversation is unavailable. We've switched you to the latest default model."
                }
                return null
            }, [eb, et, q, s])
              , eS = (0,
            y.useMemo)(function() {
                if (!ed)
                    return {
                        avatarIcon: H,
                        avatarColor: z
                    };
                if (eN && q.length > 0) {
                    var e = q[q.length - 1]
                      , n = tE(e.message);
                    switch (n) {
                    case u.Text:
                        if (nv.Cv.getTextFromMessage(e.message).length > 0 || q.length > 1)
                            return {
                                avatarIcon: "text",
                                avatarColor: V
                            };
                        break;
                    case u.Browsing:
                    case u.BrowseTool:
                        return {
                            avatarIcon: "browsing",
                            avatarColor: V
                        };
                    case u.Code:
                    case u.CodeExecutionOutput:
                        return {
                            avatarIcon: "code",
                            avatarColor: V
                        };
                    case u.Plugin:
                    case u.PluginTool:
                        var t = n === u.Plugin ? e.message.recipient : e.message.author.name
                          , r = null == t ? void 0 : t.split(".")[0]
                          , a = ex.find(function(e) {
                            return e.namespace === r
                        });
                        if (a)
                            return {
                                avatarPlugin: a
                            };
                        return {
                            avatarIcon: "plugin",
                            avatarColor: V
                        }
                    }
                }
                return {
                    avatarIcon: H,
                    avatarColor: z
                }
            }, [ed, eN, q, H, z, V, ex])
              , eZ = eS.avatarIcon
              , eR = eS.avatarColor
              , eD = eS.avatarPlugin
              , eE = (0,
            y.useCallback)(function(e, n) {
                _.tQ.updateTree(s, function(t) {
                    var r = t.getParentId(e);
                    t.addNode(n, "", r, nz.Jq.Prompt)
                })
            }, [s])
              , eF = (0,
            y.useMemo)(function() {
                var e = [];
                return q.forEach(function(n, t) {
                    var r = tE(n.message)
                      , a = null == q ? void 0 : q[t - 1]
                      , i = a && (nv.Cv.getIsIncompleteFromMessage(a.message) || nv.Cv.getIsContinuedFromMessage(a.message))
                      , o = r === u.Text && nv.Cv.getTextFromMessage(n.message);
                    if (i && null != o) {
                        var s = e.pop();
                        (null == s ? void 0 : s.type) === c.MultiText ? (s.messages.push(n),
                        e.push(s)) : (null == s ? void 0 : s.type) === c.Text && e.push({
                            type: c.MultiText,
                            messages: [s.message, n]
                        })
                    } else if (r === u.Browsing || r === u.BrowseTool) {
                        var l = e[e.length - 1];
                        (null == l ? void 0 : l.type) === c.Browsing ? l.messages.push(n) : e.push({
                            type: c.Browsing,
                            messages: [n]
                        })
                    } else if (r === u.Plugin || r === u.PluginTool) {
                        var d = e[e.length - 1];
                        r === u.PluginTool && (null == d ? void 0 : d.type) === c.Plugin ? d.messages.push(n) : e.push({
                            type: c.Plugin,
                            messages: [n]
                        })
                    } else {
                        var f = c.Text;
                        r === u.Code ? f = c.Code : r === u.CodeExecutionOutput && (f = c.CodeExecutionOutput),
                        e.push({
                            type: f,
                            message: n
                        })
                    }
                }),
                e.map(function(n, t) {
                    var r, a, i = t === e.length - 1;
                    switch (n.type) {
                    case c.Text:
                        return (0,
                        v.jsx)(rf.ZP, {
                            className: "min-h-[20px]",
                            message: n.message,
                            isEditing: Y,
                            format: et,
                            isCompletionInProgress: i && eN,
                            onCreateEditNode: eE,
                            clientThreadId: s,
                            onUpdateNode: x,
                            onDeleteNode: g,
                            onChangeItemInView: l,
                            onRequestCompletion: p,
                            onExitEdit: ej,
                            disabled: 0 !== M.size,
                            onSandboxLinkClick: (r = (0,
                            nl._)(function(e) {
                                return (0,
                                nu.Jh)(this, function(t) {
                                    return [2, b(n.message.nodeId, e)]
                                })
                            }),
                            function(e) {
                                return r.apply(this, arguments)
                            }
                            ),
                            isCompletion: et,
                            onRequestMoreCompletions: f,
                            isResponseToPluginMessage: (null === (a = e[t - 1]) || void 0 === a ? void 0 : a.type) === c.Plugin
                        }, n.message.nodeId);
                    case c.MultiText:
                        return (0,
                        v.jsx)(rh, {
                            messages: n.messages,
                            isCompletionInProgress: i && eN,
                            isCompletion: et,
                            onRequestMoreCompletions: f
                        }, t);
                    case c.Browsing:
                        var o = n.messages[n.messages.length - 1];
                        return (0,
                        v.jsx)(t0, {
                            messages: n.messages,
                            isComplete: !i || rl(o)
                        }, n.messages[0].nodeId);
                    case c.Code:
                        var u = e[t + 1]
                          , d = u && u.type === c.CodeExecutionOutput ? u.message : void 0;
                        return (0,
                        v.jsx)(rd, {
                            message: n.message,
                            outputMessage: d
                        }, n.message.nodeId);
                    case c.CodeExecutionOutput:
                        return (0,
                        v.jsx)(rt, {
                            message: n.message,
                            isCollapsed: !1
                        }, n.message.nodeId);
                    case c.Plugin:
                        return (0,
                        v.jsx)(rv, {
                            messages: n.messages
                        }, n.messages[0].nodeId);
                    default:
                        return null
                    }
                })
            }, [q, Y, et, eN, eE, s, x, g, l, p, ej, M.size, b, f])
              , eL = (0,
            _.r7)(s)
              , eA = !Z && !eL && $ && et && !N && !Y && 1 === en && o && !e_ && !em && 2 === U.length && Date.now() - (null !== (t = eh.message.create_time) && void 0 !== t ? t : 0) * 1e3 < 6e5 && !eN && ev.has(K.st)
              , eB = (0,
            y.useRef)(Date.now())
              , eq = (0,
            y.useRef)((null !== (r = eh.message.create_time) && void 0 !== r ? r : Date.now()) * 1e3)
              , eU = (0,
            y.useRef)(Date.now());
            (0,
            y.useEffect)(function() {
                eN || (eU.current = Date.now())
            }, [eN]);
            var eO = (0,
            y.useCallback)(function(e) {
                if (eA) {
                    var n, t, r = _.tQ.getTree(s), a = U[0] || "", i = (null == r ? void 0 : r.getConversationTurns(a)) || [], o = i[i.length - 1], l = (null == o ? void 0 : o.messages) || [], u = l[l.length - 1], c = (null == u ? void 0 : null === (n = u.message) || void 0 === n ? void 0 : n.id) || "", d = U[1] || "", f = (null == r ? void 0 : r.getConversationTurns(d)) || [], g = f[f.length - 1], m = (null == g ? void 0 : g.messages) || [], p = m[m.length - 1];
                    j(c, (null == p ? void 0 : null === (t = p.message) || void 0 === t ? void 0 : t.id) || "", e, eB.current, eB.current, eq.current, eU.current),
                    _.tQ.updateTree(s, function(n) {
                        n.updateNode(eh.nodeId, {
                            metadata: {
                                $set: (0,
                                S._)((0,
                                h._)({}, n.getMetadata(eh.nodeId)), {
                                    inlineComparisonRating: e
                                })
                            }
                        })
                    }),
                    eM(e),
                    _.tQ.updateTree(s, function(e) {
                        e.updateNode(u.nodeId, {
                            metadata: {
                                $set: (0,
                                S._)((0,
                                h._)({}, e.getMetadata(u.nodeId)), {
                                    inlineComparisonRating: "baseline"
                                })
                            }
                        })
                    })
                }
            }, [eA, eh.nodeId, j, s, U])
              , eH = (0,
            y.useCallback)(function() {
                _.tQ.updateTree(s, function(e) {
                    e.updateNode(eh.nodeId, {
                        metadata: {
                            $set: (0,
                            S._)((0,
                            h._)({}, e.getMetadata(eh.nodeId)), {
                                inlineComparisonRating: "skip"
                            })
                        }
                    })
                }),
                eM("skip")
            }, [eh.nodeId, s])
              , eV = et && !N && !Z && !eL
              , eW = !N && !Y
              , eG = !et && !N && !Z && 1 === q.length && !Y;
            if (A.role === nz.uU.Unknown || A.role === nz.uU.System)
                return null;
            var e$ = eG ? (0,
            v.jsx)(rq, {
                $isMessageRedesign: ea,
                onClick: ey,
                className: (0,
                F.Z)(!ea && $ && "md:invisible md:group-hover:visible"),
                children: (0,
                v.jsx)(eo.ZP, {
                    icon: G.vPQ
                })
            }) : null
              , eQ = et && !N ? (0,
            v.jsx)(nx.Z, {
                onCopy: eC,
                className: (0,
                F.Z)("rounded-md p-1", ea ? "text-gray-500 hover:text-gray-700 dark:hover:text-gray-400" : "hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400")
            }) : null
              , eJ = eV ? (0,
            v.jsxs)("div", {
                className: "flex gap-1",
                children: ["thumbsDown" !== em && !er && (0,
                v.jsx)(rq, {
                    $isMessageRedesign: ea,
                    onClick: function() {
                        return ew("thumbsUp")
                    },
                    disabled: "thumbsUp" === em,
                    className: (0,
                    F.Z)("thumbsUp" === em && (ea ? "bg-gray-100 dark:bg-gray-700" : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")),
                    children: (0,
                    v.jsx)(eo.ZP, {
                        icon: G.fmn
                    })
                }, "thumbsUp:".concat(eh.nodeId)), "thumbsUp" !== em && !er && (0,
                v.jsx)(rq, {
                    $isMessageRedesign: ea,
                    onClick: function() {
                        return ew("thumbsDown")
                    },
                    disabled: "thumbsDown" === em,
                    className: (0,
                    F.Z)("thumbsDown" === em && (ea ? "bg-gray-100 dark:bg-gray-700" : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")),
                    children: (0,
                    v.jsx)(eo.ZP, {
                        icon: G.oLd
                    })
                }, "thumbsDown:".concat(eh.nodeId))]
            }) : null
              , eY = eA && !er ? (0,
            v.jsxs)(rz, {
                children: [(0,
                v.jsx)("div", {
                    className: (0,
                    F.Z)("mr-4"),
                    children: "Was this response better or worse?"
                }), (0,
                v.jsxs)(rB, {
                    onClick: function() {
                        return eO("new")
                    },
                    title: "This response was better than the previous response",
                    children: [(0,
                    v.jsx)(eo.ZP, {
                        icon: G.fmn,
                        className: (0,
                        F.Z)("mr-1")
                    }), "Better"]
                }), (0,
                v.jsxs)(rB, {
                    onClick: function() {
                        return eO("original")
                    },
                    title: "This response was worse than the previous response",
                    children: [(0,
                    v.jsx)(eo.ZP, {
                        icon: G.oLd,
                        className: (0,
                        F.Z)("mr-1")
                    }), "Worse"]
                }), (0,
                v.jsxs)(rB, {
                    onClick: function() {
                        return eO("same")
                    },
                    title: "This response was the same in quality",
                    children: [(0,
                    v.jsx)(eo.ZP, {
                        icon: tR.Ny3,
                        className: (0,
                        F.Z)("mr-1 rounded-full border border-gray-400 dark:border-gray-300")
                    }), "Same"]
                }), (0,
                v.jsx)(rB, {
                    onClick: eH,
                    title: "Skip this comparison",
                    children: (0,
                    v.jsx)(eo.ZP, {
                        icon: G.q5L,
                        size: "medium"
                    })
                })]
            }) : null
              , eK = eW && U.length > 1
              , eX = function() {
                return (0,
                v.jsxs)("div", {
                    className: "flex gap-1",
                    children: [eJ, e$, eQ]
                })
            }
              , e2 = null === (n = q[0].message.metadata) || void 0 === n ? void 0 : n.shared_conversation_id
              , e3 = null != e2;
            return (0,
            v.jsxs)(rE, {
                className: (0,
                F.Z)("group", "w-full text-gray-800 dark:text-gray-100", ea ? (0,
                F.Z)("sm:rounded-2xl", et ? "my-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50" : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600") : (0,
                F.Z)(!N && "border-b border-black/10 dark:border-gray-900/50", et ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800")),
                ref: ef,
                children: [eI && (0,
                v.jsx)(rO, {
                    children: eI
                }), (0,
                v.jsxs)(rL, {
                    $isMessageRedesign: ea,
                    className: (0,
                    F.Z)(N ? "ml-5" : "m-auto"),
                    children: [(0,
                    v.jsxs)(rA, {
                        children: [(0,
                        v.jsx)("div", {
                            className: ea ? "" : "w-[30px]",
                            children: et ? eD ? (0,
                            v.jsx)(e1, {
                                plugin: eD,
                                notice: eP || void 0
                            }) : (0,
                            v.jsx)(e0, {
                                background: null != L ? L : eR,
                                iconName: eZ,
                                notice: eP || void 0
                            }) : (0,
                            v.jsx)(e4, {
                                user: e3 ? {
                                    name: "User"
                                } : null == W ? void 0 : W.user,
                                notice: eP || void 0,
                                size: ea ? "redesign" : "medium",
                                backgroundColorForInitials: null != e2 ? rR[e2.charCodeAt(0) % rR.length] : void 0
                            })
                        }), !ea && eW && $ && (0,
                        v.jsx)(tU, {
                            currentPage: en,
                            onChangeIndex: function(e) {
                                return l(U[e])
                            },
                            length: U.length,
                            className: (0,
                            F.Z)("invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible", U.length > 1 ? "visible" : "!invisible")
                        })]
                    }), (0,
                    v.jsxs)("div", {
                        className: (0,
                        F.Z)("relative", ea ? "min-w-0 grow" : "flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"),
                        children: [ea && (0,
                        v.jsx)("div", {
                            className: "mb-1 select-none text-xs font-medium tracking-wide text-gray-400",
                            children: et ? "ChatGPT" : e3 ? "User" : "You"
                        }), (0,
                        v.jsx)(rF, {
                            children: eF
                        }), ea ? (!$ || eK || null != eY) && (0,
                        v.jsxs)("div", {
                            className: "mt-2 flex flex-col gap-4",
                            children: [(0,
                            v.jsxs)("div", {
                                className: "flex gap-2 text-gray-400",
                                children: [eK && (0,
                                v.jsx)(tU, {
                                    currentPage: en,
                                    onChangeIndex: function(e) {
                                        return l(U[e])
                                    },
                                    length: U.length,
                                    className: "rounded-xl border border-gray-100 bg-white p-1 dark:border-gray-600 dark:bg-gray-700"
                                }), !$ && eX()]
                            }), eY]
                        }) : (0,
                        v.jsxs)(v.Fragment, {
                            children: [eG && $ && (0,
                            v.jsx)(rU, {
                                $hidden: 0 !== M.size,
                                children: e$
                            }), (eV || eW) && (0,
                            v.jsxs)("div", {
                                className: "flex justify-between lg:block",
                                children: [!$ && eW && (0,
                                v.jsx)(tU, {
                                    currentPage: en,
                                    onChangeIndex: function(e) {
                                        return l(U[e])
                                    },
                                    length: U.length,
                                    className: (0,
                                    F.Z)("self-center pt-2", U.length > 1 ? "visible" : "!invisible")
                                }), eG && !$ && (0,
                                v.jsx)(rU, {
                                    $hidden: eN,
                                    children: e$
                                }), eV && (0,
                                v.jsxs)(rU, {
                                    $hidden: eN,
                                    children: [eQ, eJ]
                                }), eA && !er && eY]
                            })]
                        })]
                    }), ea && $ && !Y && (!Z || et) && (0,
                    v.jsx)("div", {
                        className: "absolute -top-4 right-4 hidden rounded bg-white p-1 shadow-[0_0.5px_2px_rgba(0,0,0,0.15)] group-hover:block dark:bg-gray-900",
                        children: eX()
                    })]
                })]
            })
        })
          , rE = j.Z.div(rk())
          , rF = j.Z.div(r_())
          , rL = j.Z.div(rM(), function(e) {
            return e.$isMessageRedesign ? "relative" : "text-base md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl md:py-6 lg:px-0"
        })
          , rA = j.Z.div(rT())
          , rB = j.Z.button(rN())
          , rq = j.Z.button(rP(), function(e) {
            return e.$isMessageRedesign ? "text-gray-500 enabled:hover:text-gray-700 enabled:dark:hover:text-gray-400 rounded-sm" : "rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
        })
          , rU = j.Z.div(rI(), function(e) {
            return e.$hidden ? "invisible" : "visible"
        })
          , rO = j.Z.div(rS())
          , rz = j.Z.div(rZ());
        function rH() {
            var e = (0,
            p._)(["mb-2 mt-auto ml-auto mr-auto"]);
            return rH = function() {
                return e
            }
            ,
            e
        }
        function rV() {
            var e = (0,
            p._)(["relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden"]);
            return rV = function() {
                return e
            }
            ,
            e
        }
        function rW() {
            var e = (0,
            p._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
            return rW = function() {
                return e
            }
            ,
            e
        }
        function rG() {
            var e = (0,
            p._)([""]);
            return rG = function() {
                return e
            }
            ,
            e
        }
        var r$ = (0,
        $.vU)({
            submitFeedback: {
                id: "feedbackModal.submitFeedback",
                defaultMessage: "Submit feedback",
                description: "Button text for submitting the feedback"
            },
            submitRejectModeration: {
                id: "feedbackModal.moderationReject",
                defaultMessage: "Reject",
                description: "Button text for rejecting the share link and blocking it from being viewed"
            },
            submitAcceptModeration: {
                id: "feedbackModal.moderationAccept",
                defaultMessage: "Accept",
                description: "Button text for accepting the share link and allowing it to be viewed"
            },
            thumbsUpPlaceholder: {
                id: "feedbackModal.thumbsUpPlaceholder",
                defaultMessage: "What do you like about the response?",
                description: "Placeholder for textarea input when user chooses thumbs up"
            },
            thumbsDownPlaceholder: {
                id: "feedbackModal.thumbsDownPlaceholder",
                defaultMessage: "What was the issue with the response? How could it be improved?",
                description: "Placeholder for textarea input when user chooses thumbs down"
            },
            harmfulUnsafe: {
                id: "feedbackModal.harmfulUnsafe",
                defaultMessage: "This is harmful / unsafe",
                description: "Label for harmful/unsafe checkbox"
            },
            terroristContent: {
                id: "feedbackModal.terroristContent",
                defaultMessage: "This is terrorist content",
                description: "Label for Terrorist Content checkbox"
            },
            csamContent: {
                id: "feedbackModal.csamContent",
                defaultMessage: "This is CSAM content",
                description: "Label for CSAM Content checkbox"
            },
            copyrightContent: {
                id: "feedbackModal.copyrightContent",
                defaultMessage: "This content violates copyright law",
                description: "Label for Copyrighted Content checkbox"
            },
            otherIllegalContent: {
                id: "feedbackModal.otherIllegalContent",
                defaultMessage: "Other - This content is illegal (please describe)",
                description: "Label for Other Illegal Content checkbox"
            },
            notTrue: {
                id: "feedbackModal.notTrue",
                defaultMessage: "This isn't true",
                description: "Label for not true checkbox"
            },
            notHelpful: {
                id: "feedbackModal.notHelpful",
                defaultMessage: "This isn't helpful",
                description: "Label for not helpful checkbox"
            },
            provideAdditionalFeedback: {
                id: "feedbackModal.provideAdditionalFeedback",
                defaultMessage: "Provide additional feedback",
                description: "Title for the critique feedback modal"
            },
            pickBestAnswer: {
                id: "feedbackModal.pickBestAnswer",
                defaultMessage: "Pick the best answer to improve the model",
                description: "Title for the compare feedback modal"
            },
            newAnswer: {
                id: "feedbackModal.newAnswer",
                defaultMessage: "New Answer",
                description: "Title for the new answer during comparison"
            },
            originalAnswer: {
                id: "feedbackModal.originalAnswer",
                defaultMessage: "Original Answer",
                description: "Title for the original answer during comparison"
            },
            newAnswerBetter: {
                id: "feedbackModal.newAnswerBetter",
                defaultMessage: "New answer is better",
                description: "Button text for choosing new answer during comparison"
            },
            originalAnswerBetter: {
                id: "feedbackModal.originalAnswerBetter",
                defaultMessage: "Original answer is better",
                description: "Button text for choosing original answer during comparison"
            },
            neitherAnswerBetter: {
                id: "feedbackModal.neitherAnswerBetter",
                defaultMessage: "Neither answer is better",
                description: "Button text for choosing neither answer during comparison"
            },
            skipStep: {
                id: "feedbackModal.skipStep",
                defaultMessage: "Skip this step",
                description: "Button text for skipping comparison step"
            },
            continueWithChosenAnswer: {
                id: "feedbackModal.continueWithChosenAnswer",
                defaultMessage: "The conversation will continue with the answer you choose.",
                description: "Information text for user during comparison"
            }
        });
        function rQ(e) {
            var n, t, r, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (null == e ? void 0 : null === (n = e.messages) || void 0 === n ? void 0 : n.length) === 1 && !(null == e ? void 0 : null === (t = e.messages) || void 0 === t ? void 0 : t.some(function(e) {
                return "error"in e
            })) && (!a || !((null == e ? void 0 : null === (r = e.messages) || void 0 === r ? void 0 : r.length) === 1 && nv.Cv.getTextFromMessage(null == e ? void 0 : e.messages[0].message).length < 20))
        }
        function rJ(e) {
            var n, t, r = e.ratingModalNodeId, a = e.ratingModalOpen, i = e.onCloseRatingModal, o = e.handleSubmitFeedback, s = e.onHandleChangeFeedbackComparisonRating, l = e.feedbackTextareaRef, u = e.clientThreadId, c = e.activeRequests, d = e.modelBackend, f = e.onChangeItemInView, g = e.onRequestMoreCompletions, p = e.onDeleteNode, x = e.onRequestCompletion, b = e.onUpdateNode, j = e.onSandboxLinkClick, M = (0,
            Q.Z)(), T = _.tQ.getTree(u), N = (0,
            _.XK)(u), P = (0,
            y.useRef)(.5 > Math.random() ? "left" : "right"), I = null == T ? void 0 : T.getConversationTurns(r || "root"), Z = I.length - 1, R = I[I.length - 1], D = (0,
            k.hz)().has(K.FZ), E = (0,
            m._)((0,
            y.useState)("critique"), 2), L = E[0], A = E[1], B = (0,
            X.w$)(), q = (0,
            k.hz)().has(K.Pt) && rQ(R, !0) && B, U = (0,
            C.WS)(), O = (0,
            y.useMemo)(function() {
                return {
                    id: r || "root",
                    threadId: _.tQ.getServerThreadId(u),
                    rating: a,
                    model: d
                }
            }, [r, u, a, d]), z = null == I ? void 0 : I[(null == I ? void 0 : I.length) - 1].variantIds, H = null == z ? void 0 : z[(null == z ? void 0 : z.length) - 1], V = (t = (n = null == T ? void 0 : T.getConversationTurns(H))[n.length - 1]).messages[t.messages.length - 1].nodeId, $ = null == T ? void 0 : T.getConversationTurns(V), ee = (0,
            y.useMemo)(function() {
                var e = null == $ ? void 0 : $[(null == $ ? void 0 : $.length) - 1];
                return "thumbsDown" === a && q && rQ(e) && rQ(R)
            }, [a, q, $, R]), en = (0,
            y.useRef)(Date.now()), et = (0,
            y.useRef)(-1), er = (0,
            y.useRef)(Date.now()), ea = (0,
            y.useRef)(Date.now());
            (0,
            y.useEffect)(function() {
                "compare" === L ? (et.current = Date.now(),
                U(w.s6.displayedComparisonUIV0, O)) : "critique" === L && "thumbsDown" === a && U(w.s6.displayedThumbsDownFeedbackForm, O)
            }, [L]);
            var ei = I.length - 2
              , eo = $.length - 1
              , es = $[$.length - 1]
              , el = (0,
            y.useMemo)(function() {
                return es && nv.Cv.getRequestIdFromConversationTurn(es)
            }, [es])
              , eu = (0,
            y.useMemo)(function() {
                return c.has(el)
            }, [c, el]);
            (0,
            y.useMemo)(function() {
                eu || (ea.current = Date.now())
            }, [eu]);
            var ec = R.messages
              , ef = ec[ec.length - 1]
              , eh = ef.message.id
              , eg = ef.nodeId
              , em = T.getLeafFromNode(eg)
              , ep = es.messages
              , ev = ep[ep.length - 1]
              , ex = ev.message.id
              , eb = ev.nodeId
              , ey = T.getLeafFromNode(eb)
              , ej = "critique" === L ? M.formatMessage(r$.provideAdditionalFeedback) : M.formatMessage(r$.pickBestAnswer)
              , eC = (0,
            y.useRef)([])
              , ew = (0,
            y.useRef)("")
              , ek = (0,
            y.useCallback)(function() {
                var e, n = null === (e = l.current) || void 0 === e ? void 0 : e.elements;
                eC.current = (0,
                nF._)(n || []).filter(function(e) {
                    return e.checked
                }).map(function(e) {
                    return e.id
                }).map(function(e) {
                    return e.replace("feedback-", "")
                }),
                ew.current = (null == n ? void 0 : n["feedback-other"].value) || ""
            }, [l])
              , e_ = (0,
            y.useCallback)(function() {
                ek(),
                o(ew.current, eC.current),
                "thumbsDown" === a && U(w.s6.submitThumbsDownFeedbackForm, O),
                ee ? A("compare") : i()
            }, [ek, o, a, ee, U, O, i])
              , eM = (0,
            y.useCallback)(function(e, n) {
                var t = _.tQ.getServerThreadId(u);
                if (null != t) {
                    var r = _.tQ.getThreadCurrentLeafId(u);
                    Y.ZP.submitSharedConversationReportFeedback({
                        message_id: r,
                        shared_conversation_id: t,
                        text: e,
                        tags: n
                    }).then(function() {
                        ed.m.success("Moderation logged successfully")
                    }).catch(function() {
                        ed.m.danger("Moderation NOT logged successfully! Please try again")
                    }),
                    i()
                }
            }, [u, i])
              , eT = (0,
            y.useCallback)(function() {
                ek(),
                eC.current.push("moderation-reject"),
                eM(ew.current, eC.current)
            }, [eM, ek])
              , eN = (0,
            y.useCallback)(function() {
                ek(),
                eC.current.push("moderation-accept"),
                eM(ew.current, eC.current)
            }, [eM, ek])
              , eP = "moderate" === a ? (0,
            v.jsxs)(v.Fragment, {
                children: [(0,
                v.jsx)(e9.mH, {
                    title: M.formatMessage(r$.submitRejectModeration),
                    color: "danger",
                    onClick: eT
                }), (0,
                v.jsx)(e9.mH, {
                    title: M.formatMessage(r$.submitAcceptModeration),
                    color: "primary",
                    onClick: eN
                })]
            }) : "critique" === L ? (0,
            v.jsx)(e9.mH, {
                title: M.formatMessage(r$.submitFeedback),
                onClick: e_
            }) : null
              , eI = "left" === P.current
              , eS = eI ? "new" : "original"
              , eZ = eI ? "original" : "new"
              , eR = eI ? M.formatMessage(r$.newAnswer) : M.formatMessage(r$.originalAnswer)
              , eD = eI ? M.formatMessage(r$.originalAnswer) : M.formatMessage(r$.newAnswer)
              , eE = eI ? M.formatMessage(r$.newAnswerBetter) : M.formatMessage(r$.originalAnswerBetter)
              , eF = eI ? M.formatMessage(r$.originalAnswerBetter) : M.formatMessage(r$.newAnswerBetter)
              , eL = a && "report" !== a && "moderate" !== a
              , eA = (0,
            y.useCallback)(function(e) {
                var n = "left" === e ? eS : "right" === e ? eZ : "same";
                if (U(w.s6.submittedComparisonUIV0, Object.assign({}, O, {
                    choice: n
                })),
                eL) {
                    var t = _.tQ.getTree(u)
                      , r = t.getMetadata(eg);
                    t.updateNode(eg, {
                        metadata: {
                            $set: (0,
                            S._)((0,
                            h._)({}, r), {
                                inlineComparisonRating: "baseline"
                            })
                        }
                    });
                    var o = t.getMetadata(eb);
                    t.updateNode(eb, {
                        metadata: {
                            $set: (0,
                            S._)((0,
                            h._)({}, o), {
                                inlineComparisonRating: n
                            })
                        }
                    }),
                    s(eh, ex, a, n, P.current, en.current, et.current, er.current, ea.current, ew.current, eC.current)
                }
                _.tQ.setThreadCurrentLeafId(u, e === P.current ? ey.id : em.id),
                i()
            }, [eS, eZ, U, O, eL, u, ey.id, em.id, i, eg, eb, s, eh, ex, a])
              , eB = !eu && null != ea.current && ee
              , eq = (0,
            y.useCallback)(function() {
                i(),
                "critique" === L ? U(w.s6.skippedThumbsDownFeedbackForm, Object.assign({}, O)) : "compare" === L && U(w.s6.skippedComparisonUIV0, Object.assign({}, O))
            }, [i, U, O, L]);
            return (0,
            v.jsxs)(e9.ZP, {
                isOpen: !0,
                onModalClose: eq,
                closeButton: (0,
                v.jsx)(e9.ol, {
                    onClose: eq
                }),
                size: "custom",
                className: "md:w-[672px] lg:w-[896px] xl:w-[1024px] xl:max-w-7xl",
                type: "critique" === L ? "thumbsUp" === a ? "success" : "danger" : "success",
                icon: "critique" === L ? "thumbsUp" === a ? G.fmn : G.oLd : void 0,
                title: ej,
                primaryButton: eP,
                children: ["critique" === L && (0,
                v.jsxs)("form", {
                    ref: l,
                    children: [(0,
                    v.jsx)(e6.ZP, {
                        id: "feedback-other",
                        placeholder: "thumbsUp" === a ? M.formatMessage(r$.thumbsUpPlaceholder) : M.formatMessage(r$.thumbsDownPlaceholder),
                        rows: 3,
                        className: "mb-1 mt-4 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white"
                    }), "thumbsDown" === a && (0,
                    v.jsxs)("div", {
                        className: "mb-4",
                        children: [(0,
                        v.jsx)(tZ, {
                            id: "feedback-harmful",
                            label: M.formatMessage(r$.harmfulUnsafe)
                        }), (0,
                        v.jsx)(tZ, {
                            id: "feedback-false",
                            label: M.formatMessage(r$.notTrue)
                        }), (0,
                        v.jsx)(tZ, {
                            id: "feedback-not-helpful",
                            label: M.formatMessage(r$.notHelpful)
                        })]
                    }), null != a && !eL && (0,
                    v.jsxs)("div", {
                        className: "mb-4",
                        children: [(0,
                        v.jsx)(tZ, {
                            id: "feedback-terrorist",
                            label: M.formatMessage(r$.terroristContent)
                        }), (0,
                        v.jsx)(tZ, {
                            id: "feedback-csam",
                            label: M.formatMessage(r$.csamContent)
                        }), (0,
                        v.jsx)(tZ, {
                            id: "feedback-copyright",
                            label: M.formatMessage(r$.copyrightContent)
                        }), (0,
                        v.jsx)(tZ, {
                            id: "feedback-other-illegal",
                            label: M.formatMessage(r$.otherIllegalContent)
                        }), (0,
                        v.jsx)(tZ, {
                            id: "feedback-harmful",
                            label: M.formatMessage(r$.harmfulUnsafe)
                        })]
                    })]
                }), "compare" === L && $ && void 0 !== N && (0,
                v.jsxs)("div", {
                    className: (0,
                    F.Z)("w-full"),
                    children: [(0,
                    v.jsx)("p", {
                        className: (0,
                        F.Z)("mb-7 mt-3"),
                        children: (0,
                        v.jsx)(J.Z, (0,
                        h._)({}, r$.continueWithChosenAnswer))
                    }), (0,
                    v.jsx)(rX, {
                        className: D ? "rounded-2xl" : "rounded-md",
                        children: (0,
                        v.jsx)(r0, {
                            children: (0,
                            v.jsx)(rD, {
                                modelBackend: d,
                                turnIndex: ei,
                                isFinalTurn: !1,
                                clientThreadId: u,
                                onChangeItemInView: f,
                                onChangeRating: W(),
                                onRequestMoreCompletions: g,
                                onDeleteNode: p,
                                onRequestCompletion: x,
                                onUpdateNode: b,
                                onSandboxLinkClick: j,
                                activeRequests: c,
                                showInlineEmbeddedDisplay: !0,
                                onHandleChangeVariantFeedbackInlineComparisonRating: W()
                            })
                        })
                    }), (0,
                    v.jsxs)("div", {
                        className: (0,
                        F.Z)(),
                        children: [(0,
                        v.jsxs)("div", {
                            className: (0,
                            F.Z)("mb-2 grid w-full grid-cols-2 gap-5"),
                            children: [(0,
                            v.jsx)("div", {
                                children: (0,
                                v.jsx)("p", {
                                    className: (0,
                                    F.Z)("font-semibold"),
                                    children: eR
                                })
                            }), (0,
                            v.jsx)("div", {
                                children: (0,
                                v.jsx)("p", {
                                    className: (0,
                                    F.Z)("font-semibold"),
                                    children: eD
                                })
                            })]
                        }), (0,
                        v.jsxs)("div", {
                            className: (0,
                            F.Z)("mb-5 grid w-full grid-cols-2 gap-5"),
                            children: [(0,
                            v.jsxs)(rK, {
                                children: [(0,
                                v.jsx)(r0, {
                                    children: (0,
                                    v.jsx)(rD, {
                                        modelBackend: d,
                                        turnIndex: eI ? eo : Z,
                                        turnLeafId: eI ? eb : eg,
                                        isFinalTurn: !0,
                                        clientThreadId: u,
                                        onChangeItemInView: f,
                                        onChangeRating: W(),
                                        onDeleteNode: p,
                                        onRequestMoreCompletions: g,
                                        onRequestCompletion: x,
                                        onUpdateNode: b,
                                        onSandboxLinkClick: j,
                                        activeRequests: c,
                                        showInlineEmbeddedDisplay: !0,
                                        onHandleChangeVariantFeedbackInlineComparisonRating: W()
                                    })
                                }), (0,
                                v.jsx)(rY, {
                                    children: (0,
                                    v.jsx)(e9.mH, {
                                        disabled: !eB,
                                        title: eE,
                                        onClick: function() {
                                            return eA("left")
                                        },
                                        color: "dark"
                                    })
                                })]
                            }), (0,
                            v.jsxs)(rK, {
                                children: [(0,
                                v.jsx)(r0, {
                                    children: (0,
                                    v.jsx)(rD, {
                                        modelBackend: d,
                                        turnIndex: eI ? Z : eo,
                                        turnLeafId: eI ? eg : eb,
                                        isFinalTurn: !0,
                                        clientThreadId: u,
                                        onChangeItemInView: f,
                                        onChangeRating: W(),
                                        onDeleteNode: p,
                                        onRequestMoreCompletions: g,
                                        onRequestCompletion: x,
                                        onUpdateNode: b,
                                        onSandboxLinkClick: j,
                                        activeRequests: c,
                                        showInlineEmbeddedDisplay: !0,
                                        onHandleChangeVariantFeedbackInlineComparisonRating: W()
                                    })
                                }), (0,
                                v.jsx)(rY, {
                                    children: (0,
                                    v.jsx)(e9.mH, {
                                        disabled: !eB,
                                        title: eF,
                                        onClick: function() {
                                            return eA("right")
                                        },
                                        color: "dark"
                                    })
                                })]
                            })]
                        }), (0,
                        v.jsx)("div", {
                            className: (0,
                            F.Z)("grid w-full"),
                            children: (0,
                            v.jsxs)("div", {
                                className: (0,
                                F.Z)("mb-2 text-right"),
                                children: [(0,
                                v.jsx)(e9.mH, {
                                    disabled: !eB,
                                    title: M.formatMessage(r$.neitherAnswerBetter),
                                    color: "primary",
                                    onClick: function() {
                                        return eA("same")
                                    },
                                    className: (0,
                                    F.Z)("mr-2")
                                }), (0,
                                v.jsx)(e9.mH, {
                                    title: M.formatMessage(r$.skipStep),
                                    onClick: function() {
                                        return i()
                                    }
                                })]
                            })
                        })]
                    })]
                })]
            }, "RatingModal-".concat(r))
        }
        var rY = j.Z.div(rH())
          , rK = j.Z.div(rV())
          , rX = j.Z.div(rW())
          , r0 = j.Z.div(rG())
          , r1 = t(70060)
          , r2 = t.n(r1);
        function r3() {
            var e = (0,
            p._)(["\nflex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\n", "\n", "\n"]);
            return r3 = function() {
                return e
            }
            ,
            e
        }
        function r5() {
            var e = (0,
            p._)(["\nabsolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5  hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent\n", " ", ""]);
            return r5 = function() {
                return e
            }
            ,
            e
        }
        function r4() {
            var e = (0,
            p._)(["", " flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"]);
            return r4 = function() {
                return e
            }
            ,
            e
        }
        var r7 = r2()(Promise.resolve().then(t.bind(t, 22208)), {
            loadableGenerated: {
                webpack: function() {
                    return [22208]
                }
            },
            ssr: !1
        })
          , r8 = (0,
        $.vU)({
            errorGeneratingResponse: {
                id: "PromptTextarea.errorGeneratingResponse",
                defaultMessage: "There was an error generating a response",
                description: "Error message shown when the response generation fails"
            },
            regenerateResponse: {
                id: "PromptTextarea.regenerateResponse",
                defaultMessage: "Regenerate response",
                description: "Button label for regenerating response"
            },
            continueGenerating: {
                id: "PromptTextarea.continueGenerating",
                defaultMessage: "Continue generating",
                description: "Button label for continuing response generation"
            },
            stopGenerating: {
                id: "PromptTextarea.stopGenerating",
                defaultMessage: "Stop generating",
                description: "Button label for stopping response generation"
            },
            placeholder: {
                id: "PromptTextarea.placeholder",
                defaultMessage: "Send a message.",
                description: "Placeholder text for the input field"
            },
            continueSharedConversationPlaceholder: {
                id: "PromptTextarea.ontinueSharedConversationPplaceholder",
                defaultMessage: "Send a message to continue the conversation.",
                description: "Placeholder text for the input field when viewing a shared conversation"
            },
            suggestionTooltip: {
                id: "PromptTextarea.suggestionTooltip",
                defaultMessage: "Click to send",
                description: "Tooltip for the suggestion button"
            }
        });
        function r6(e) {
            var n, t = e.onAbortCompletion, r = e.onCreateNewCompletion, a = e.onRequestMoreCompletions, i = e.onContinueGenerating, o = e.onFileUpload, s = e.canUpload, l = e.modelBackend, u = e.clientThreadId, c = e.isCompletionInProgress, d = e.className, f = e.currentPrompt, g = e.onChangeCurrentPrompt, m = e.clearOnSubmit, p = void 0 === m || m, x = e.disabled, b = void 0 !== x && x, j = e.shouldRetry, M = e.canPause, T = void 0 !== M && M, N = e.canContinue, P = void 0 !== N && N, I = e.suggestions, S = e.isInteractableSharedThread, Z = (0,
            Q.Z)(), R = (0,
            _.oq)(u), D = (0,
            _.Hk)(u), L = (0,
            X.w$)(), A = (0,
            C.WS)(), B = (0,
            y.useContext)(E.gt).serviceStatus, q = (0,
            y.useContext)(E.QL).historyDisabled, U = (0,
            y.useRef)(null), O = (0,
            y.useCallback)(function(e) {
                g(e.currentTarget.value)
            }, [g]), z = (0,
            y.useCallback)(function(e, n) {
                if (null == e || e.preventDefault(),
                !b) {
                    var t, a, i = null === (t = U.current) || void 0 === t ? void 0 : t.value, o = "".concat(null === (a = U.current) || void 0 === a ? void 0 : a.dataset.id, "-nextPrompt");
                    i && (r(o, {
                        value: i || ""
                    }, {
                        eventSource: e ? "mouse" : "keyboard"
                    }, {
                        suggestions: I
                    }),
                    p && g(""),
                    (0,
                    e6.SI)(1, U.current),
                    void 0 !== I && (void 0 !== n ? tD.m.logEvent("chatgpt_prompt_use_suggestion", i, {
                        index: "".concat(n)
                    }) : tD.m.logEvent("chatgpt_prompt_ignore_suggestions")))
                }
            }, [p, b, r, g, I]), H = (0,
            y.useCallback)(function() {
                t("", D),
                a(R, {
                    eventSource: "mouse"
                })
            }, [R, D, t, a]), V = (0,
            y.useCallback)(function() {
                t("", D),
                A(w.s6.pauseCompletion, {
                    threadId: _.tQ.getServerThreadId(u),
                    eventSource: "mouse"
                })
            }, [D, u, A, t]), W = (0,
            y.useMemo)(function() {
                return {
                    Enter: {
                        validator: function() {
                            return !b
                        },
                        handler: function(e) {
                            !e.metaKey && (!L || e.shiftKey || e.nativeEvent.isComposing) || (e.preventDefault(),
                            c || z())
                        }
                    },
                    Escape: {
                        validator: function() {
                            return T && c
                        },
                        handler: function() {
                            t("", D),
                            A(w.s6.pauseCompletion, {
                                threadId: _.tQ.getServerThreadId(u),
                                eventSource: "keyboard"
                            })
                        }
                    }
                }
            }, [b, L, c, z, T, t, D, A, u]), $ = (0,
            y.useCallback)(function(e) {
                var n;
                (null === (n = W[e.key]) || void 0 === n ? void 0 : n.validator(e)) && W[e.key].handler(e)
            }, [W]);
            (0,
            y.useEffect)(function() {
                var e;
                null === (e = U.current) || void 0 === e || e.focus()
            }, []);
            var Y = "root" !== R && !c && !(null == B ? void 0 : B.oof)
              , ee = null === (n = U.current) || void 0 === n ? void 0 : n.value
              , en = (0,
            y.useCallback)(function() {
                i(R)
            }, [R, i])
              , et = (0,
            k.hz)().has(K.uj)
              , er = (0,
            y.useMemo)(function() {
                return (0,
                v.jsxs)("div", {
                    className: j ? "w-full" : "",
                    children: [j && (0,
                    v.jsx)("div", {
                        className: "mb-3 text-center text-xs",
                        children: (0,
                        v.jsx)(J.Z, (0,
                        h._)({}, r8.errorGeneratingResponse))
                    }), (0,
                    v.jsxs)(aa, {
                        $shouldRetry: j,
                        children: [!j && et && (0,
                        v.jsx)(ae, {
                            suggestions: I,
                            shouldRetry: j,
                            currentInputRef: U,
                            onChangeCurrentPrompt: g,
                            handleCreateNewCompletion: z
                        }), Y && (0,
                        v.jsxs)(ei.z, {
                            as: "button",
                            color: j ? "primary" : "neutral",
                            onClick: H,
                            className: (0,
                            F.Z)(j ? "m-auto" : "border-0 md:border"),
                            children: [(0,
                            v.jsx)(eo.ZP, {
                                icon: G.Qxo,
                                size: L ? "xsmall" : "small",
                                className: "flex-shrink-0"
                            }), (L || j) && (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, r8.regenerateResponse))]
                        }), P && (0,
                        v.jsxs)(ei.z, {
                            as: "button",
                            color: "neutral",
                            onClick: en,
                            className: "border-0 md:border",
                            children: [(0,
                            v.jsx)(eo.ZP, {
                                icon: G.lV_,
                                className: "-rotate-180",
                                size: L ? "xsmall" : "small"
                            }), L && (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, r8.continueGenerating))]
                        }), T && c && (0,
                        v.jsxs)(ei.z, {
                            as: "button",
                            color: "neutral",
                            onClick: V,
                            className: "border-0 md:border",
                            children: [(0,
                            v.jsx)(eo.ZP, {
                                icon: G.jxP,
                                size: L ? "xsmall" : "small"
                            }), L && (0,
                            v.jsx)(J.Z, (0,
                            h._)({}, r8.stopGenerating))]
                        })]
                    })]
                })
            }, [P, T, Y, et, V, z, g, H, en, c, L, j, I]);
            return (0,
            v.jsx)("form", {
                className: d,
                onSubmit: z,
                children: (0,
                v.jsxs)("div", {
                    className: "relative flex h-full flex-1 items-stretch md:flex-col",
                    children: [L && er, !j && (0,
                    v.jsxs)(at, {
                        $disabled: j,
                        $historyDisabled: q,
                        children: [(0,
                        v.jsx)(e6.ZP, {
                            id: an,
                            tabIndex: 0,
                            value: f,
                            "data-id": R,
                            ref: U,
                            style: {
                                maxHeight: "200px"
                            },
                            rows: 1,
                            onKeyDown: $,
                            onChange: O,
                            placeholder: S ? Z.formatMessage(r8.continueSharedConversationPlaceholder) : Z.formatMessage(r8.placeholder),
                            className: (0,
                            F.Z)("m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent", s ? "pl-8 md:pl-5" : "pl-2 md:pl-0"),
                            disabled: j
                        }), s && (0,
                        v.jsx)(r7, {
                            clientThreadId: u,
                            onFileUpload: o,
                            currentLeafId: R,
                            modelBackend: l,
                            disabled: c
                        }), (0,
                        v.jsx)(ar, {
                            disabled: c || j || !ee || b,
                            $onRightSide: !0,
                            $nudgeBottom: c,
                            className: c ? "" : "disabled:opacity-40",
                            children: c ? (0,
                            v.jsx)("div", {
                                className: "text-2xl",
                                children: (0,
                                v.jsx)(r9, {})
                            }) : (0,
                            v.jsx)(eo.ZP, {
                                icon: G.LbG,
                                size: "small",
                                className: "mr-1"
                            })
                        })]
                    }), !L && er]
                })
            })
        }
        function r9() {
            var e = (0,
            m._)((0,
            y.useState)(0), 2)
              , n = e[0]
              , t = e[1];
            (0,
            y.useEffect)(function() {
                var e = setInterval(function() {
                    t(function(e) {
                        return (e + 1) % 3
                    })
                }, 350);
                return function() {
                    return clearInterval(e)
                }
            }, []);
            for (var r = [], a = 0; a < 3; a++)
                r.push((0,
                v.jsx)("span", {
                    className: a <= n ? "" : "invisible",
                    children: "\xb7"
                }, a));
            return (0,
            v.jsx)(v.Fragment, {
                children: r
            })
        }
        function ae(e) {
            var n = e.suggestions
              , t = e.shouldRetry
              , r = e.currentInputRef
              , a = e.onChangeCurrentPrompt
              , i = e.handleCreateNewCompletion
              , o = (0,
            Q.Z)()
              , s = (0,
            y.useCallback)(function(e, n) {
                null !== r.current && (a(e),
                r.current.value = e,
                i(void 0, n))
            }, [r, i, a]);
            return (0,
            y.useEffect)(function() {
                void 0 !== n && tD.m.logEvent("chatgpt_prompt_show_suggestions")
            }, [n]),
            (0,
            v.jsx)("div", {
                className: "absolute -left-2 bottom-full mb-4 flex max-w-[100vw] grow gap-2 overflow-auto px-2 md:static md:mb-0 md:max-w-none md:overflow-visible md:px-0",
                children: t || void 0 === n ? null : n.slice(0, 2).map(function(e, n) {
                    return (0,
                    v.jsxs)(ei.z, {
                        as: "button",
                        color: "neutral",
                        onClick: function() {
                            return s(e, n)
                        },
                        className: "group whitespace-nowrap text-left md:whitespace-normal",
                        children: [e, (0,
                        v.jsx)("div", {
                            className: "absolute bottom-0 right-0 top-0 flex items-center bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-2 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200",
                            children: (0,
                            v.jsx)(ny.u, {
                                label: o.formatMessage(r8.suggestionTooltip),
                                side: "top",
                                children: (0,
                                v.jsx)(eo.ZP, {
                                    icon: G.LbG,
                                    size: "small"
                                })
                            })
                        })]
                    }, n)
                })
            })
        }
        var an = "prompt-textarea"
          , at = j.Z.div(r3(), function(e) {
            return e.$historyDisabled ? "bg-gray-900 text-white shadow-[0_0_15px_rgba(0,0,0,0.10)] dark:bg-gray-900 dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]" : ""
        }, function(e) {
            return e.$disabled && "bg-gray-100"
        })
          , ar = j.Z.button(r5(), function(e) {
            return e.$nudgeBottom && "disabled:bottom-0.5 md:disabled:bottom-1"
        }, function(e) {
            return e.$onRightSide ? "right-1 md:right-2" : "left-1 md:left-2"
        })
          , aa = j.Z.div(r4(), function(e) {
            return e.$shouldRetry ? "" : "h-full"
        })
          , ai = t(56060)
          , ao = t(97703)
          , as = (0,
        y.createContext)()
          , al = function(e) {
            return (0,
            M.oR)((0,
            y.useContext)(as), e)
        }
          , au = t(1215);
        function ac() {
            var e = (0,
            p._)(["bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase"]);
            return ac = function() {
                return e
            }
            ,
            e
        }
        var ad = j.Z.span(ac())
          , af = t(96237)
          , ah = t(90209)
          , ag = t(68789);
        function am() {
            var e = (0,
            p._)(["absolute w-[2.5px] h-5 -rotate-45 -top-0.5 left-1.5 bg-gray-500 border-[0.5px] border-gray-100 group-hover/toggle:bg-red-500 dark:border-gray-900"]);
            return am = function() {
                return e
            }
            ,
            e
        }
        function ap() {
            var e = (0,
            p._)(["flex flex-col rounded-md border border-gray-100 bg-white text-left shadow-[0_1px_7px_0_rgba(0,0,0,0.03)] dark:text-gray-100 dark:bg-gray-900 dark:border-gray-900 dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]"]);
            return ap = function() {
                return e
            }
            ,
            e
        }
        function av() {
            var e = (0,
            p._)(["px-5 flex gap-1 flex-col py-4 whitespace-pre-line"]);
            return av = function() {
                return e
            }
            ,
            e
        }
        function ax() {
            var e = (0,
            p._)(["block"]);
            return ax = function() {
                return e
            }
            ,
            e
        }
        function ab() {
            var e = (0,
            p._)(["block text-xs text-gray-500"]);
            return ab = function() {
                return e
            }
            ,
            e
        }
        function ay(e) {
            var n = e.items
              , t = e.value
              , r = e.onChange
              , a = (0,
            m._)((0,
            y.useState)(function() {
                return n.reduce(function(e, n) {
                    if (n.options.length > 0) {
                        if (n.options.some(function(e) {
                            return e.value === t
                        }))
                            return e[n.value] = t,
                            e;
                        e[n.value] = n.options[0].value
                    }
                    return e
                }, {})
            }), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            y.useCallback)(function(e, a) {
                var s = t;
                void 0 !== a && o(function(n) {
                    return (0,
                    S._)((0,
                    h._)({}, n), (0,
                    af._)({}, e, a))
                }),
                (s = void 0 !== a ? a : (null == i ? void 0 : i[e]) !== void 0 && n.some(function(n) {
                    return n.value === e && n.options.some(function(n) {
                        return n.value === i[e]
                    })
                }) ? i[e] : e) !== t && r(s)
            }, [n, i, r, t]);
            return (0,
            v.jsx)("div", {
                className: "relative flex rounded-xl bg-gray-100 p-1 w-radix-navigation-menu-viewport dark:bg-gray-900",
                children: (0,
                v.jsx)("ul", {
                    className: "flex list-none gap-1",
                    children: n.map(function(e, r) {
                        var a, o, l, u, c, d, f = (null == i ? void 0 : i[e.value]) !== void 0 ? i[e.value] : null === (o = e.options) || void 0 === o ? void 0 : null === (l = o[0]) || void 0 === l ? void 0 : l.value, h = null !== (u = e.options.find(function(e) {
                            return e.value === f
                        })) && void 0 !== u ? u : e.options[0], g = null !== (c = null == h ? void 0 : h.icon) && void 0 !== c ? c : null, m = t === e.value || e.options.some(function(e) {
                            return e.value === t
                        });
                        return (0,
                        v.jsx)(aC, {
                            item: e,
                            isSelected: m,
                            currentValue: t,
                            defaultOption: null == h ? void 0 : h.value,
                            onChange: s,
                            currentIcon: g,
                            displayCurrentValue: m && e.showSelectedValueBelow && null !== (d = null == h ? void 0 : h.name) && void 0 !== d ? d : "",
                            contentAlign: (a = n.length,
                            0 === r ? "start" : r === a - 1 ? "end" : "center")
                        }, r)
                    })
                })
            })
        }
        function aj(e) {
            var n = e.item
              , t = e.isSelected
              , r = e.isOpen
              , a = e.onChange
              , i = e.currentIcon
              , o = e.displayCurrentValue
              , s = n.options.length > 1
              , l = null != i ? i : n.icon;
            return (0,
            v.jsxs)("div", {
                className: (0,
                F.Z)("relative flex items-center gap-1 rounded-lg border px-5 py-3 md:gap-2 md:px-8 md:py-3", "group/toggle", t ? "border-black/10 bg-white shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] dark:border-gray-600/50 dark:bg-white/10" : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-800 dark:hover:bg-white/5 hover:dark:text-gray-100"),
                onClick: function() {
                    n.disabled || a(n.value)
                },
                children: [(0,
                v.jsxs)("span", {
                    className: (0,
                    F.Z)("relative max-[370px]:hidden", n.disabled && "group-hover/toggle:text-red-500"),
                    children: [null != l && (0,
                    v.jsx)(eo.ZP, {
                        icon: l,
                        className: (0,
                        F.Z)(t && n.activeClass)
                    }), n.disabled && (0,
                    v.jsx)(aN, {})]
                }), (0,
                v.jsx)("span", {
                    className: "truncate text-sm",
                    children: n.name
                }), !n.disabled && s && (0,
                v.jsx)(eo.ZP, {
                    icon: void 0 !== r && r ? G.rH8 : G.bTu,
                    strokeWidth: 2
                }), "" !== o && (0,
                v.jsx)("span", {
                    className: "absolute left-0 top-full mt-4 w-full truncate overflow-ellipsis text-sm text-gray-500",
                    children: o
                })]
            })
        }
        function aC(e) {
            var n = e.item
              , t = e.isSelected
              , r = e.defaultOption
              , a = e.onChange
              , i = e.currentIcon
              , o = e.currentValue
              , s = e.displayCurrentValue
              , l = e.contentAlign
              , u = (0,
            m._)((0,
            y.useState)(void 0), 2)
              , c = u[0]
              , d = u[1]
              , f = (0,
            y.useRef)(null)
              , h = n.options.length > 1
              , g = !(void 0 === n.description && void 0 === n.disclaimer);
            return (0,
            v.jsx)(ag.fC, {
                open: c,
                modal: !1,
                children: (0,
                v.jsxs)("li", {
                    onMouseEnter: function() {
                        return d(!0)
                    },
                    onMouseLeave: function() {
                        return d(void 0)
                    },
                    children: [(0,
                    v.jsx)(ag.xz, {
                        ref: f,
                        children: (0,
                        v.jsx)(aj, {
                            item: n,
                            isSelected: t,
                            onChange: a,
                            currentIcon: i,
                            displayCurrentValue: s
                        })
                    }), (0,
                    v.jsx)(ag.Uv, {
                        children: (0,
                        v.jsx)(ag.VY, {
                            className: "w-full min-w-[300px] max-w-[90vw] select-none pt-4 sm:max-w-xs",
                            align: l,
                            alignOffset: -6,
                            onCloseAutoFocus: function(e) {
                                c || e.preventDefault()
                            },
                            onEscapeKeyDown: function(e) {
                                var n;
                                e.preventDefault(),
                                null === (n = f.current) || void 0 === n || n.focus()
                            },
                            children: (0,
                            v.jsxs)(aP, {
                                children: [g && (0,
                                v.jsx)(aw, {
                                    item: n
                                }), (h || !c) && (0,
                                v.jsx)(ak, {
                                    defaultOption: r,
                                    item: n,
                                    currentValue: o,
                                    onChange: function(e, n) {
                                        var t;
                                        a(e, n),
                                        d(void 0),
                                        null === (t = document.getElementById(an)) || void 0 === t || t.focus()
                                    },
                                    className: (0,
                                    F.Z)("text-sm", g && "border-t dark:border-gray-800")
                                })]
                            })
                        })
                    }, n.categoryId)]
                })
            })
        }
        function aw(e) {
            var n = e.item;
            return (0,
            v.jsxs)(aI, {
                className: "text-sm sm:text-base",
                children: [void 0 !== n.description && (0,
                v.jsx)(aS, {
                    children: n.description
                }), void 0 !== n.disclaimer && (0,
                v.jsx)(aZ, {
                    children: n.disclaimer
                })]
            })
        }
        function ak(e) {
            var n = e.item
              , t = e.className
              , r = e.onChange
              , a = e.currentValue
              , i = e.defaultOption;
            return (0,
            v.jsx)(ag.Ee, {
                defaultValue: i,
                value: a,
                className: t,
                children: n.options.map(function(e, t) {
                    return (0,
                    v.jsx)(a_, {
                        option: e,
                        selected: a === e.value,
                        active: i === e.value,
                        activeClass: n.activeClass,
                        iconClass: n.iconClass,
                        showBorder: t !== n.options.length - 1,
                        isDisabled: e.disabled,
                        onChange: function() {
                            e.disabled || r(n.value, e.value)
                        }
                    }, e.value)
                })
            })
        }
        function a_(e) {
            var n, t = e.option, r = e.selected, a = e.active, i = e.activeClass, o = e.iconClass, s = e.isDisabled, l = e.onChange, u = e.showBorder, c = a && !r ? eo.nQ : eo.HQ, d = null !== (n = t.activeIcon) && void 0 !== n ? n : t.icon;
            return (0,
            v.jsx)(ag.Rk, {
                asChild: !0,
                value: t.value,
                onClick: l,
                className: "select-none",
                children: (0,
                v.jsxs)("div", {
                    className: (0,
                    F.Z)("group/option relative flex w-full items-center gap-2 px-5 py-3 pr-9", {
                        "hover:bg-gray-50 dark:hover:bg-white/5": !s,
                        "text-gray-800 dark:text-gray-100": r || a,
                        "cursor-pointer": !s,
                        "border-b dark:border-gray-800": u
                    }),
                    children: [null != t.icon && null != d ? (0,
                    v.jsx)(eo.ZP, {
                        icon: r ? t.icon : d,
                        className: (0,
                        F.Z)("max-[370px]:hidden", !s && !r && o, r ? i : "text-gray-500")
                    }) : null, (0,
                    v.jsx)("span", {
                        className: (0,
                        F.Z)({
                            "truncate text-gray-500 dark:text-gray-300": !0,
                            "group-hover/option:text-gray-800 dark:group-hover/option:text-gray-100": !s,
                            "text-gray-800 dark:text-gray-100": a
                        }),
                        children: t.name
                    }), t.tags.map(function(e) {
                        return aT(e)
                    }), (0,
                    v.jsx)("span", {
                        className: (0,
                        F.Z)({
                            "absolute right-3 rounded-full p-1 text-blue-400": !0,
                            "opacity-0": !r && !s && !a,
                            "text-red-500": s
                        }),
                        children: (0,
                        v.jsx)(eo.ZP, {
                            icon: s ? ah.Z : c,
                            className: "h-5 w-5"
                        })
                    })]
                })
            })
        }
        var aM = new Set(["beta", "confidential", "alpha"])
          , aT = function(e) {
            return aM.has(e) && (0,
            v.jsx)("span", {
                className: (0,
                F.Z)("py-0.25 rounded px-1 text-sm font-medium capitalize", "beta" === e && "bg-blue-200 text-blue-500", "alpha" === e && "bg-blue-200 text-blue-500", "confidential" === e && "bg-red-200 text-red-800"),
                children: e
            }, e)
        }
          , aN = j.Z.span(am())
          , aP = j.Z.div(ap())
          , aI = j.Z.div(av())
          , aS = j.Z.span(ax())
          , aZ = j.Z.span(ab())
          , aR = t(92186);
        function aD(e) {
            var n = e.onModelChange
              , t = e.currentModel
              , r = (0,
            C.WS)()
              , a = (0,
            rw.BT)()
              , i = (0,
            aR.ZP)().items
              , o = (0,
            y.useCallback)(function(e) {
                a !== e && (n(e),
                r(w.s6.toggleModel, {
                    model: e
                }))
            }, [a, r, n]);
            return (0,
            v.jsx)(ay, {
                value: null == t ? void 0 : t.id,
                onChange: o,
                items: i
            })
        }
        var aE = t(12285)
          , aF = t(57526)
          , aL = t(99581)
          , aA = t(30892)
          , aB = t.n(aA)
          , aq = t(7361)
          , aU = t.n(aq);
        function aO(e) {
            var n = e.values
              , t = e.className
              , r = Object.keys(n)
              , a = Object.values(n);
            return (0,
            v.jsxs)("div", {
                className: (0,
                F.Z)("flex w-full items-stretch gap-2", t),
                children: [(0,
                v.jsx)("div", {
                    className: "flex w-1/2 flex-col justify-between gap-1 text-sm text-gray-600 dark:text-gray-300",
                    children: r.map(function(e, n) {
                        return (0,
                        v.jsx)("span", {
                            children: aB()(e)
                        }, n)
                    })
                }), (0,
                v.jsx)("div", {
                    className: "my-1.5 flex flex-1 flex-col justify-between gap-2",
                    children: a.map(function(e, n) {
                        var t = (0,
                        m._)(e, 2)
                          , r = t[0]
                          , a = t[1];
                        return (0,
                        v.jsx)(az, {
                            num: r,
                            max: a
                        }, n)
                    })
                })]
            })
        }
        function az(e) {
            var n = e.num
              , t = e.max
              , r = (0,
            y.useMemo)(function() {
                var e = aU()(Array(t), !1);
                return aU()(e, !0, 0, n)
            }, [t, n]);
            return (0,
            v.jsx)("div", {
                className: "flex w-full gap-1",
                children: r.map(function(e, n) {
                    return (0,
                    v.jsx)("div", {
                        className: (0,
                        F.Z)("h-2 w-full rounded-lg", e ? "bg-green-600" : "bg-gray-200 dark:bg-gray-600"),
                        children: e
                    }, n)
                })
            })
        }
        function aH() {
            var e = (0,
            p._)(["rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]"]);
            return aH = function() {
                return e
            }
            ,
            e
        }
        function aV() {
            var e = (0,
            p._)(["absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%]"]);
            return aV = function() {
                return e
            }
            ,
            e
        }
        function aW() {
            var e = (0,
            p._)(["absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4"]);
            return aW = function() {
                return e
            }
            ,
            e
        }
        function aG() {
            var e = (0,
            p._)(["flex items-center gap-2 truncate"]);
            return aG = function() {
                return e
            }
            ,
            e
        }
        function a$() {
            var e = (0,
            p._)(["h-6 w-6 shrink-0"]);
            return a$ = function() {
                return e
            }
            ,
            e
        }
        function aQ() {
            var e = (0,
            p._)(["absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100"]);
            return aQ = function() {
                return e
            }
            ,
            e
        }
        function aJ() {
            var e = (0,
            p._)(["absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100"]);
            return aJ = function() {
                return e
            }
            ,
            e
        }
        var aY = ["confidential", "alpha", "plus"];
        function aK(e) {
            var n = e.selectedOption
              , t = e.onChange
              , r = e.onAction
              , a = e.onOpen
              , i = e.onClose
              , o = e.dropdownRef
              , s = (0,
            g._)(e, ["selectedOption", "onChange", "onAction", "onOpen", "onClose", "dropdownRef"])
              , l = (0,
            y.useCallback)(function(e) {
                "string" == typeof e ? null == r || r(e) : t(e)
            }, [t, r]);
            return (0,
            v.jsx)(aE.R, {
                value: n.value,
                onChange: l,
                children: function(e) {
                    var t = e.open;
                    return (0,
                    v.jsx)(a0, (0,
                    h._)({
                        ref: o,
                        selectedLabel: (0,
                        v.jsxs)(v.Fragment, {
                            children: [n.title, n.tags.map(function(e) {
                                return a7(e)
                            }), n.customTags]
                        }),
                        open: t,
                        onOpen: a,
                        onClose: i
                    }, s))
                }
            })
        }
        function aX(e) {
            var n = e.selectedOptions
              , t = e.selectedLabel
              , r = e.onChange
              , a = e.onAction
              , i = e.onOpen
              , o = e.onClose
              , s = e.dropdownRef
              , l = (0,
            g._)(e, ["selectedOptions", "selectedLabel", "onChange", "onAction", "onOpen", "onClose", "dropdownRef"])
              , u = (0,
            y.useCallback)(function(e) {
                if (e.some(function(e) {
                    return "string" == typeof e
                })) {
                    var n = e.find(function(e) {
                        return "string" == typeof e
                    });
                    null == a || a(n)
                } else
                    r(e)
            }, [r, a]);
            return (0,
            v.jsx)(aE.R, {
                value: n.map(function(e) {
                    return e.value
                }),
                multiple: !0,
                onChange: u,
                children: function(e) {
                    var r = e.open;
                    return (0,
                    v.jsx)(a0, (0,
                    h._)({
                        ref: s,
                        selectedLabel: t || "".concat(n.length, " selected"),
                        open: r,
                        onOpen: i,
                        onClose: o,
                        multiple: !0
                    }, l))
                }
            })
        }
        var a0 = (0,
        y.forwardRef)(function(e, n) {
            var t = e.name
              , r = e.selectedLabel
              , a = e.open
              , i = e.options
              , o = e.actions
              , s = e.multiple
              , l = e.isLoading
              , u = e.loadingState
              , c = e.header
              , d = e.onOpen
              , f = e.onClose
              , h = e.theme
              , g = (0,
            y.useRef)(null)
              , m = (0,
            y.useRef)(null)
              , p = (0,
            X.oc)();
            (0,
            y.useImperativeHandle)(n, function() {
                return {
                    open: function() {
                        if (!a) {
                            var e;
                            null === (e = g.current) || void 0 === e || e.click()
                        }
                    },
                    close: function() {
                        if (a) {
                            var e;
                            null === (e = g.current) || void 0 === e || e.click()
                        }
                    }
                }
            }, [a]);
            var x = l ? u || (0,
            v.jsx)("div", {
                className: "flex h-[42px] items-center justify-center",
                children: (0,
                v.jsx)(es.Z, {})
            }) : (0,
            v.jsxs)(v.Fragment, {
                children: [c, (0,
                v.jsxs)(aE.R.Options, {
                    className: "overflow-auto",
                    children: [i.map(function(e, n) {
                        return (0,
                        v.jsx)(a1, {
                            value: e.value,
                            disabled: e.disabled,
                            theme: h,
                            children: function(n) {
                                var t = n.selected
                                  , r = n.active;
                                return (0,
                                v.jsxs)(v.Fragment, {
                                    children: [(0,
                                    v.jsxs)(ir, {
                                        children: [e.imageUrl && (0,
                                        v.jsx)(ia, {
                                            children: (0,
                                            v.jsx)(eG.Z, {
                                                url: e.imageUrl,
                                                name: e.title,
                                                size: "100%"
                                            })
                                        }), (0,
                                        v.jsxs)("span", {
                                            className: (0,
                                            F.Z)(t && !s && "font-semibold", "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"),
                                            children: [e.title, e.tags.map(function(e) {
                                                return a7(e)
                                            }), e.customTags]
                                        })]
                                    }), s && !e.disabled ? (0,
                                    v.jsx)(a3, {
                                        theme: h,
                                        selected: t
                                    }) : t && (0,
                                    v.jsx)(a2, {
                                        theme: h,
                                        icon: "mini" === h ? eo.HQ : G.UgA
                                    }), e.disabled && (0,
                                    v.jsx)(a2, {
                                        theme: h,
                                        icon: aF.Z,
                                        className: "text-red-700 dark:text-red-500"
                                    }), r && p && (0,
                                    aL.createPortal)((0,
                                    v.jsx)(a4, {
                                        option: e,
                                        dropdownRef: m
                                    }), document.body)]
                                })
                            }
                        }, n)
                    }), null == o ? void 0 : o.map(function(e, n) {
                        return (0,
                        v.jsx)(a1, {
                            value: e.id,
                            theme: h,
                            children: function() {
                                return (0,
                                v.jsxs)(v.Fragment, {
                                    children: [(0,
                                    v.jsx)("div", {
                                        className: "text-gray-800 dark:text-gray-100",
                                        children: e.label
                                    }), (0,
                                    v.jsx)(a2, {
                                        theme: h,
                                        icon: e.icon
                                    })]
                                })
                            }
                        }, n)
                    })]
                })]
            });
            return (0,
            v.jsxs)("div", {
                className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4",
                children: [(0,
                v.jsxs)(aE.R.Button, {
                    ref: g,
                    onClick: a ? f : d,
                    className: (0,
                    F.Z)("relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left dark:bg-gray-800 sm:text-sm", "mini" === h ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 dark:hover:border-white/10" : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"),
                    children: ["mini" !== h && (0,
                    v.jsx)(aE.R.Label, {
                        className: "block text-xs text-gray-700 dark:text-gray-500",
                        children: t
                    }), (0,
                    v.jsx)("span", {
                        className: "inline-flex w-full truncate",
                        children: (0,
                        v.jsx)("span", {
                            className: "flex h-6 items-center gap-1 truncate",
                            children: r
                        })
                    }), (0,
                    v.jsx)("span", {
                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                        children: (0,
                        v.jsx)(eo.ZP, {
                            icon: G.bTu,
                            className: " text-gray-400",
                            "aria-hidden": "true"
                        })
                    })]
                }), (0,
                v.jsx)(eB.u, {
                    show: a,
                    as: y.Fragment,
                    leave: "transition ease-in duration-100",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: (0,
                    v.jsx)(a6, {
                        ref: m,
                        children: x
                    })
                })]
            })
        });
        function a1(e) {
            var n = e.value
              , t = e.disabled
              , r = e.children
              , a = e.theme;
            return (0,
            v.jsx)(aE.R.Option, {
                className: function(e) {
                    var n = e.active;
                    return (0,
                    F.Z)("mini" === a ? ie : it, n && !t ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900", t && "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100")
                },
                value: n,
                children: r
            })
        }
        function a2(e) {
            var n = e.icon
              , t = e.className
              , r = e.theme;
            return (0,
            v.jsx)("mini" === r ? ii : io, {
                children: (0,
                v.jsx)(eo.ZP, {
                    icon: n,
                    className: (0,
                    F.Z)("h-5 w-5", t),
                    "aria-hidden": "true"
                })
            })
        }
        function a3(e) {
            var n = e.selected
              , t = e.disabled;
            return "mini" === e.theme ? (0,
            v.jsxs)(ii, {
                children: [(0,
                v.jsx)(eo.ZP, {
                    icon: n ? eo.HQ : eo.i9,
                    className: "h-5 w-5 text-blue-600",
                    strokeWidth: n ? 2.5 : 2
                }), !n && (0,
                v.jsx)(eo.ZP, {
                    icon: eo.nQ,
                    className: (0,
                    F.Z)("absolute h-5 w-5 text-blue-600 opacity-0 transition-opacity", !t && "group-hover:opacity-100")
                })]
            }) : (0,
            v.jsx)(io, {
                children: (0,
                v.jsx)("div", {
                    className: (0,
                    F.Z)("flex h-6 w-6 items-center justify-center rounded-full border transition-colors", n ? "border-transparent bg-green-600 text-white" : "border-black/5 dark:border-white/20"),
                    "aria-hidden": "true",
                    children: (0,
                    v.jsx)(eo.ZP, {
                        icon: G.UgA,
                        className: (0,
                        F.Z)("h-3 w-3 transition-opacity", n && "opacity-100", !n && "opacity-0", !n && !t && "group-hover:opacity-50"),
                        strokeWidth: n ? 2.5 : 2
                    })
                })
            })
        }
        function a5(e) {
            var n = e.showCheckbox
              , t = e.theme;
            return (0,
            v.jsxs)("div", {
                className: (0,
                F.Z)("mini" === t ? ie : it, "cursor-auto"),
                children: [(0,
                v.jsxs)(ir, {
                    children: [(0,
                    v.jsx)(ia, {
                        children: (0,
                        v.jsx)("div", {
                            className: "h-full w-full rounded-sm bg-gray-200"
                        })
                    }), (0,
                    v.jsx)("div", {
                        className: "h-[12px] w-[88px] rounded-sm bg-gray-100"
                    })]
                }), n && (0,
                v.jsx)(a3, {
                    theme: t,
                    selected: !1,
                    disabled: !0
                })]
            })
        }
        function a4(e) {
            var n = e.option
              , t = e.dropdownRef
              , r = (0,
            m._)((0,
            y.useState)(), 2)
              , a = r[0]
              , i = r[1];
            (0,
            y.useEffect)(function() {
                var e = function() {
                    if (t.current) {
                        var e = t.current.getBoundingClientRect();
                        i({
                            top: e.top,
                            left: e.left - 260,
                            minHeight: e.height
                        })
                    }
                };
                return e(),
                window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }, [t]);
            var o = n.value.properties
              , s = (0,
            y.useMemo)(function() {
                return o ? (0,
                v.jsx)(aO, {
                    values: o,
                    className: "mt-auto"
                }) : null
            }, [o]);
            return a ? (0,
            v.jsxs)(a9, {
                style: {
                    width: 260,
                    minHeight: a.minHeight,
                    top: a.top,
                    left: a.left
                },
                children: [n.disabled && (0,
                v.jsx)(eo.ZP, {
                    icon: aF.Z,
                    size: "medium",
                    className: "text-red-700 dark:text-red-500"
                }), n.imageUrl && (0,
                v.jsx)(eG.Z, {
                    url: n.imageUrl,
                    name: n.title,
                    size: 70
                }), (0,
                v.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [n.title, " ", n.tags.map(function(e) {
                        return a7(e)
                    }), " ", n.customTags]
                }), (0,
                v.jsx)("div", {
                    className: "whitespace-pre-line text-xs",
                    children: n.description
                }), !n.disabled && s]
            }) : null
        }
        var a7 = function(e) {
            return aY.includes(e) && (0,
            v.jsx)("span", {
                className: (0,
                F.Z)("py-0.25 rounded px-1 text-[10px] font-semibold uppercase", "confidential" === e && "bg-red-200 text-red-800", "alpha" === e && "bg-blue-200 text-blue-500", "plus" === e && "bg-yellow-200 text-yellow-900"),
                children: e
            }, e)
        }
          , a8 = j.Z.div(aH())
          , a6 = (0,
        j.Z)(a8)(aV())
          , a9 = (0,
        j.Z)(a8)(aW())
          , ie = "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20"
          , it = "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20"
          , ir = j.Z.span(aG())
          , ia = j.Z.span(a$())
          , ii = j.Z.span(aQ())
          , io = j.Z.span(aJ())
          , is = t(20485);
        function il() {
            var e = (0,
            p._)(["mt-4 flex flex-col gap-4"]);
            return il = function() {
                return e
            }
            ,
            e
        }
        function iu() {
            var e = (0,
            p._)(["text-sm text-red-500"]);
            return iu = function() {
                return e
            }
            ,
            e
        }
        var ic = j.Z.div(il())
          , id = j.Z.div(iu());
        function ih(e) {
            var n = e.onClickInstall
              , t = e.onInstallLocalhost
              , r = e.onClose
              , a = (0,
            m._)((0,
            y.useState)(), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            m._)((0,
            y.useState)(), 2)
              , l = s[0]
              , u = s[1]
              , c = (0,
            m._)((0,
            y.useState)(!1), 2)
              , d = c[0]
              , f = c[1]
              , h = (0,
            y.useCallback)(function(e) {
                o(e)
            }, [])
              , g = (0,
            y.useCallback)(function() {
                f(!0)
            }, []);
            return d && (null == i ? void 0 : i.scrapeManifestResponse.plugin) ? (0,
            v.jsx)(ix, {
                plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
                onClickInstall: n,
                onClose: r
            }) : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin) ? (0,
            v.jsx)(iv, {
                plugin: i.scrapeManifestResponse.plugin,
                manifestAccessToken: i.manifestAccessToken,
                verificationTokens: l,
                onReadyToInstall: g,
                onClose: r
            }) : i ? (0,
            v.jsx)(ip, {
                loadManifestResult: i,
                onRefetch: h,
                onSubmitAuthInfo: u,
                onReadyToInstall: g,
                onInstallLocalhost: t,
                onClose: r
            }) : (0,
            v.jsx)(ig, {
                onFetch: h,
                onClose: r
            })
        }
        function ig(e) {
            var n, t = e.onFetch, r = e.onClose, a = (0,
            eu.kP)().session, i = (0,
            m._)((0,
            y.useState)(!1), 2), o = i[0], s = i[1], l = (0,
            m._)((0,
            y.useState)("bearer"), 2), u = l[0], c = l[1], d = (0,
            m._)((0,
            y.useState)(), 2), f = d[0], h = d[1], g = (0,
            y.useRef)(null), p = (0,
            y.useRef)(null), x = ib(), b = x.fetchManifestAndSpec, j = x.isLoading;
            (0,
            y.useEffect)(function() {
                var e;
                null === (e = g.current) || void 0 === e || e.focus()
            }, []);
            var C = (0,
            y.useCallback)(function() {
                s(function(e) {
                    return !e
                })
            }, [])
              , w = (0,
            y.useCallback)(function(e) {
                c(e.target.value)
            }, [])
              , k = (0,
            y.useCallback)((0,
            nl._)(function() {
                var e, n, r;
                return (0,
                nu.Jh)(this, function(a) {
                    return (r = null === (e = g.current) || void 0 === e ? void 0 : e.value) ? (b({
                        domain: r,
                        manifestAccessToken: o ? {
                            authorization_type: u,
                            token: (null === (n = p.current) || void 0 === n ? void 0 : n.value) || ""
                        } : void 0,
                        onSuccess: t,
                        onError: function(e) {
                            return h((null == e ? void 0 : e.message) || "Couldn't find manifest.")
                        }
                    }),
                    [2]) : (h("Please provide a domain."),
                    [2])
                })
            }), [b, t, u, o]);
            return (0,
            v.jsx)(e9.ZP, {
                isOpen: !0,
                onModalClose: r,
                type: "success",
                title: "Enter your website domain",
                primaryButton: (0,
                v.jsx)(e9.mH, {
                    title: "Find manifest file",
                    color: "primary",
                    onClick: k,
                    loading: j
                }),
                secondaryButton: (0,
                v.jsx)(e9.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: r
                }),
                children: (0,
                v.jsxs)(ic, {
                    children: [(0,
                    v.jsxs)("div", {
                        children: [(0,
                        v.jsx)("a", {
                            href: "https://platform.openai.com/docs/plugins/getting-started",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-green-600",
                            children: "Visit our documentation to learn how to build a plugin."
                        }), " ", "If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your ", "plugin's", " manifest, your plugin will be removed from the store, and you will need to", " ", (0,
                        v.jsx)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-green-600",
                            href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                            children: "resubmit it for review"
                        }), "."]
                    }), (0,
                    v.jsx)(nh, {
                        ref: g,
                        name: "url",
                        displayName: "Domain",
                        placeholder: "ex: openai.com or localhost:3000",
                        onPressEnter: k,
                        autoFocus: !0
                    }), (null == a ? void 0 : null === (n = a.user) || void 0 === n ? void 0 : n.email.endsWith("@openai.com")) && (0,
                    v.jsxs)(v.Fragment, {
                        children: [(0,
                        v.jsxs)("div", {
                            role: "button",
                            className: "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                            onClick: C,
                            children: [(0,
                            v.jsx)("div", {
                                children: "My file requires authentication"
                            }), (0,
                            v.jsx)(eo.ZP, {
                                icon: o ? G.rH8 : G.bTu
                            })]
                        }), o && (0,
                        v.jsxs)(v.Fragment, {
                            children: [(0,
                            v.jsxs)("div", {
                                className: "flex flex-col gap-2 text-sm",
                                children: [(0,
                                v.jsx)("div", {
                                    children: "Authentication type"
                                }), (0,
                                v.jsxs)("div", {
                                    className: "flex gap-6",
                                    children: [(0,
                                    v.jsx)(im, {
                                        label: "Bearer",
                                        value: "bearer",
                                        checked: "bearer" === u,
                                        onChange: w
                                    }), (0,
                                    v.jsx)(im, {
                                        label: "Basic",
                                        value: "basic",
                                        checked: "basic" === u,
                                        onChange: w
                                    })]
                                })]
                            }), (0,
                            v.jsxs)("div", {
                                className: "flex flex-col gap-2 text-sm",
                                children: [(0,
                                v.jsx)("div", {
                                    children: "Access token"
                                }), (0,
                                v.jsx)(nh, {
                                    ref: p,
                                    name: "manifestToken",
                                    onPressEnter: k
                                })]
                            })]
                        })]
                    }), f && (0,
                    v.jsx)(id, {
                        children: f
                    })]
                })
            })
        }
        function im(e) {
            var n = e.label
              , t = e.value
              , r = e.checked
              , a = e.onChange;
            return (0,
            v.jsxs)("label", {
                className: "flex items-center gap-2",
                children: [(0,
                v.jsx)("input", {
                    name: "manifestAuthType",
                    type: "radio",
                    value: t,
                    checked: r,
                    onChange: a,
                    className: "text-green-600 focus:ring-green-600"
                }), n]
            })
        }
        function ip(e) {
            var n = e.loadManifestResult
              , t = e.onRefetch
              , r = e.onSubmitAuthInfo
              , a = e.onReadyToInstall
              , i = e.onInstallLocalhost
              , o = e.onClose
              , s = n.domain
              , l = n.manifestAccessToken
              , u = n.scrapeManifestResponse
              , c = n.apiValidationInfo
              , d = u.plugin
              , f = u.manifest_validation_info
              , h = (0,
            m._)((0,
            y.useState)(), 2)
              , g = h[0]
              , p = h[1]
              , b = (0,
            m._)((0,
            y.useState)(!1), 2)
              , j = b[0]
              , C = b[1]
              , w = (0,
            y.useRef)(null)
              , k = (0,
            y.useRef)(null)
              , _ = (0,
            y.useRef)(null)
              , M = ib()
              , T = M.fetchManifestAndSpec
              , N = M.isLoading
              , P = (0,
            x.NL)()
              , I = d && nW(d)
              , S = (null == d ? void 0 : d.manifest.auth.type) === "service_http"
              , Z = (null == d ? void 0 : d.manifest.auth.type) === "oauth"
              , R = f.errors && f.errors.length > 0 || (null == c ? void 0 : c.errors) && (null == c ? void 0 : c.errors.length) > 0
              , D = (0,
            y.useCallback)((0,
            nl._)(function() {
                var e, n, u, c, f;
                return (0,
                nu.Jh)(this, function(h) {
                    switch (h.label) {
                    case 0:
                        if (!R)
                            return [3, 1];
                        return T({
                            domain: s,
                            manifestAccessToken: l,
                            onSuccess: t,
                            onError: function(e) {
                                return p((null == e ? void 0 : e.message) || "Couldn't find manifest.")
                            }
                        }),
                        [3, 15];
                    case 1:
                        if (!I)
                            return [3, 2];
                        return nA(d, P, ["installedAip"]),
                        i(d),
                        [3, 15];
                    case 2:
                        if (!S)
                            return [3, 8];
                        if (!(null === (e = w.current) || void 0 === e ? void 0 : e.value))
                            return p("Please provide your service access token."),
                            [2];
                        h.label = 3;
                    case 3:
                        return h.trys.push([3, 5, 6, 7]),
                        C(!0),
                        [4, Y.ZP.setPluginServiceHttpToken({
                            id: d.id,
                            serviceAccessToken: w.current.value
                        })];
                    case 4:
                        return r(h.sent().verification_tokens),
                        [3, 7];
                    case 5:
                        return h.sent(),
                        p("Error setting access token."),
                        [3, 7];
                    case 6:
                        return C(!1),
                        [7];
                    case 7:
                        return [3, 15];
                    case 8:
                        if (!Z)
                            return [3, 14];
                        if (c = null === (n = k.current) || void 0 === n ? void 0 : n.value,
                        f = null === (u = _.current) || void 0 === u ? void 0 : u.value,
                        !c || !f)
                            return p("Please provide your OAuth credentials."),
                            [2];
                        h.label = 9;
                    case 9:
                        return h.trys.push([9, 11, 12, 13]),
                        [4, Y.ZP.setPluginOAuthClientCredentials({
                            id: d.id,
                            clientId: k.current.value,
                            clientSecret: _.current.value
                        })];
                    case 10:
                        return r(h.sent().verification_tokens),
                        [3, 13];
                    case 11:
                        return h.sent(),
                        p("Error setting OAuth credentials."),
                        [3, 13];
                    case 12:
                        return C(!1),
                        [7];
                    case 13:
                        return [3, 15];
                    case 14:
                        d ? a(d) : o(),
                        h.label = 15;
                    case 15:
                        return [2]
                    }
                })
            }), [S, Z, d, s, l, R, I, P, T, t, r, a, i, o]);
            return (0,
            v.jsx)(e9.ZP, {
                isOpen: !0,
                onModalClose: o,
                type: "success",
                title: "Found plugin",
                primaryButton: (0,
                v.jsx)(e9.mH, {
                    title: R ? "Refetch manifest" : I ? "Install localhost plugin" : "Next",
                    color: "primary",
                    onClick: D,
                    loading: j || N
                }),
                secondaryButton: (R || S || Z) && (0,
                v.jsx)(e9.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: o
                }),
                children: (0,
                v.jsxs)(ic, {
                    children: [(0,
                    v.jsx)(nS, {
                        manifestValidationInfo: f
                    }), c && (0,
                    v.jsx)(nZ, {
                        apiValidationInfo: c
                    }), d && (0,
                    v.jsx)(nI, {
                        plugin: d
                    }), S && !R && (0,
                    v.jsxs)("div", {
                        children: [(0,
                        v.jsx)("div", {
                            className: "text-sm",
                            children: "Enter your service access token:"
                        }), (0,
                        v.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            v.jsx)(nh, {
                                ref: w,
                                name: "serviceToken",
                                placeholder: "Service access token",
                                autoComplete: "off",
                                onPressEnter: D,
                                autoFocus: !0
                            })
                        })]
                    }), Z && !R && (0,
                    v.jsxs)("div", {
                        children: [(0,
                        v.jsx)("div", {
                            className: "text-sm",
                            children: "Enter your OAuth credentials:"
                        }), (0,
                        v.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            v.jsx)(nh, {
                                ref: k,
                                name: "clientId",
                                placeholder: "Client ID",
                                autoComplete: "off",
                                onPressEnter: D,
                                autoFocus: !0
                            })
                        }), (0,
                        v.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            v.jsx)(nh, {
                                ref: _,
                                type: "password",
                                name: "clientSecret",
                                placeholder: "Client secret",
                                autoComplete: "off",
                                onPressEnter: D
                            })
                        })]
                    }), g && (0,
                    v.jsx)(id, {
                        children: g
                    })]
                })
            })
        }
        function iv(e) {
            var n = e.plugin
              , t = e.manifestAccessToken
              , r = e.verificationTokens
              , a = e.onReadyToInstall
              , i = e.onClose
              , o = (0,
            m._)((0,
            y.useState)(), 2)
              , s = o[0]
              , l = o[1]
              , u = (0,
            m._)((0,
            y.useState)(!1), 2)
              , c = u[0]
              , d = u[1]
              , f = (0,
            y.useCallback)((0,
            nl._)(function() {
                var e, i;
                return (0,
                nu.Jh)(this, function(o) {
                    switch (o.label) {
                    case 0:
                        return o.trys.push([0, 2, 3, 4]),
                        d(!0),
                        [4, Y.ZP.scrapePluginManifest({
                            domain: n.domain,
                            manifestAccessToken: t
                        })];
                    case 1:
                        if (e = o.sent().plugin) {
                            for (var s in i = "service_http" === e.manifest.auth.type || "oauth" === e.manifest.auth.type ? e.manifest.auth.verification_tokens : {},
                            r)
                                if (r[s] !== i[s])
                                    return l('Please add the "'.concat(s, '" token to your manifest file.')),
                                    [2];
                            a(e)
                        } else
                            l("Error creating plugin.");
                        return [3, 4];
                    case 2:
                        return o.sent(),
                        l("Error creating plugin."),
                        [3, 4];
                    case 3:
                        return d(!1),
                        [7];
                    case 4:
                        return [2]
                    }
                })
            }), [n, t, r, a]);
            return (0,
            v.jsx)(e9.ZP, {
                isOpen: !0,
                onModalClose: i,
                type: "success",
                title: "Add verification token",
                primaryButton: (0,
                v.jsx)(e9.mH, {
                    title: "Verify tokens",
                    color: "primary",
                    onClick: f,
                    loading: c
                }),
                secondaryButton: (0,
                v.jsx)(e9.mH, {
                    title: "I'll add the tokens later",
                    color: "neutral",
                    onClick: i
                }),
                children: (0,
                v.jsxs)(ic, {
                    children: [(0,
                    v.jsx)(nI, {
                        plugin: n
                    }), (0,
                    v.jsx)("div", {
                        className: "text-sm",
                        children: "Add the following verification tokens to your manifest file:"
                    }), (0,
                    v.jsx)("pre", {
                        className: "text-sm",
                        children: JSON.stringify(r, null)
                    }), s && (0,
                    v.jsx)(id, {
                        children: s
                    })]
                })
            })
        }
        function ix(e) {
            var n = e.plugin
              , t = e.onClickInstall
              , r = e.onClose
              , a = (0,
            y.useCallback)(function() {
                t(n)
            }, [n, t]);
            return (0,
            v.jsx)(e9.ZP, {
                isOpen: !0,
                onModalClose: r,
                type: "success",
                title: "Ready to install",
                primaryButton: (0,
                v.jsx)(e9.mH, {
                    title: "Install for me",
                    color: "primary",
                    onClick: a
                }),
                secondaryButton: (0,
                v.jsx)(e9.mH, {
                    title: "Install later",
                    color: "neutral",
                    onClick: r
                }),
                children: (0,
                v.jsx)(ic, {
                    children: (0,
                    v.jsxs)("div", {
                        className: "text-sm",
                        children: ["Your unverified plugin can now be installed by", " ", (0,
                        v.jsx)("a", {
                            href: "https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-green-600",
                            children: "up to 15 developers"
                        }), ". Once ", "you're", " ready to make your plugin available to everyone, you can", " ", (0,
                        v.jsx)("a", {
                            href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-green-600",
                            children: "submit your plugin for review"
                        }), "."]
                    })
                })
            })
        }
        function ib() {
            var e, n = (0,
            m._)((0,
            y.useState)(!1), 2), t = n[0], r = n[1];
            return {
                fetchManifestAndSpec: (0,
                y.useCallback)((e = (0,
                nl._)(function(e) {
                    var n, t, a, i, o, s, l, u, c;
                    return (0,
                    nu.Jh)(this, function(d) {
                        switch (d.label) {
                        case 0:
                            n = e.domain,
                            t = e.manifestAccessToken,
                            a = e.onSuccess,
                            i = e.onError,
                            o = nG(n),
                            d.label = 1;
                        case 1:
                            if (d.trys.push([1, 10, 11, 12]),
                            r(!0),
                            !o)
                                return [3, 3];
                            return [4, n$(o)];
                        case 2:
                            if (void 0 === (s = d.sent()))
                                return [2];
                            return a({
                                domain: o,
                                scrapeManifestResponse: {
                                    plugin: s.plugin,
                                    manifest_validation_info: s.manifest_validation_info
                                },
                                apiValidationInfo: s.api_validation_info
                            }),
                            [3, 9];
                        case 3:
                            return [4, Y.ZP.scrapePluginManifest({
                                domain: n,
                                manifestAccessToken: t
                            })];
                        case 4:
                            if (!(l = d.sent()).plugin)
                                return [3, 8];
                            d.label = 5;
                        case 5:
                            return d.trys.push([5, 7, , 8]),
                            [4, Y.ZP.getPluginApi({
                                id: l.plugin.id
                            })];
                        case 6:
                            return u = d.sent().api_validation_info,
                            [3, 8];
                        case 7:
                            return d.sent(),
                            [3, 8];
                        case 8:
                            a({
                                domain: n,
                                scrapeManifestResponse: l,
                                apiValidationInfo: u,
                                manifestAccessToken: t
                            }),
                            d.label = 9;
                        case 9:
                            return [3, 12];
                        case 10:
                            return c = d.sent(),
                            i(o ? c : void 0),
                            [3, 12];
                        case 11:
                            return r(!1),
                            [7];
                        case 12:
                            return [2]
                        }
                    })
                }),
                function(n) {
                    return e.apply(this, arguments)
                }
                ), []),
                isLoading: t
            }
        }
        var iy = t(5759);
        function ij(e) {
            var n = e.onConfirm
              , t = e.onClose;
            return (0,
            v.jsx)(e9.ZP, {
                isOpen: !0,
                onModalClose: t,
                type: "success",
                title: "Unverified plugin",
                primaryButton: (0,
                v.jsx)(e9.mH, {
                    title: "Continue",
                    color: "primary",
                    onClick: n
                }),
                secondaryButton: (0,
                v.jsx)(e9.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: t
                }),
                children: (0,
                v.jsx)(ic, {
                    children: (0,
                    v.jsx)(iy.I, {
                        children: (0,
                        v.jsx)(iy.Z, {
                            icon: "\uD83D\uDEA8",
                            children: "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding."
                        })
                    })
                })
            })
        }
        function iC(e) {
            var n = e.plugin
              , t = e.onInstall
              , r = e.onClose
              , a = (0,
            m._)((0,
            y.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            m._)((0,
            y.useState)(n), 2)
              , l = s[0]
              , u = s[1]
              , c = (0,
            y.useCallback)(function() {
                o(!0)
            }, []);
            return l ? i ? (0,
            v.jsx)(ik, {
                plugin: l,
                onInstall: t,
                onClose: r
            }) : (0,
            v.jsx)(ij, {
                onConfirm: c,
                onClose: r
            }) : (0,
            v.jsx)(iw, {
                onLoad: u,
                onClose: r
            })
        }
        function iw(e) {
            var n = e.onLoad
              , t = e.onClose
              , r = (0,
            y.useRef)(null)
              , a = (0,
            m._)((0,
            y.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            m._)((0,
            y.useState)(), 2)
              , l = s[0]
              , u = s[1];
            (0,
            y.useEffect)(function() {
                setTimeout(function() {
                    var e;
                    null === (e = r.current) || void 0 === e || e.focus()
                }, 50)
            }, []);
            var c = (0,
            y.useCallback)((0,
            nl._)(function() {
                var e, t, a;
                return (0,
                nu.Jh)(this, function(i) {
                    switch (i.label) {
                    case 0:
                        if (!(t = null === (e = r.current) || void 0 === e ? void 0 : e.value))
                            return u("Please provide a URL."),
                            [2];
                        if (nG(t))
                            return u('To add a localhost plugin, please go to "Develop your own plugin."'),
                            [2];
                        i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, 4, 5]),
                        o(!0),
                        [4, Y.ZP.getPluginByDomain({
                            domain: t
                        })];
                    case 2:
                        return (a = i.sent()) ? n(a) : u("That plugin doesn't exist."),
                        [3, 5];
                    case 3:
                        return i.sent(),
                        u("Couldn't find plugin."),
                        [3, 5];
                    case 4:
                        return o(!1),
                        [7];
                    case 5:
                        return [2]
                    }
                })
            }), [n, o, u]);
            return (0,
            v.jsx)(e9.ZP, {
                isOpen: !0,
                onModalClose: t,
                type: "success",
                title: "Install an unverified plugin",
                primaryButton: (0,
                v.jsx)(e9.mH, {
                    title: "Find plugin",
                    color: "primary",
                    onClick: c,
                    loading: i
                }),
                secondaryButton: (0,
                v.jsx)(e9.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: t
                }),
                children: (0,
                v.jsxs)(ic, {
                    children: [(0,
                    v.jsx)("div", {
                        children: "Please provide the website domain of the unverified plugin you'd like to install."
                    }), (0,
                    v.jsx)(nh, {
                        ref: r,
                        name: "url",
                        placeholder: "openai.com",
                        onPressEnter: c
                    }), l && (0,
                    v.jsx)(id, {
                        children: l
                    })]
                })
            })
        }
        function ik(e) {
            var n = e.plugin
              , t = e.onInstall
              , r = e.onClose
              , a = (0,
            m._)((0,
            y.useState)(), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            m._)((0,
            y.useState)(!1), 2)
              , l = s[0]
              , u = s[1]
              , c = (0,
            y.useRef)(null)
              , d = nL({
                onSuccess: function(e) {
                    t(e),
                    r()
                },
                onError: function(e) {
                    o("Couldn't install plugin.")
                }
            })
              , f = n.manifest.name_for_human
              , h = "user_http" === n.manifest.auth.type
              , g = "oauth" === n.manifest.auth.type
              , p = (0,
            y.useCallback)((0,
            nl._)(function() {
                var e, t;
                return (0,
                nu.Jh)(this, function(r) {
                    switch (r.label) {
                    case 0:
                        if (!g)
                            return [3, 1];
                        return (e = nq(n)) ? window.location.href = e : o("Missing plugin configuration for ".concat(f, ".")),
                        [3, 8];
                    case 1:
                        if (!h)
                            return [3, 7];
                        if (!(null === (t = c.current) || void 0 === t ? void 0 : t.value))
                            return o("Please provide your credentials."),
                            [2];
                        r.label = 2;
                    case 2:
                        return r.trys.push([2, 4, 5, 6]),
                        u(!0),
                        [4, Y.ZP.setPluginUserHttpToken({
                            id: n.id,
                            userAccessToken: c.current.value
                        })];
                    case 3:
                        return r.sent(),
                        d(n.id),
                        [3, 6];
                    case 4:
                        return r.sent(),
                        o("Couldn't install plugin."),
                        [3, 6];
                    case 5:
                        return u(!1),
                        [7];
                    case 6:
                        return [3, 8];
                    case 7:
                        try {
                            u(!0),
                            d(n.id)
                        } catch (e) {
                            o("Couldn't install plugin.")
                        } finally {
                            u(!1)
                        }
                        r.label = 8;
                    case 8:
                        return [2]
                    }
                })
            }), [n, f, g, h, d]);
            return (0,
            v.jsx)(e9.ZP, {
                isOpen: !0,
                onModalClose: r,
                type: "success",
                title: "Unverified plugin",
                primaryButton: (0,
                v.jsx)(e9.mH, {
                    title: g ? "Log in with ".concat(f) : "Install plugin",
                    color: "primary",
                    onClick: p,
                    loading: l
                }),
                secondaryButton: (0,
                v.jsx)(e9.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: r
                }),
                children: (0,
                v.jsxs)(ic, {
                    children: [(0,
                    v.jsx)(nI, {
                        plugin: n
                    }), h && (0,
                    v.jsxs)("div", {
                        children: [(0,
                        v.jsx)("div", {
                            className: "text-sm",
                            children: n.manifest.auth.instructions || "Enter your HTTP access token below:"
                        }), (0,
                        v.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            v.jsx)(nh, {
                                ref: c,
                                type: "password",
                                name: "token",
                                placeholder: "Enter your credentials",
                                autoComplete: "off",
                                onPressEnter: p
                            })
                        })]
                    }), g && (0,
                    v.jsxs)("div", {
                        children: ["You will be redirected to", " ", (0,
                        v.jsx)("span", {
                            className: "font-medium",
                            children: f
                        }), " to log in."]
                    }), i && (0,
                    v.jsx)(id, {
                        children: i
                    })]
                })
            })
        }
        var i_ = t(95552)
          , iM = t.n(i_)
          , iT = t(74437);
        function iN(e) {
            var n = e.onClose
              , t = nd().setupMfa;
            return (0,
            v.jsx)(e9.ZP, {
                isOpen: !0,
                onModalClose: n,
                type: "success",
                title: "Enable two-factor authentication",
                primaryButton: (0,
                v.jsx)(e9.mH, {
                    title: "Enable two-factor authentication",
                    color: "primary",
                    onClick: t
                }),
                secondaryButton: (0,
                v.jsx)(e9.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: n
                }),
                children: (0,
                v.jsx)(ic, {
                    children: (0,
                    v.jsx)(iy.I, {
                        children: (0,
                        v.jsx)(iy.Z, {
                            icon: "\uD83D\uDEA8",
                            children: "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again."
                        })
                    })
                })
            })
        }
        function iP() {
            var e = (0,
            p._)(["text-sm text-black/70 dark:text-white/70 whitespace-nowrap ", ""]);
            return iP = function() {
                return e
            }
            ,
            e
        }
        function iI() {
            var e = (0,
            p._)(["hidden h-4 border-l border-black/30 dark:border-white/30 sm:block"]);
            return iI = function() {
                return e
            }
            ,
            e
        }
        var iS = (d = {},
        (0,
        af._)(d, X._G.Mobile, 8),
        (0,
        af._)(d, X._G.Small, 4),
        (0,
        af._)(d, X._G.Medium, 4),
        (0,
        af._)(d, X._G.Large, 6),
        (0,
        af._)(d, X._G.XLarge, 8),
        d);
        function iZ(e) {
            var n, t, r, a, i, o, s, l, u, c, d, h, g, p, x = e.onInstallWithAuthRequired, b = e.onClickInstallDeveloper, j = e.onClickDevelop, C = e.onClickAbout, w = e.onClose, _ = (0,
            eu.kP)().session, M = (0,
            iT.Z)(), T = M.installedPlugins, N = M.isLoading, P = (u = (0,
            eu.kP)().session,
            c = (0,
            ns.Fl)().isPluginsAvailable,
            h = (d = (0,
            e8.a)(["approvedAip"], function() {
                return Y.ZP.getPlugins({
                    offset: 0,
                    limit: 250,
                    statuses: ["approved"],
                    accessToken: null == u ? void 0 : u.accessToken
                })
            }, {
                enabled: c && !!(null == u ? void 0 : u.accessToken),
                onError: function(e) {
                    console.error(e)
                }
            })).data,
            g = d.isLoading,
            (0,
            y.useMemo)(function() {
                var e = h ? h.items.reduce(function(e, n) {
                    var t = !0
                      , r = !1
                      , a = void 0;
                    try {
                        for (var i, o = (n.categories || [])[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            var s = i.value;
                            e[s.id] || (e[s.id] = {
                                id: s.id,
                                title: s.title,
                                items: []
                            }),
                            e[s.id].items.push(n)
                        }
                    } catch (e) {
                        r = !0,
                        a = e
                    } finally {
                        try {
                            t || null == o.return || o.return()
                        } finally {
                            if (r)
                                throw a
                        }
                    }
                    return e
                }, {}) : {};
                return {
                    approvedPlugins: h ? h.items : [],
                    approvedPluginsByCategory: e,
                    isLoading: g
                }
            }, [h, g])), I = P.approvedPlugins, S = P.isLoading, Z = P.approvedPluginsByCategory, R = (0,
            y.useMemo)(function() {
                return T.filter(function(e) {
                    return "approved" !== e.status
                })
            }, [T]), D = (0,
            y.useMemo)(function() {
                var e = [];
                for (var n in Z)
                    Z[n].items.length > 0 && e.push({
                        id: n,
                        title: Z[n].title
                    });
                return e.push({
                    id: f.All,
                    title: "All plugins"
                }),
                R.length > 0 && e.push({
                    id: f.Developer,
                    title: "Unverified plugins"
                }),
                e
            }, [R.length, Z]), E = (0,
            m._)((0,
            y.useState)(D[0].id), 2), F = E[0], L = E[1], A = function(e, n) {
                for (var t = (0,
                nF._)(e), r = iM()(n), a = t.length - 1; a > 0; a--) {
                    var i, o = Math.floor(r() * (a + 1));
                    i = [t[o], t[a]],
                    t[a] = i[0],
                    t[o] = i[1]
                }
                var s = t.findIndex(function(e) {
                    return "api.openai.com" === e.domain
                });
                if (-1 !== s) {
                    var l = t.splice(s, 1)[0];
                    t.unshift(l)
                }
                return t
            }(iR((0,
            y.useMemo)(function() {
                if (F === f.All)
                    return I;
                if (F !== f.Developer) {
                    var e, n;
                    return null !== (n = null === (e = Z[F]) || void 0 === e ? void 0 : e.items) && void 0 !== n ? n : []
                }
                return []
            }, [I, F, Z])), (null == _ ? void 0 : null === (p = _.user) || void 0 === p ? void 0 : p.id) || ""), B = iR(R), q = (0,
            k.hz)(), U = iS[(0,
            X.dQ)()], O = [], z = !1;
            F === f.Developer ? (O = B,
            z = N) : (O = A,
            z = S);
            var H = (t = (n = {
                items: O,
                numItemsPerPage: U
            }).items,
            r = n.numItemsPerPage,
            i = (a = (0,
            m._)((0,
            y.useState)(0), 2))[0],
            o = a[1],
            s = Math.ceil(t.length / r),
            l = i * r,
            {
                page: i,
                numPages: s,
                pageItems: t.slice(l, l + r),
                goToPage: (0,
                y.useCallback)(function(e) {
                    o(e)
                }, [])
            })
              , V = H.page
              , W = H.numPages
              , G = H.pageItems
              , $ = H.goToPage;
            (0,
            y.useEffect)(function() {
                F === f.Developer && 0 === R.length && (L(D[0].id),
                $(0))
            }, [F, R, $, D]),
            (0,
            y.useEffect)(function() {
                S || L(D[0].id)
            }, [S]);
            var Q = (0,
            m._)((0,
            y.useState)(!1), 2)
              , J = Q[0]
              , K = Q[1];
            return J ? (0,
            v.jsx)(iN, {
                onClose: function() {
                    K(!1)
                }
            }) : (0,
            v.jsx)(e9.ZP, {
                isOpen: !0,
                onModalClose: w,
                type: "success",
                title: "Plugin store",
                size: "custom",
                className: "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
                closeButton: (0,
                v.jsx)(e9.ol, {
                    onClose: w
                }),
                children: (0,
                v.jsxs)(ic, {
                    children: [!z && D.length > 1 && (0,
                    v.jsx)("div", {
                        className: "flex flex-wrap gap-3",
                        children: D.map(function(e) {
                            return (0,
                            v.jsx)(iD, {
                                selected: F === e.id,
                                onClick: function() {
                                    L(e.id),
                                    $(0)
                                },
                                children: e.title
                            }, e.id)
                        })
                    }), (0,
                    v.jsx)(iE, {
                        plugins: G,
                        numSkeletons: U,
                        isLoading: z,
                        onInstallWithAuthRequired: x,
                        onRequestMfa: function() {
                            return K(!0)
                        }
                    }), (0,
                    v.jsxs)("div", {
                        className: "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
                        children: [(0,
                        v.jsx)("div", {
                            className: "flex flex-1 flex-grow justify-start max-lg:justify-center",
                            children: W > 1 && (0,
                            v.jsx)(iq, {
                                page: V,
                                numPages: W,
                                goToPage: $
                            })
                        }), (0,
                        v.jsxs)("div", {
                            className: "flex flex-1 flex-col items-center justify-between gap-2 sm:flex-row",
                            children: [q.has("tools3_dev") && (0,
                            v.jsxs)(v.Fragment, {
                                children: [(0,
                                v.jsx)(iU, {
                                    onClick: b,
                                    children: "Install an unverified plugin"
                                }), (0,
                                v.jsx)(iO, {}), (0,
                                v.jsx)(iU, {
                                    onClick: j,
                                    children: "Develop your own plugin"
                                }), (0,
                                v.jsx)(iO, {})]
                            }), (0,
                            v.jsx)(iU, {
                                onClick: C,
                                children: "About plugins"
                            })]
                        })]
                    })]
                })
            })
        }
        function iR(e) {
            return (0,
            y.useMemo)(function() {
                return e.sort(function(e, n) {
                    return e.manifest.name_for_human.localeCompare(n.manifest.name_for_human)
                })
            }, [e])
        }
        function iD(e) {
            var n = e.selected
              , t = e.onClick
              , r = e.children;
            return (0,
            v.jsx)(ei.z, {
                color: n ? "light" : "neutral",
                className: (0,
                F.Z)("focus:ring-0", n && "hover:bg-gray-200", !n && "text-black/50"),
                onClick: t,
                children: r
            })
        }
        function iE(e) {
            var n = e.plugins
              , t = e.numSkeletons
              , r = e.isLoading
              , a = e.onInstallWithAuthRequired
              , i = e.onRequestMfa
              , o = r ? Array(t).fill(0).map(function(e, n) {
                return (0,
                v.jsx)(iL, {}, n)
            }) : n.map(function(e) {
                return (0,
                v.jsx)(iF, {
                    plugin: e,
                    onInstallWithAuthRequired: a,
                    onRequestMfa: i
                }, e.id)
            });
            return (0,
            v.jsx)("div", {
                className: "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
                children: o
            })
        }
        function iF(e) {
            var n, t, r, a, i, o, s, l = e.plugin, u = e.onInstallWithAuthRequired, c = e.onRequestMfa, d = (0,
            m._)((0,
            y.useState)(!1), 2), f = d[0], h = d[1], g = (0,
            m._)((0,
            y.useState)(!1), 2), p = g[0], b = g[1], j = nL({
                onSuccess: function(e) {
                    (0,
                    nJ.wu)(e.id)
                },
                onError: function(e) {
                    console.error(e),
                    ed.m.danger("Error installing ".concat(l.manifest.name_for_human, "."))
                },
                onSettled: function() {
                    h(!1)
                }
            }), C = (t = (n = {
                onSuccess: function() {},
                onError: function(e) {
                    console.error(e),
                    ed.m.danger("Error uninstalling ".concat(l.manifest.name_for_human, "."))
                },
                onSettled: function() {
                    b(!1)
                }
            }).onSuccess,
            r = n.onError,
            a = n.onSettled,
            i = (0,
            x.NL)(),
            o = (0,
            ni.D)(Y.ZP.updatePluginUserSettings.bind(Y.ZP), {
                onSuccess: function(e) {
                    (function(e, n, t) {
                        n.setQueryData(t, function(n) {
                            var t = (0,
                            nF._)((null == n ? void 0 : n.items) || [])
                              , r = t.findIndex(function(n) {
                                return n.id === e.id
                            });
                            return -1 !== r && t.splice(r, 1),
                            {
                                count: t.length,
                                items: t
                            }
                        })
                    }
                    )(e, i, ["installedAip"]),
                    nB(e, i, ["approvedAip"]),
                    t(e)
                },
                onError: r,
                onSettled: a
            }).mutate,
            (0,
            y.useCallback)(function(e) {
                o({
                    pluginId: e,
                    isInstalled: !1
                })
            }, [o])), w = (0,
            eu.kP)().session, k = nd().isUsernamePassword, _ = (0,
            y.useCallback)(function() {
                var e, n = l.manifest.auth.type;
                if (!("none" === n || "service_http" === n) && !(null == w ? void 0 : null === (e = w.user) || void 0 === e ? void 0 : e.mfa) && k) {
                    c();
                    return
                }
                if ("oauth" === n) {
                    var t = nq(l);
                    t ? window.location.href = t : ed.m.danger("Missing plugin configuration for ".concat(l.manifest.name_for_human, "."))
                } else
                    "user_http" === n ? u(l) : (h(!0),
                    j(l.id))
            }, [l, j, u, c, k, w]), M = (0,
            y.useCallback)(function() {
                b(!0),
                C(l.id)
            }, [l, C]);
            return s = f || p ? (0,
            v.jsxs)(ei.z, {
                color: "light",
                className: "bg-green-100 hover:bg-green-100",
                children: [f ? "Installing" : "Uninstalling", (0,
                v.jsx)(es.Z, {})]
            }) : l.user_settings.is_installed ? (0,
            v.jsxs)(ei.z, {
                color: "light",
                className: "hover:bg-gray-200",
                onClick: M,
                children: ["Uninstall", (0,
                v.jsx)(eo.ZP, {
                    icon: G.$Rx
                })]
            }) : (0,
            v.jsxs)(ei.z, {
                onClick: _,
                children: ["Install", (0,
                v.jsx)(eo.ZP, {
                    icon: G.wzc
                })]
            }),
            (0,
            v.jsx)(iA, {
                logo: (0,
                v.jsx)(eG.Z, {
                    url: l.manifest.logo_url,
                    name: l.manifest.name_for_human,
                    size: "100%",
                    large: !0
                }),
                tag: nW(l) && (0,
                v.jsx)(iB, {}),
                title: (0,
                v.jsx)("div", {
                    className: "max-w-full truncate text-lg leading-5",
                    children: l.manifest.name_for_human
                }),
                button: s,
                description: l.manifest.description_for_human
            })
        }
        function iL() {
            return (0,
            v.jsx)(iA, {
                logo: (0,
                v.jsx)("div", {
                    className: "h-full w-full rounded-[5px] bg-gray-300"
                }),
                title: (0,
                v.jsx)("div", {
                    className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100"
                }),
                button: (0,
                v.jsx)("div", {
                    className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200"
                }),
                description: (0,
                v.jsxs)("div", {
                    className: "flex flex-col gap-1.5",
                    children: [(0,
                    v.jsx)("div", {
                        className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100"
                    }), (0,
                    v.jsx)("div", {
                        className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100"
                    }), (0,
                    v.jsx)("div", {
                        className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100"
                    })]
                })
            })
        }
        function iA(e) {
            var n = e.logo
              , t = e.tag
              , r = e.title
              , a = e.button
              , i = e.description;
            return (0,
            v.jsxs)("div", {
                className: "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
                children: [(0,
                v.jsxs)("div", {
                    className: "flex gap-4",
                    children: [(0,
                    v.jsx)("div", {
                        className: "h-[70px] w-[70px] shrink-0",
                        children: n
                    }), (0,
                    v.jsxs)("div", {
                        className: "flex min-w-0 flex-col items-start justify-between",
                        children: [t ? (0,
                        v.jsxs)("div", {
                            className: "flex items-center gap-1.5",
                            children: [t, r]
                        }) : r, a]
                    })]
                }), (0,
                v.jsx)("div", {
                    className: "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
                    children: i
                })]
            })
        }
        function iB() {
            return (0,
            v.jsx)("div", {
                className: "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800",
                children: (0,
                v.jsx)(eo.ZP, {
                    icon: G.V7f,
                    className: "h-3 w-3"
                })
            })
        }
        function iq(e) {
            for (var n = function(e) {
                u.push((0,
                v.jsx)(iU, {
                    role: "button",
                    className: (0,
                    F.Z)("flex h-5 w-5 items-center justify-center", e === t && "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"),
                    onClick: function() {
                        return a(e)
                    },
                    children: e + 1
                }, e))
            }, t = e.page, r = e.numPages, a = e.goToPage, i = t > 0, o = t < r - 1, s = (0,
            y.useCallback)(function() {
                a(Math.max(t - 1, 0))
            }, [t, a]), l = (0,
            y.useCallback)(function() {
                a(Math.min(t + 1, r - 1))
            }, [t, r, a]), u = [], c = 0; c < r; c++)
                n(c);
            return (0,
            v.jsxs)("div", {
                className: "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
                children: [(0,
                v.jsxs)(iU, {
                    role: "button",
                    className: (0,
                    F.Z)("flex items-center", !i && "opacity-50"),
                    onClick: s,
                    $disabled: !i,
                    children: [(0,
                    v.jsx)(eo.ZP, {
                        icon: G.YFh
                    }), "Prev"]
                }), u, (0,
                v.jsxs)(iU, {
                    role: "button",
                    className: (0,
                    F.Z)("flex items-center", !o && "opacity-50"),
                    onClick: l,
                    $disabled: !o,
                    children: ["Next", (0,
                    v.jsx)(eo.ZP, {
                        icon: G.Tfp
                    })]
                })]
            })
        }
        (o = f || (f = {}))[o.All = 0] = "All",
        o[o.Developer = 1] = "Developer";
        var iU = j.Z.button(iP(), function(e) {
            return e.$disabled ? "opacity-50 cursor-default" : "hover:text-black/50 dark:hover:text-white/50"
        })
          , iO = j.Z.div(iI());
        function iz(e) {
            var n = e.allowClose
              , t = e.onConfirm
              , r = e.onClose;
            return (0,
            v.jsx)(e9.ZP, {
                isOpen: !0,
                onModalClose: r,
                type: "success",
                title: "About plugins",
                primaryButton: (0,
                v.jsx)(e9.mH, {
                    title: "OK",
                    color: "primary",
                    onClick: t
                }),
                secondaryButton: n && (0,
                v.jsx)(e9.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: r
                }),
                children: (0,
                v.jsx)(ic, {
                    children: (0,
                    v.jsxs)(iy.I, {
                        children: [(0,
                        v.jsx)(iy.Z, {
                            icon: "\uD83D\uDEA8",
                            children: "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation."
                        }), (0,
                        v.jsx)(iy.Z, {
                            icon: "\uD83C\uDF10",
                            children: "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send parts of your conversation and the country or state you're in to the plugin to enhance your conversation."
                        }), (0,
                        v.jsx)(iy.Z, {
                            icon: "\uD83E\uDDE0",
                            children: "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled."
                        })]
                    })
                })
            })
        }
        var iH = "oai/apps/hasSeenPluginsDisclaimer";
        function iV(e) {
            var n = e.onInstall
              , t = e.onClose
              , r = (0,
            m._)((0,
            y.useState)(!!ec.m.getItem(iH)), 2)
              , a = r[0]
              , i = r[1]
              , o = (0,
            m._)((0,
            y.useState)(!1), 2)
              , s = o[0]
              , l = o[1]
              , u = (0,
            m._)((0,
            y.useState)(!1), 2)
              , c = u[0]
              , d = u[1]
              , f = (0,
            m._)((0,
            y.useState)(), 2)
              , h = f[0]
              , g = f[1]
              , p = (0,
            m._)((0,
            y.useState)(!1), 2)
              , x = p[0]
              , b = p[1]
              , j = (0,
            y.useCallback)(function() {
                i(!0),
                l(!1),
                ec.m.setItem(iH, !0)
            }, [])
              , C = (0,
            y.useCallback)(function(e) {
                g(e),
                d(!0)
            }, [])
              , w = (0,
            y.useCallback)(function() {
                d(!0)
            }, [])
              , k = (0,
            y.useCallback)(function() {
                b(!0)
            }, [])
              , _ = (0,
            y.useCallback)(function() {
                l(!0)
            }, [])
              , M = (0,
            y.useCallback)(function(e) {
                (0,
                nJ.wu)(e.id),
                t(),
                n(e)
            }, [n, t])
              , T = (0,
            y.useCallback)(function() {
                g(void 0),
                d(!1),
                t()
            }, [t])
              , N = (0,
            y.useCallback)(function() {
                b(!1),
                t()
            }, [t]);
            return !a || s ? (0,
            v.jsx)(iz, {
                allowClose: !a,
                onConfirm: j,
                onClose: t
            }) : c ? (0,
            v.jsx)(iC, {
                plugin: h,
                onInstall: M,
                onClose: T
            }) : x ? (0,
            v.jsx)(ih, {
                onClickInstall: C,
                onInstallLocalhost: M,
                onClose: N
            }) : (0,
            v.jsx)(iZ, {
                onInstallWithAuthRequired: C,
                onClickInstallDeveloper: w,
                onClickDevelop: k,
                onClickAbout: _,
                onClose: t
            })
        }
        function iW() {
            var e = (0,
            p._)(["flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white"]);
            return iW = function() {
                return e
            }
            ,
            e
        }
        function iG() {
            var e = (0,
            p._)(["flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800"]);
            return iG = function() {
                return e
            }
            ,
            e
        }
        function i$(e) {
            var n, t = e.theme, r = void 0 === t ? "default" : t, a = (0,
            m._)((0,
            y.useState)(!1), 2), i = a[0], o = a[1], s = (0,
            m._)((0,
            y.useState)(!1), 2), l = s[0], u = s[1], c = (0,
            b.useRouter)(), d = (0,
            iT.Z)(), f = d.installedPlugins, h = d.isLoading, p = (0,
            nJ.p0)(), x = (0,
            y.useRef)(null);
            (0,
            y.useEffect)(function() {
                if (!h) {
                    var e = c.query
                      , n = e.loginAip
                      , t = e.loginSuccess
                      , r = (0,
                    g._)(e, ["loginAip", "loginSuccess"]);
                    if (n) {
                        var a, i = f.find(function(e) {
                            return e.id === n
                        });
                        i && "true" === t ? ((0,
                        nJ.wu)(c.query.loginAip),
                        null === (a = x.current) || void 0 === a || a.open()) : ed.m.warning("Couldn't log in with ".concat((null == i ? void 0 : i.manifest.name_for_human) || "plugin", ".")),
                        c.replace({
                            pathname: c.pathname,
                            query: r
                        })
                    }
                }
            }, [c, f, h]);
            var j = (0,
            y.useCallback)(function() {
                var e;
                null === (e = x.current) || void 0 === e || e.open()
            }, [])
              , C = (0,
            y.useCallback)(function() {
                o(!1)
            }, [])
              , w = (0,
            m._)((0,
            y.useState)(p), 2)
              , k = w[0]
              , _ = w[1]
              , M = (0,
            y.useCallback)(function(e) {
                if (e.length > nJ.hZ)
                    u(!0),
                    setTimeout(function() {
                        u(!1)
                    }, 600);
                else {
                    var n = e.filter(function(e) {
                        return !p.find(function(n) {
                            return n.id === e.id
                        })
                    })
                      , t = !0
                      , r = !1
                      , a = void 0;
                    try {
                        for (var i, o = nJ.iO[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            var s = function() {
                                var e = i.value
                                  , t = p.find(function(n) {
                                    return e.includes(n.domain)
                                });
                                if (t) {
                                    var r = e.find(function(e) {
                                        return e !== t.domain
                                    })
                                      , a = n.find(function(e) {
                                        return e.domain === r
                                    });
                                    if (a)
                                        return ed.m.warning("You can't enable ".concat(a.manifest.name_for_human, " while ").concat(t.manifest.name_for_human, " is enabled.")),
                                        {
                                            v: void 0
                                        }
                                }
                            }();
                            if ("object" === (0,
                            is._)(s))
                                return s.v
                        }
                    } catch (e) {
                        r = !0,
                        a = e
                    } finally {
                        try {
                            t || null == o.return || o.return()
                        } finally {
                            if (r)
                                throw a
                        }
                    }
                    (0,
                    nJ.dT)(e.map(function(e) {
                        return e.id
                    }))
                }
            }, [p])
              , T = (0,
            y.useCallback)(function(e) {
                var n;
                null === (n = x.current) || void 0 === n || n.close(),
                "store" === e && o(!0)
            }, [])
              , N = (0,
            y.useCallback)(function() {
                _(p),
                tD.m.logEvent("chatgpt_plugin_chooser_opened", null, {
                    num_enabled_plugins: "".concat(p.length)
                })
            }, [p])
              , P = (0,
            y.useCallback)(function() {
                var e = k.filter(function(e) {
                    return !p.find(function(n) {
                        return n.id === e.id
                    })
                })
                  , n = p.filter(function(e) {
                    return !k.find(function(n) {
                        return n.id === e.id
                    })
                })
                  , t = !0
                  , r = !1
                  , a = void 0;
                try {
                    for (var i, o = n[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        var s = i.value;
                        tD.m.logEvent("chatgpt_plugin_enabled", null, {
                            plugin_id: s.id
                        })
                    }
                } catch (e) {
                    r = !0,
                    a = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw a
                    }
                }
                var l = !0
                  , u = !1
                  , c = void 0;
                try {
                    for (var d, f = e[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
                        var h = d.value;
                        tD.m.logEvent("chatgpt_plugin_disabled", null, {
                            plugin_id: h.id
                        })
                    }
                } catch (e) {
                    u = !0,
                    c = e
                } finally {
                    try {
                        l || null == f.return || f.return()
                    } finally {
                        if (u)
                            throw c
                    }
                }
            }, [p, k])
              , I = f.map(function(e) {
                return {
                    value: e,
                    title: e.manifest.name_for_human,
                    description: e.manifest.description_for_human,
                    tags: [],
                    customTags: nW(e) ? (0,
                    v.jsx)(iJ, {}) : "approved" !== e.status ? (0,
                    v.jsx)(iQ, {}) : void 0,
                    imageUrl: e.manifest.logo_url
                }
            })
              , S = I.filter(function(e) {
                return p.find(function(n) {
                    return n.id === e.value.id
                })
            })
              , Z = "".concat(0 === p.length ? "No" : p.length, " plugins enabled");
            if (p.length > 0 && p.length < 6) {
                var R = p.map(function(e, n) {
                    return (0,
                    v.jsx)(eG.Z, {
                        url: e.manifest.logo_url,
                        name: e.manifest.name_for_human,
                        size: 16
                    }, n)
                });
                Z = (0,
                v.jsx)("div", {
                    className: "flex gap-1",
                    children: R
                })
            }
            var D = [{
                id: "store",
                label: "Plugin store",
                icon: G.Rgz
            }];
            f.length > nJ.hZ && (n = (0,
            v.jsxs)(iY, {
                className: (0,
                F.Z)("transition-colors duration-300", l && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"),
                children: [p.length, "/", nJ.hZ, " Enabled"]
            }));
            var E = (0,
            v.jsxs)(v.Fragment, {
                children: [(0,
                v.jsx)(iY, {
                    children: "Loading..."
                }), (0,
                v.jsx)(a5, {
                    showCheckbox: !0,
                    theme: r
                }), (0,
                v.jsx)(a5, {
                    showCheckbox: !0,
                    theme: r
                }), (0,
                v.jsx)(a5, {
                    showCheckbox: !0,
                    theme: r
                }), (0,
                v.jsx)(a5, {
                    showCheckbox: !0,
                    theme: r
                }), (0,
                v.jsx)(a5, {
                    showCheckbox: !0,
                    theme: r
                })]
            });
            return (0,
            v.jsxs)(v.Fragment, {
                children: [(0,
                v.jsx)(aX, {
                    name: "Plugins",
                    selectedOptions: S,
                    selectedLabel: Z,
                    options: I,
                    actions: D,
                    onChange: M,
                    onAction: T,
                    onOpen: N,
                    onClose: P,
                    dropdownRef: x,
                    isLoading: h,
                    loadingState: E,
                    header: n,
                    theme: "mini" === r ? "mini" : "default"
                }), i && (0,
                v.jsx)(iV, {
                    onInstall: j,
                    onClose: C
                })]
            })
        }
        function iQ() {
            return (0,
            v.jsx)(iK, {
                children: (0,
                v.jsx)(eo.ZP, {
                    icon: G.OH,
                    className: "h-3 w-3",
                    strokeWidth: 2.5
                })
            })
        }
        function iJ() {
            return (0,
            v.jsx)(iK, {
                children: (0,
                v.jsx)(eo.ZP, {
                    icon: G.V7f,
                    className: "h-3 w-3"
                })
            })
        }
        var iY = j.Z.div(iW())
          , iK = j.Z.div(iG())
          , iX = t(66523);
        function i0(e) {
            var n, t, r = e.onChangeModelSetting, a = e.availableModels, i = e.modelBackend, o = (0,
            k.hz)(), s = (0,
            ns.Fl)(), l = s.isBetaFeaturesUiEnabled, u = s.isPluginsAvailable, c = s.isBrowsingAvailable, d = s.isCodeInterpreterAvailable, f = (0,
            y.useMemo)(function() {
                return a.find(function(e) {
                    return e.id === i
                })
            }, [a, i]);
            return l && o.has("new_model_switcher_20230512") && (u || c || d) ? f ? (0,
            v.jsxs)("div", {
                className: "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
                children: [(0,
                v.jsx)(aD, {
                    currentModel: f,
                    onModelChange: function(e) {
                        return r(rw.G3.Model, e)
                    }
                }), u && (null == f ? void 0 : null === (t = f.enabledTools) || void 0 === t ? void 0 : t.includes("tools3")) && (0,
                v.jsx)(i$, {
                    theme: "mini"
                })]
            }) : null : (0,
            v.jsxs)("div", {
                className: "flex items-center justify-center gap-2",
                children: [(0,
                v.jsx)(i1, {
                    onChangeModelSetting: r,
                    availableModels: a,
                    modelBackend: i
                }), u && (null == f ? void 0 : null === (n = f.enabledTools) || void 0 === n ? void 0 : n.includes("tools3")) && (0,
                v.jsx)(i$, {})]
            })
        }
        function i1(e) {
            var n = e.onChangeModelSetting
              , t = e.availableModels
              , r = e.modelBackend
              , a = (0,
            rw.BT)()
              , i = (0,
            C.WS)()
              , o = (0,
            iX.Z)()
              , s = (0,
            y.useCallback)(function(e) {
                e.id !== a && (n(rw.G3.Model, e.id),
                i(w.s6.toggleModel, {
                    model: e.id
                }))
            }, [a, i, n])
              , l = "".concat(o.modelSwitcherDisclaimer)
              , u = t.map(function(e) {
                return {
                    value: e,
                    title: e.title,
                    description: e.id === a ? l : e.description,
                    tags: e.tags,
                    disabled: e.id === a
                }
            })
              , c = u.find(function(e) {
                return e.value.id === r
            }) || u[0];
            return (0,
            v.jsx)(aK, {
                name: "Model",
                selectedOption: c,
                options: u,
                onChange: s,
                theme: "default"
            })
        }
        var i2 = function(e) {
            var n, t, r, a = e.modelBackend, i = e.availableModels, o = e.clientThreadId, s = e.isStaticSharedThread, l = e.continueConversationUrl, u = e.icon, c = i.find(function(e) {
                return e.id === a
            }) || i[0], d = c.tags.filter(function(e) {
                return aY.includes(e)
            }).map(function(e) {
                return a7(e)
            }), f = (0,
            rm.Z)();
            if (f.length > 0) {
                var h = f.map(function(e, n) {
                    return (0,
                    v.jsx)(eG.Z, {
                        url: e.manifest.logo_url,
                        name: e.manifest.name_for_human,
                        size: 16
                    }, n)
                });
                r = (0,
                v.jsxs)(v.Fragment, {
                    children: [(0,
                    v.jsx)("div", {
                        children: "Enabled plugins:"
                    }), h]
                })
            }
            var g = (0,
            _.qA)(o)
              , m = (0,
            _.je)(o)
              , p = (0,
            b.useRouter)()
              , x = s && (null === (n = p.query) || void 0 === n ? void 0 : null === (t = n.shareParams) || void 0 === t ? void 0 : t[1]) === "moderate";
            return (0,
            v.jsxs)("div", {
                className: (0,
                F.Z)("flex w-full items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300", s ? "sticky top-0 z-50" : ""),
                children: [s && (0,
                v.jsxs)(v.Fragment, {
                    children: [(0,
                    v.jsxs)(v.Fragment, {
                        children: [null != m ? "Shared By: ".concat(m) : "Shared Conversation", " ", (0,
                        v.jsx)("span", {
                            className: "px-1",
                            children: "•"
                        })]
                    }), null != g && (0,
                    v.jsxs)(v.Fragment, {
                        children: [g, (0,
                        v.jsx)("span", {
                            className: "px-1",
                            children: "•"
                        })]
                    })]
                }), !s && void 0 !== u && (0,
                v.jsx)(eo.ZP, {
                    icon: u
                }), "Model: ", c.title, d, r ? (0,
                v.jsxs)(v.Fragment, {
                    children: [(0,
                    v.jsx)("span", {
                        className: "px-1",
                        children: "•"
                    }), r]
                }) : null, s && null != l && (0,
                v.jsxs)(v.Fragment, {
                    children: [(0,
                    v.jsx)("span", {
                        className: "px-1",
                        children: "•"
                    }), (0,
                    v.jsx)(ei.z, {
                        as: "link",
                        color: "neutral",
                        size: "small",
                        to: l,
                        children: "Continue this conversation"
                    })]
                }), x && (0,
                v.jsxs)(v.Fragment, {
                    children: [(0,
                    v.jsx)("span", {
                        className: "px-1",
                        children: "•"
                    }), (0,
                    v.jsx)("strong", {
                        children: "MODERATION VIEW"
                    })]
                })]
            })
        }
          , i3 = t(75318);
        function i5() {
            var e = (0,
            p._)(["text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100"]);
            return i5 = function() {
                return e
            }
            ,
            e
        }
        function i4() {
            var e = (0,
            p._)(["text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center"]);
            return i4 = function() {
                return e
            }
            ,
            e
        }
        function i7() {
            var e = (0,
            p._)(["md:flex items-start text-center gap-3.5"]);
            return i7 = function() {
                return e
            }
            ,
            e
        }
        function i8() {
            var e = (0,
            p._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
            return i8 = function() {
                return e
            }
            ,
            e
        }
        function i6() {
            var e = (0,
            p._)(["flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"]);
            return i6 = function() {
                return e
            }
            ,
            e
        }
        function i9() {
            var e = (0,
            p._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
            return i9 = function() {
                return e
            }
            ,
            e
        }
        function oe() {
            var e = (0,
            p._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
            return oe = function() {
                return e
            }
            ,
            e
        }
        function on() {
            var e = (0,
            p._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']"]);
            return on = function() {
                return e
            }
            ,
            e
        }
        function ot() {
            var e = (0,
            p._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"]);
            return ot = function() {
                return e
            }
            ,
            e
        }
        var or = j.Z.div(i5())
          , oa = j.Z.h1(i4())
          , oi = j.Z.div(i7())
          , oo = j.Z.div(i8())
          , os = j.Z.h2(i6())
          , ol = j.Z.ul(i9())
          , ou = j.Z.li(oe());
        j.Z.li(on());
        var oc = j.Z.button(ot());
        function od(e) {
            var n = e.text
              , t = e.onChangeCurrentPrompt
              , r = (0,
            y.useCallback)(function() {
                t(n)
            }, [n, t]);
            return (0,
            v.jsxs)(oc, {
                onClick: r,
                children: ['"', n, '" →']
            })
        }
        function of(e) {
            var n = e.onChangeCurrentPrompt
              , t = (0,
            k.nR)();
            return (0,
            v.jsxs)(or, {
                children: [(0,
                v.jsxs)(oa, {
                    children: ["ChatGPT", t && (0,
                    v.jsx)(ad, {
                        children: "Plus"
                    })]
                }), (0,
                v.jsxs)(oi, {
                    children: [(0,
                    v.jsxs)(oo, {
                        children: [(0,
                        v.jsxs)(os, {
                            children: [(0,
                            v.jsx)(eo.ZP, {
                                icon: G.kXG,
                                size: "medium"
                            }), "Examples"]
                        }), (0,
                        v.jsxs)(ol, {
                            children: [(0,
                            v.jsx)(od, {
                                text: "Explain quantum computing in simple terms",
                                onChangeCurrentPrompt: n
                            }), (0,
                            v.jsx)(od, {
                                text: "Got any creative ideas for a 10 year old’s birthday?",
                                onChangeCurrentPrompt: n
                            }), (0,
                            v.jsx)(od, {
                                text: "How do I make an HTTP request in Javascript?",
                                onChangeCurrentPrompt: n
                            })]
                        })]
                    }), (0,
                    v.jsxs)(oo, {
                        children: [(0,
                        v.jsxs)(os, {
                            children: [(0,
                            v.jsx)(eo.ZP, {
                                icon: i3.Z,
                                size: "medium"
                            }), "Capabilities"]
                        }), (0,
                        v.jsxs)(ol, {
                            children: [(0,
                            v.jsx)(ou, {
                                children: "Remembers what user said earlier in the conversation"
                            }), (0,
                            v.jsx)(ou, {
                                children: "Allows user to provide follow-up corrections"
                            }), (0,
                            v.jsx)(ou, {
                                children: "Trained to decline inappropriate requests"
                            })]
                        })]
                    }), (0,
                    v.jsxs)(oo, {
                        children: [(0,
                        v.jsxs)(os, {
                            children: [(0,
                            v.jsx)(eo.ZP, {
                                icon: G.BJv,
                                size: "medium"
                            }), "Limitations"]
                        }), (0,
                        v.jsxs)(ol, {
                            children: [(0,
                            v.jsx)(ou, {
                                children: "May occasionally generate incorrect information"
                            }), (0,
                            v.jsx)(ou, {
                                children: "May occasionally produce harmful instructions or biased content"
                            }), (0,
                            v.jsx)(ou, {
                                children: "Limited knowledge of world and events after 2021"
                            })]
                        })]
                    })]
                })]
            })
        }
        var oh = t(60382);
        function og() {
            var e = (0,
            p._)(["flex flex-col items-center text-sm dark:bg-gray-800"]);
            return og = function() {
                return e
            }
            ,
            e
        }
        function om() {
            var e = (0,
            p._)(["w-full h-32 md:h-48 flex-shrink-0"]);
            return om = function() {
                return e
            }
            ,
            e
        }
        function op() {
            var e = (0,
            p._)(["cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"]);
            return op = function() {
                return e
            }
            ,
            e
        }
        function ov() {
            var e = (0,
            p._)(["px-2 relative w-full flex flex-col h-full py-2 md:py-6"]);
            return ov = function() {
                return e
            }
            ,
            e
        }
        function ox() {
            var e = (0,
            p._)(["text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow"]);
            return ox = function() {
                return e
            }
            ,
            e
        }
        function ob(e) {
            var n, t = e.onChangeItemInView, r = e.onRequestMoreCompletions, a = e.onUpdateNode, i = e.onChangeRating, o = e.onDeleteNode, s = e.onRequestCompletion, l = e.onChangeCurrentPrompt, u = e.onSandboxLinkClick, c = e.onHandleChangeVariantFeedbackInlineComparisonRating, d = e.clientThreadId, f = e.isNewThread, h = e.activeRequests, g = e.isLoading, p = e.onChangeModelSetting, x = e.currentThreadModel, b = e.isStaticSharedThread, j = e.inlineEmbeddedDisplay, C = e.onTurnEnteredViewport, w = e.initiallyHighlightedMessageId, M = e.continueConversationUrl, T = (0,
            au.useScrollToBottom)(), N = (0,
            m._)((0,
            au.useSticky)(), 1)[0], P = (0,
            et.Z)(), I = (0,
            k.hz)(), S = (0,
            aR.ZP)().items, Z = (0,
            ns.Fl)().isBetaFeaturesUiEnabled, R = (0,
            oh.Z)(), D = R.availableModels, E = R.isLoading, F = I.has("model_switcher") && D.length > 1, L = f && !g && F, A = (0,
            k.nR)(), B = (0,
            m._)((0,
            y.useState)(!1), 2), q = B[0], U = B[1], O = (0,
            rw.ZP)(D, x, d).modelBackend, z = (0,
            aR.Zf)(S, O), H = (0,
            _.U0)(d);
            (0,
            y.useEffect)(function() {
                g ? setTimeout(function() {
                    P() && U(!0)
                }, 1e3) : U(!1)
            }, [g, P]);
            var V = I.has(K.FZ)
              , W = !Z && O.startsWith(rw.f_) ? "black" : null !== (n = null == z ? void 0 : z.backgroundColor) && void 0 !== n ? n : void 0
              , $ = (0,
            nF._)(Array(H).keys()).map(function(e) {
                return (0,
                v.jsx)(rD, {
                    isFinalTurn: e === H - 1,
                    turnIndex: e,
                    clientThreadId: d,
                    onChangeItemInView: t,
                    onChangeRating: i,
                    onRequestMoreCompletions: r,
                    onDeleteNode: o,
                    onRequestCompletion: s,
                    onUpdateNode: a,
                    onSandboxLinkClick: u,
                    onHandleChangeVariantFeedbackInlineComparisonRating: c,
                    activeRequests: h,
                    modelBackend: O,
                    isStaticSharedThread: b,
                    showInlineEmbeddedDisplay: j,
                    onTurnEnteredViewport: C,
                    initiallyHighlightedMessageId: w,
                    avatarColor: W
                }, e)
            });
            return (0,
            v.jsxs)(v.Fragment, {
                children: [L && (0,
                v.jsxs)(ow, {
                    children: [(0,
                    v.jsx)(i0, {
                        onChangeModelSetting: p,
                        availableModels: D,
                        modelBackend: O
                    }), (0,
                    v.jsxs)(ok, {
                        children: ["ChatGPT", A && (0,
                        v.jsx)(ad, {
                            children: "Plus"
                        })]
                    })]
                }), (0,
                v.jsxs)(oy, {
                    children: [f && !g && !E && !F && (0,
                    v.jsx)(of, {
                        onChangeCurrentPrompt: l
                    }), q && g && (0,
                    v.jsx)(es.Z, {
                        className: "mx-auto mt-4"
                    }), !f && !g && F && !j && (0,
                    v.jsx)(i2, {
                        icon: Z ? null == z ? void 0 : z.icon : void 0,
                        availableModels: D,
                        modelBackend: O,
                        clientThreadId: d,
                        isStaticSharedThread: b,
                        continueConversationUrl: M
                    }), V ? $.length > 0 && (0,
                    v.jsx)("div", {
                        className: "flex w-full flex-col items-center sm:px-4",
                        children: (0,
                        v.jsx)("div", {
                            className: "w-full max-w-[44rem] pt-4",
                            children: $
                        })
                    }) : $, !L && !j && (0,
                    v.jsx)(oj, {})]
                }), !N && !j && (0,
                v.jsx)(oC, {
                    onClick: T,
                    children: (0,
                    v.jsx)(eo.ZP, {
                        icon: G.tv1,
                        className: "m-1"
                    })
                })]
            })
        }
        var oy = j.Z.div(og())
          , oj = j.Z.div(om())
          , oC = j.Z.button(op())
          , ow = j.Z.div(ov())
          , ok = j.Z.h1(ox());
        function o_() {
            var e = (0,
            p._)(["relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"]);
            return o_ = function() {
                return e
            }
            ,
            e
        }
        function oM() {
            var e = (0,
            p._)(["grow flex-1 overflow-hidden"]);
            return oM = function() {
                return e
            }
            ,
            e
        }
        function oT() {
            var e = (0,
            p._)(["w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-[rgba(0, 0, 0, 0.1)]"]);
            return oT = function() {
                return e
            }
            ,
            e
        }
        function oN() {
            var e = (0,
            p._)(["mt-4 mx-4 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)] rounded-t max-h-80 overflow-y-scroll"]);
            return oN = function() {
                return e
            }
            ,
            e
        }
        function oP() {
            var e = (0,
            p._)(["flex p-4 bg-white dark:bg-gray-800/90 border-t rounded-b-lg w-full h-full\n", "\n"]);
            return oP = function() {
                return e
            }
            ,
            e
        }
        function oI() {
            var e = (0,
            p._)(["flex w-full items-center justify-left gap-2"]);
            return oI = function() {
                return e
            }
            ,
            e
        }
        function oS() {
            var e = (0,
            p._)(["mt-1 text-gray-500"]);
            return oS = function() {
                return e
            }
            ,
            e
        }
        function oZ() {
            var e = (0,
            p._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
            return oZ = function() {
                return e
            }
            ,
            e
        }
        function oR() {
            var e = (0,
            p._)(["flex-none h-full mt-auto mb-auto"]);
            return oR = function() {
                return e
            }
            ,
            e
        }
        function oD(e) {
            var n = e.serverThreadId
              , t = (0,
            _.U0)(n)
              , r = (0,
            _.GD)(n, t - 1)
              , a = r.messages[r.messages.length - 1]
              , i = (0,
            _.nh)(n, a.nodeId).message.id
              , o = (0,
            m._)((0,
            y.useState)(function() {
                return (0,
                ao.Z)(function(e, n) {
                    return {
                        title: void 0,
                        highlightedMessageId: i,
                        initiallyHighlightedMessageId: void 0,
                        shareLinkId: void 0,
                        shareLinkUrl: void 0,
                        isPublic: !1,
                        isDeleted: !1,
                        isAnonymous: !0,
                        linkAlreadyExisted: !1
                    }
                })
            }), 1)[0]
              , s = (0,
            y.useRef)(!1);
            return (0,
            y.useEffect)(function() {
                s.current || (s.current = !0,
                Y.ZP.createShareLink({
                    message_id: o.getState().highlightedMessageId,
                    conversation_id: n,
                    is_anonymous: !0
                }).then(function(e) {
                    o.setState({
                        shareLinkId: e.share_id,
                        shareLinkUrl: e.share_url,
                        isPublic: e.is_public,
                        isDeleted: !e.is_visible,
                        title: e.title,
                        highlightedMessageId: e.highlighted_message_id,
                        initiallyHighlightedMessageId: e.highlighted_message_id,
                        linkAlreadyExisted: e.already_exists,
                        isAnonymous: e.is_anonymous
                    })
                }).catch(function(e) {
                    ed.m.danger("Failed to copy link to clipboard - could not create link"),
                    D.closeSharingModal()
                }))
            }, []),
            (0,
            v.jsx)(as.Provider, {
                value: o,
                children: (0,
                v.jsx)(oE, (0,
                h._)({}, e))
            })
        }
        function oE(e) {
            var n, t, r, a, i, o, s = e.serverThreadId, l = e.isLoading, u = e.activeRequests, c = e.currentThreadModel, d = (0,
            y.useRef)(null), f = (0,
            m._)((0,
            y.useState)(!1), 2), h = f[0], g = f[1], p = (0,
            m._)((0,
            y.useState)(!1), 2), x = p[0], b = p[1], j = (0,
            m._)((0,
            y.useState)(!1), 2), C = j[0], w = j[1], k = (0,
            y.useContext)(as), M = al(function(e) {
                return e.title
            }), T = al(function(e) {
                return e.shareLinkId
            }), N = al(function(e) {
                return e.shareLinkUrl
            }), P = al(function(e) {
                return e.isAnonymous
            }), I = al(function(e) {
                return e.initiallyHighlightedMessageId
            }), S = al(function(e) {
                return e.isPublic
            }), Z = al(function(e) {
                return e.linkAlreadyExisted
            }) && S, R = (0,
            eu.kP)().session, E = (n = (0,
            nl._)(function(e, n) {
                var t, r, a, i, o;
                return (0,
                nu.Jh)(this, function(s) {
                    switch (s.label) {
                    case 0:
                        b(!0),
                        r = (t = k.getState()).highlightedMessageId,
                        a = t.title,
                        i = t.isDeleted,
                        o = t.isAnonymous;
                        try {
                            navigator.clipboard.writeText(n)
                        } catch (e) {
                            return console.warn("Could not copy link to clipboard: " + e),
                            ed.m.warning("Failed to copy link to clipboard"),
                            b(!1),
                            [2]
                        }
                        return k.setState({
                            isPublic: !0
                        }),
                        [4, Y.ZP.updateShareLink({
                            share_id: e,
                            highlighted_message_id: r,
                            title: a,
                            is_public: !i,
                            is_visible: !i,
                            is_anonymous: o
                        })];
                    case 1:
                        return s.sent(),
                        b(!1),
                        w(!0),
                        setTimeout(function() {
                            D.closeSharingModal(),
                            ed.m.success("Copied shared conversation URL to clipboard!")
                        }, 500),
                        [2]
                    }
                })
            }),
            function(e, t) {
                return n.apply(this, arguments)
            }
            ), L = (0,
            v.jsxs)(e9.mH, {
                onClick: function() {
                    return E(T, N)
                },
                color: "primary",
                disabled: x || C || null == T || null == N,
                children: [C ? (0,
                v.jsx)(eo.ZP, {
                    icon: G.LSm
                }) : x ? (0,
                v.jsx)(es.Z, {}) : (0,
                v.jsx)(eo.ZP, {
                    icon: G.UH
                }), C ? "Copied!" : x ? "Copying..." : Z ? "Save and Copy (INTERNAL)" : "Copy (INTERNAL)"]
            }), A = (0,
            y.useCallback)(function(e) {
                var n;
                null == e || e.preventDefault(),
                k.setState({
                    title: null === (n = d.current) || void 0 === n ? void 0 : n.value
                }),
                g(!1)
            }, [k]), B = (0,
            y.useCallback)(function(e) {
                "Enter" === e.key && A()
            }, [A]), q = (t = (0,
            nl._)(function() {
                return (0,
                nu.Jh)(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, Y.ZP.deleteShareLink({
                            share_id: k.getState().shareLinkId
                        }).catch(function(e) {
                            ed.m.danger("Failed to delete shared link")
                        }).then(function() {
                            D.closeSharingModal()
                        })];
                    case 1:
                        return e.sent(),
                        [2]
                    }
                })
            }),
            function() {
                return t.apply(this, arguments)
            }
            ), U = (r = (0,
            nl._)(function() {
                return (0,
                nu.Jh)(this, function(e) {
                    return k.setState({
                        isAnonymous: !0
                    }),
                    _.qN.setState(function(e) {
                        e.threads[s].initialThreadData.authorName = void 0
                    }),
                    [2]
                })
            }),
            function() {
                return r.apply(this, arguments)
            }
            ), O = (a = (0,
            nl._)(function() {
                return (0,
                nu.Jh)(this, function(e) {
                    return k.setState({
                        isAnonymous: !1
                    }),
                    _.qN.setState(function(e) {
                        var n;
                        e.threads[s].initialThreadData.authorName = null == R ? void 0 : null === (n = R.user) || void 0 === n ? void 0 : n.name
                    }),
                    [2]
                })
            }),
            function() {
                return a.apply(this, arguments)
            }
            ), z = (0,
            v.jsxs)(oq, {
                $active: h,
                children: [(0,
                v.jsxs)("div", {
                    className: "flex-1 pr-1",
                    children: [void 0 !== M ? h ? (0,
                    v.jsx)(oz, {
                        ref: d,
                        type: "text",
                        defaultValue: M,
                        autoFocus: !0,
                        onKeyDown: B,
                        className: "mr-0",
                        onBlur: A
                    }) : (0,
                    v.jsxs)(oU, {
                        onDoubleClick: function() {
                            return g(!0)
                        },
                        children: [M, h ? null : (0,
                        v.jsx)("button", {
                            onClick: function() {
                                return g(!0)
                            },
                            children: (0,
                            v.jsx)(eo.ZP, {
                                icon: G.Nte,
                                size: "small"
                            })
                        })]
                    }) : (0,
                    v.jsx)("div", {
                        className: "h-6"
                    }), P ? (0,
                    v.jsxs)(oO, {
                        children: ["Anonymous \xb7 ", new Date().toLocaleDateString()]
                    }) : (0,
                    v.jsxs)(oO, {
                        children: [null == R ? void 0 : null === (o = R.user) || void 0 === o ? void 0 : o.name, " \xb7 ", new Date().toLocaleDateString()]
                    })]
                }), (0,
                v.jsx)(oH, {
                    children: (0,
                    v.jsxs)(ai.fC, {
                        children: [(0,
                        v.jsx)(ai.xz, {
                            asChild: !0,
                            children: (0,
                            v.jsx)(ei.z, {
                                color: "neutral",
                                className: "mb-auto mt-auto",
                                children: (0,
                                v.jsx)(eW.JEI, {})
                            })
                        }), (0,
                        v.jsx)(ai.h_, {
                            children: (0,
                            v.jsxs)(ai.VY, {
                                className: "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                                side: "top",
                                align: "end",
                                children: [P && (0,
                                v.jsx)(ei.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: O,
                                    children: (0,
                                    v.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        v.jsx)(eo.ZP, {
                                            icon: G.fzv,
                                            className: "float-left mb-auto mr-4 mt-auto"
                                        }), " ", (0,
                                        v.jsx)("div", {
                                            children: "Share your name"
                                        })]
                                    })
                                }), !P && (0,
                                v.jsx)(ei.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: U,
                                    children: (0,
                                    v.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        v.jsx)(eo.ZP, {
                                            icon: G.fzv,
                                            className: "float-left mb-auto mr-4 mt-auto"
                                        }), " ", (0,
                                        v.jsx)("div", {
                                            children: "Share anonymously"
                                        })]
                                    })
                                }), Z && (0,
                                v.jsx)(ei.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: q,
                                    children: (0,
                                    v.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        v.jsx)(eo.ZP, {
                                            icon: G.Ybf,
                                            className: "float-left mb-auto mr-4 mt-auto"
                                        }), " ", (0,
                                        v.jsx)("div", {
                                            children: "Delete Link"
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                })]
            }), H = (i = (0,
            nl._)(function(e, n) {
                return (0,
                nu.Jh)(this, function(e) {
                    return [2]
                })
            }),
            function(e, n) {
                return i.apply(this, arguments)
            }
            ), V = (0,
            y.useRef)({}), $ = (0,
            y.useRef)({}), Q = (0,
            y.useRef)(0), J = (0,
            y.useCallback)(function(e, n, t) {
                V.current[n] = t;
                var r = k.getState().highlightedMessageId
                  , a = r;
                if (t && null == $.current[n]) {
                    var i = e.messages[e.messages.length - 1]
                      , o = _.tQ.getTree(s).getNode(i.nodeId);
                    $.current[n] = o.message.id
                }
                if (t && n > Q.current && (Q.current = n,
                a = $.current[n]),
                !t && n === Q.current)
                    for (; Q.current >= 0 && !1 === V.current[Q.current]; )
                        Q.current--,
                        a = $.current[Q.current];
                a !== r && k.setState({
                    highlightedMessageId: a
                })
            }, [k, s]);
            return (0,
            v.jsxs)(e9.ZP, {
                isOpen: !0,
                onModalClose: function() {
                    D.closeSharingModal()
                },
                type: "success",
                title: "Share Chat - INTERNAL ONLY",
                primaryButton: null,
                children: [(0,
                v.jsxs)("div", {
                    className: (0,
                    F.Z)("w-full"),
                    children: [(0,
                    v.jsx)("p", {
                        className: (0,
                        F.Z)("mb-7 mt-3 text-[#8E8EA0]"),
                        children: "Create a sharable link to a snapshot of your conversation. Messages you send after creating your link won't be shared."
                    }), (0,
                    v.jsx)("p", {
                        className: (0,
                        F.Z)("mb-7 mt-3 text-[#8E8EA0]"),
                        children: (0,
                        v.jsx)("b", {
                            children: "INTERNAL ONLY. DO NOT SHARE LINKS EXTERNALLY."
                        })
                    })]
                }), (0,
                v.jsx)(oA, {
                    children: (0,
                    v.jsx)("div", {
                        className: "flex h-full max-w-full flex-1 flex-col",
                        children: (0,
                        v.jsx)(oF, {
                            children: (0,
                            v.jsxs)(oL, {
                                children: [(0,
                                v.jsx)(oB, {
                                    className: null == I ? "invisible" : "",
                                    children: (0,
                                    v.jsx)(ob, {
                                        isLoading: l,
                                        onChangeItemInView: W(),
                                        onRequestMoreCompletions: W(),
                                        onUpdateNode: W(),
                                        onChangeRating: W(),
                                        onDeleteNode: W(),
                                        onRequestCompletion: W(),
                                        onChangeCurrentPrompt: W(),
                                        onSandboxLinkClick: H,
                                        onHandleChangeVariantFeedbackInlineComparisonRating: W(),
                                        clientThreadId: s,
                                        activeRequests: u,
                                        onChangeModelSetting: W(),
                                        currentThreadModel: c,
                                        inlineEmbeddedDisplay: !0,
                                        isStaticSharedThread: !0,
                                        isNewThread: !1,
                                        onTurnEnteredViewport: J,
                                        initiallyHighlightedMessageId: I
                                    })
                                }), z]
                            })
                        })
                    })
                }), (0,
                v.jsxs)("div", {
                    className: (0,
                    F.Z)("grid grid-cols-2"),
                    children: [(0,
                    v.jsx)("div", {
                        children: (0,
                        v.jsxs)(e9.mH, {
                            onClick: function() {
                                D.closeSharingModal()
                            },
                            className: (0,
                            F.Z)("ml-0 border-0 pl-0 hover:bg-transparent"),
                            children: [(0,
                            v.jsx)(eo.ZP, {
                                icon: G.H33
                            }), "INTERNAL ONLY - DO NOT SHARE LINKS EXTERNALLY"]
                        })
                    }), (0,
                    v.jsx)("div", {
                        className: (0,
                        F.Z)("text-right"),
                        children: L
                    })]
                })]
            })
        }
        var oF = j.Z.main(o_())
          , oL = j.Z.div(oM())
          , oA = j.Z.div(oT())
          , oB = j.Z.div(oN())
          , oq = j.Z.div(oP(), function(e) {
            return e.$active,
            ""
        })
          , oU = j.Z.div(oI())
          , oO = j.Z.div(oS())
          , oz = j.Z.input(oZ())
          , oH = j.Z.div(oR());
        function oV() {
            var e = (0,
            p._)(["p-2 rounded-md ", ""]);
            return oV = function() {
                return e
            }
            ,
            e
        }
        var oW = (0,
        $.vU)({
            newChat: {
                defaultMessage: "New chat",
                id: "Stage.newChat",
                description: "New chat button tooltip"
            },
            closeSidebar: {
                defaultMessage: "Close sidebar",
                id: "Stage.closeSidebar",
                description: "Close sidebar button tooltip"
            },
            openSidebar: {
                defaultMessage: "Open sidebar",
                id: "Stage.openSidebar",
                description: "Open sidebar button tooltip"
            },
            closeDebug: {
                defaultMessage: "Close debug sidebar",
                id: "Stage.closeDebug",
                description: "Close debug sidebar button tooltip"
            },
            openDebug: {
                defaultMessage: "Open debug sidebar",
                id: "Stage.openDebug",
                description: "Open debug sidebar button tooltip"
            }
        });
        function oG(e) {
            var n = e.isStaticSharedThread
              , t = e.handleResetThread
              , r = e.toggleDebugSidebar
              , a = e.activeSidebar
              , i = (0,
            Q.Z)()
              , o = R()
              , s = o.isNavigationCollapsed
              , l = o.toggleNavigation
              , u = (0,
            k.hz)()
              , c = u.has(K.M6)
              , d = "debug" === a
              , f = u.has("debug") && (c || !d);
            return n ? null : (0,
            v.jsxs)(v.Fragment, {
                children: [c && (0,
                v.jsx)("div", {
                    className: "absolute left-4 top-4 z-10 hidden md:inline-block",
                    children: (0,
                    v.jsx)(ny.u, {
                        side: "right",
                        label: s ? i.formatMessage(oW.openSidebar) : i.formatMessage(oW.closeSidebar),
                        children: (0,
                        v.jsx)(o$, {
                            $isNewLayout: c,
                            onClick: l,
                            "aria-label": s ? i.formatMessage(oW.openSidebar) : i.formatMessage(oW.closeSidebar),
                            children: (0,
                            v.jsx)(eo.ZP, {
                                icon: G.iYc
                            })
                        })
                    })
                }), (0,
                v.jsxs)("div", {
                    className: (0,
                    F.Z)("absolute z-10 hidden flex-col gap-2 md:flex", c ? "right-4 top-4" : "right-3 top-3"),
                    children: [c && (0,
                    v.jsxs)(v.Fragment, {
                        children: [(0,
                        v.jsx)(ny.u, {
                            side: "left",
                            label: i.formatMessage(oW.newChat),
                            children: (0,
                            v.jsx)(o$, {
                                $isNewLayout: c,
                                onClick: function() {
                                    t()
                                },
                                "aria-label": i.formatMessage(oW.newChat),
                                children: (0,
                                v.jsx)(eo.ZP, {
                                    icon: G.vPQ
                                })
                            })
                        }), f && (0,
                        v.jsx)("div", {
                            className: "my-3 border-t-[1px] border-black/20 dark:border-white/20"
                        })]
                    }), f && (0,
                    v.jsx)(ny.u, {
                        side: "left",
                        label: d ? i.formatMessage(oW.closeDebug) : i.formatMessage(oW.openDebug),
                        children: (0,
                        v.jsx)(o$, {
                            className: (0,
                            F.Z)(f && "opacity-40 hover:opacity-100"),
                            onClick: r,
                            $isNewLayout: c,
                            "aria-label": d ? i.formatMessage(oW.closeDebug) : i.formatMessage(oW.openDebug),
                            children: (0,
                            v.jsx)(eo.ZP, {
                                icon: G.cDN
                            })
                        })
                    })]
                })]
            })
        }
        var o$ = j.Z.button(oV(), function(e) {
            return e.$isNewLayout ? "hover:bg-black/10 hover:dark:bg-white/10" : "bg-black/10 dark:bg-white/10 "
        })
          , oQ = r2()(function() {
            return Promise.resolve().then(t.bind(t, 1215))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [1215]
                }
            },
            ssr: !1
        });
        function oJ(e) {
            var n = e.children;
            return (0,
            v.jsx)(oQ, {
                className: "h-full dark:bg-gray-800",
                followButtonClassName: "scroll-convo",
                initialScrollBehavior: "auto",
                children: n
            })
        }
        function oY() {
            var e, n, t, r, a, i, o = (n = (e = nd()).isLoggedInWithMfa,
            t = e.isUsernamePassword,
            r = e.setupMfa,
            i = (a = (0,
            nJ.p0)()).filter(function(e) {
                return !("none" === e.manifest.auth.type || "service_http" === e.manifest.auth.type)
            }),
            (n || !t) && (i = []),
            {
                disablePluginsThatWeCantUse: function() {
                    var e = a.filter(function(e) {
                        return "none" === e.manifest.auth.type || "service_http" === e.manifest.auth.type
                    });
                    (0,
                    nJ.dT)(e.map(function(e) {
                        return e.id
                    }))
                },
                pluginsWeCantUse: i,
                setupMfa: r
            }), s = o.disablePluginsThatWeCantUse, l = o.pluginsWeCantUse, u = o.setupMfa, c = (0,
            y.useCallback)(function() {
                s()
            }, [s]);
            return 0 === l.length ? null : (0,
            v.jsx)(e9.ZP, {
                isOpen: !0,
                onModalClose: c,
                title: "Some of your plugins require two-factor authentication.",
                primaryButton: (0,
                v.jsx)(e9.mH, {
                    onClick: u,
                    title: "Setup two-factor authentication",
                    color: "primary"
                }),
                secondaryButton: (0,
                v.jsx)(e9.mH, {
                    onClick: s,
                    title: "Turn off the plugins"
                }),
                type: "danger",
                children: (0,
                v.jsx)("div", {
                    className: "flex flex-col gap-2 py-4",
                    children: l.map(function(e) {
                        return (0,
                        v.jsx)("div", {
                            className: "w-full",
                            children: (0,
                            v.jsx)(nI, {
                                plugin: e
                            })
                        }, e.id)
                    })
                })
            })
        }
        var oK = t(16578)
          , oX = t.n(oK)
          , o0 = t(74853)
          , o1 = t(99652)
          , o2 = t(1220);
        function o3(e) {
            var n = e.isOpen
              , t = e.onClose
              , r = (0,
            C.WS)()
              , a = (0,
            m._)((0,
            y.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            b.useRouter)()
              , l = (0,
            y.useCallback)(function() {
                r(w.s6.closeAccountPaymentModal),
                t()
            }, [t, r])
              , u = (0,
            y.useCallback)((0,
            nl._)(function() {
                var e;
                return (0,
                nu.Jh)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        o(!0),
                        r(w.s6.clickAccountCustomerPortal),
                        n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, 4, 5]),
                        [4, Y.ZP.fetchCustomerPortalUrl()];
                    case 2:
                        return e = n.sent(),
                        s.push(e.url),
                        [3, 5];
                    case 3:
                        return n.sent(),
                        ed.m.warning("The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.", {
                            hasCloseButton: !0
                        }),
                        [3, 5];
                    case 4:
                        return o(!1),
                        [7];
                    case 5:
                        return [2]
                    }
                })
            }), [s, r, o])
              , c = (0,
            y.useCallback)(function() {
                r(w.s6.clickAccountPaymentGetHelp)
            }, [r])
              , d = (0,
            k.hz)()
              , f = (0,
            k.e2)()
              , h = (0,
            k.YD)();
            return (0,
            v.jsxs)(o0.x, {
                isOpen: n,
                onClose: t,
                children: [(0,
                v.jsxs)("div", {
                    className: "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
                    children: [(0,
                    v.jsx)("span", {
                        className: "text-base font-semibold sm:text-base",
                        children: "Your plan"
                    }), (0,
                    v.jsx)("button", {
                        className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                        onClick: l,
                        children: (0,
                        v.jsx)(G.q5L, {
                            className: "h-6 w-6"
                        })
                    })]
                }), (0,
                v.jsx)("div", {
                    className: "grid",
                    children: (0,
                    v.jsx)("div", {
                        className: "relative order-1 col-span-1 sm:order-2",
                        children: (0,
                        v.jsx)(o1.Oi, {
                            rowElements: [(0,
                            v.jsx)(o1.Cu, {
                                text: o2.S.plus.name,
                                children: (0,
                                v.jsx)("span", {
                                    className: "font-semibold text-gray-500",
                                    children: o2.S.plus.costInDollars
                                })
                            }, "row-plus-plan-name"), (0,
                            v.jsx)(o1.hi, {
                                disabled: !0,
                                variant: "primary-disabled",
                                text: o2.S.plus.callToAction.active
                            }, "row-plus-plan-button"), (0,
                            v.jsx)(o1.G, {
                                text: o2.S.plus.demandAccess
                            }, "row-plus-plan-demand"), (0,
                            v.jsx)(o1.G, {
                                text: o2.S.plus.responseSpeed
                            }, "row-plus-plan-speed"), (0,
                            v.jsx)(o1.G, {
                                className: "sm:pb-1",
                                text: o2.S.plus.modelFeatures
                            }, "row-plus-plan-feathers"), (null == f ? void 0 : f.purchase_origin_platform) === n0._.MOBILE_IOS && (0,
                            v.jsx)(o1.Hb, {
                                className: "sm:pb-1",
                                text: o2.S.manageSubscriptionIos.callToAction
                            }, "row-plus-plan-manage-ios"), (!f || f.purchase_origin_platform === n0._.WEBAPP) && h && (0,
                            v.jsx)(o1.nR, {
                                className: "sm:pb-1",
                                isLoading: i,
                                text: o2.S.manageSubscriptionWeb.callToAction,
                                onClick: u
                            }, "row-plus-plan-manage"), (0,
                            v.jsx)(oX(), {
                                href: n0.L,
                                target: "_blank",
                                passHref: !0,
                                children: (0,
                                v.jsx)(o1.nR, {
                                    className: "sm:pb-1",
                                    isLoading: !1,
                                    text: o2.S.getHelp.callToAction,
                                    onClick: c
                                }, "row-plus-plan-help")
                            }, "row-plus-plan-help-link"), d.has("business_seats") ? (0,
                            v.jsx)(oX(), {
                                href: "/payments/business",
                                target: "_blank",
                                passHref: !0,
                                children: (0,
                                v.jsx)(o1.nR, {
                                    className: "sm:pb-1",
                                    isLoading: !1,
                                    text: o2.S.business.callToAction,
                                    onClick: c
                                }, "row-plus-plan-help")
                            }, "row-plus-plan-create-business-team") : null]
                        })
                    })
                })]
            })
        }
        var o5 = t(48432)
          , o4 = {
            showAccountPaymentModal: !1
        }
          , o7 = (0,
        M.ZP)()(function(e) {
            return (0,
            S._)((0,
            h._)({}, o4), {
                setShowAccountPaymentModal: function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W();
                    e({
                        showAccountPaymentModal: n
                    }),
                    t && t()
                }
            })
        })
          , o8 = t(89678)
          , o6 = t.n(o8)
          , o9 = t(55989)
          , se = [/\bnigger\w*/i, /\bfaggot\w*/i, /\bkike\w*/i, /\bdykes?\b/i, /\bwetbacks?\b/i, /\bchinks?\b/i, /\bgooks?\b/i, /\bpakis?\b/i, /\binjuns?\b/i, /\btrannys?\b/i, /\btrannies\b/i, /\bspicks?\b/i, /\bshemales?\b/i];
        function sn() {
            var e = (0,
            p._)(["relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"]);
            return sn = function() {
                return e
            }
            ,
            e
        }
        function st() {
            var e = (0,
            p._)(["grow flex-1 overflow-hidden"]);
            return st = function() {
                return e
            }
            ,
            e
        }
        function sr() {
            var e = (0,
            p._)(["absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2"]);
            return sr = function() {
                return e
            }
            ,
            e
        }
        var sa = (0,
        $.vU)({
            contentPolicyViolation: {
                id: "thread.modal.restrictedTerms.title",
                defaultMessage: "This prompt may violate our content policy.",
                description: "Title for the restricted terms modal"
            },
            acknowledge: {
                id: "thread.modal.common.acknowledge",
                defaultMessage: "Acknowledge",
                description: "Acknowledge button text"
            },
            doNotShareSensitive: {
                id: "thread.modal.onboarding.title",
                defaultMessage: "Do not share sensitive materials with this application",
                description: "Title for the onboarding warning modal"
            },
            freeResearchPreview: {
                id: "thread.chatgptFreeResearchPreview",
                defaultMessage: "Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT May 12 Version</link>",
                description: "Free Research Preview disclaimer"
            },
            mayProduceInaccurateInformation: {
                id: "thread.chatgptMayProduceInaccurateInformation",
                defaultMessage: "ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT May 12 Version</link>",
                description: "ChatGPT disclaimer for producing inaccurate information"
            },
            somethingWentWrong: {
                id: "thread.modal.unrecoverableError.title",
                defaultMessage: "Something went wrong",
                description: "Title for the UnrecoverableErrorModal"
            },
            tryAgainLater: {
                id: "thread.modal.unrecoverableError.description",
                defaultMessage: "We're sorry, but something went wrong. Please try again later.",
                description: "Description for the UnrecoverableErrorModal"
            },
            resetThread: {
                id: "thread.modal.unrecoverableError.resetThread",
                defaultMessage: "Reset thread",
                description: "Reset thread button text"
            },
            reportModalThankYouTitle: {
                id: "thread.modal.reportModalThankYou.title",
                defaultMessage: "Thank you for your report!",
                description: "Title for the post-report thank-you modal"
            },
            reportModalThankYouDescription: {
                id: "thread.modal.reportModalThankYou.description",
                defaultMessage: "Thank you for your report. We take all reports seriously and will review this thread as soon as possible.",
                description: "Description for the post-report thank-you modal"
            },
            reportModalThankYouDismiss: {
                id: "thread.modal.reportModalThankYou.dismissButton",
                defaultMessage: "Close",
                description: "Close button for the post-report thank-you modal"
            },
            sharedConversationContinueConversation: {
                id: "thread.sharedConversation.continue",
                defaultMessage: "Continue this conversation",
                description: "Button for shared conversations to allow user to continue conversation in their own history"
            },
            sharedConversationReportConversation: {
                id: "thread.sharedConversation.report",
                defaultMessage: "Report conversation",
                description: "Button for shared conversations to report conversation for legal, safety, or other reasons"
            },
            sharedConversationModerateConversation: {
                id: "thread.sharedConversation.moderate",
                defaultMessage: "Moderate conversation",
                description: "Button for shared conversations to moderate a conversation for legal, safety, or other reasons"
            }
        })
          , si = function(e) {
            var n, t, r, a, i, o, s, l, u, c, d, f, g, p, x, j, M, T, P, Z, D, L, A, B, q, U, O, z, H, V, $ = e.initialThreadData, ee = e.clientThreadId, en = e.showAccountPortalModal, et = e.setShowAccountPortalModal, er = e.activeSidebar, ea = e.setActiveSidebar, eo = e.activeRequests, es = e.setActiveRequests, el = e.newChatName, eu = e.setNewChatName, ed = e.userModifiedTitle, ef = e.handleResetThread, eh = e.isStaticSharedThread, eg = e.initiallyHighlightedMessageId, ep = e.continueConversationUrl, ev = (0,
            Q.Z)(), ex = (0,
            k.hz)(), eb = (0,
            ns.Fl)(), ey = eb.isPluginsAvailable, ej = eb.isCodeInterpreterAvailable, eC = (0,
            X.w$)(), ew = (0,
            C.WS)(), ek = ex.has(K.Pt) && eC, e_ = (0,
            y.useContext)(E.QL).historyDisabled, eM = (0,
            b.useRouter)(), eT = eh && (null === (B = eM.query) || void 0 === B ? void 0 : null === (q = B.shareParams) || void 0 === q ? void 0 : q[1]) === "moderate", eN = (0,
            _.U0)(ee), eP = (0,
            _.Kt)(ee), eI = (0,
            _.oq)(ee), eS = (0,
            m._)((0,
            y.useState)(!1), 2), eZ = eS[0], eR = eS[1], eD = (0,
            m._)((0,
            y.useState)(!1), 2), eE = eD[0], eF = eD[1], eL = (0,
            m._)((0,
            y.useState)(), 2), eA = eL[0], eB = eL[1], eq = (0,
            m._)((0,
            y.useState)(!1), 2), eU = eq[0], ez = eq[1], eH = (0,
            m._)((0,
            y.useState)(), 2), eV = eH[0], eW = eH[1], eG = (0,
            m._)((0,
            y.useState)(), 2), e$ = eG[0], eQ = eG[1], eJ = (0,
            m._)((0,
            y.useState)(), 2), eY = eJ[0], eK = eJ[1], eX = (0,
            y.useRef)(null), e0 = (0,
            k.Xj)().isLoading, e1 = (0,
            k.nR)(), e2 = (0,
            eO.g)(function(e) {
                return e.flags.isUserInCanPayGroup
            }), e3 = ex.has(K.FZ), e5 = (0,
            m._)((0,
            y.useState)(!1), 2), e4 = e5[0], e7 = e5[1], e8 = (t = (n = {
                exempt: !1,
                onRestrictedTermFound: (0,
                y.useCallback)(function(e) {
                    e7(!0),
                    ew(w.s6.promptUsedRestrictedWords, {
                        threadId: _.tQ.getServerThreadId(ee),
                        content: e
                    })
                }, [ew, ee])
            }).exempt,
            r = n.onRestrictedTermFound,
            i = (a = (0,
            m._)((0,
            y.useState)(!1), 2))[0],
            o = a[1],
            {
                hasRestrictedTerms: i,
                checkRestrictedTerms: (0,
                y.useCallback)(function(e) {
                    var n;
                    return (se.some(function(t) {
                        var r = t.exec(e);
                        return r && (n = r[0]),
                        r
                    }),
                    !t && n) ? (o(!0),
                    null == r || r(n),
                    !0) : (o(!1),
                    !1)
                }, [t, r])
            }), e6 = e8.hasRestrictedTerms, ne = e8.checkRestrictedTerms, nn = (0,
            m._)((0,
            y.useState)(!0), 2), nt = nn[0], nr = nn[1], na = (0,
            m._)((0,
            y.useState)(!1), 2), ni = na[0], no = na[1], nc = (0,
            oh.Z)().availableModels, nd = (0,
            nJ.p0)(), nf = (0,
            rw.ZP)(nc, $.lastModelUsed, ee), nh = nf.modelBackend, ng = nf.onChangeModelSetting, nm = (0,
            y.useMemo)(function() {
                return nc.find(function(e) {
                    return e.id === nh
                })
            }, [nc, nh]), np = em(), nx = (0,
            y.useCallback)(function() {
                np(),
                eu(""),
                ew(w.s6.newThread)
            }, [ew, np, eu]), nb = ed || el || $.title, ny = (0,
            m._)((0,
            y.useState)(), 2), nj = ny[0], nC = ny[1], nw = (0,
            y.useCallback)(function(e, n) {
                var t = null != n ? n : "";
                e_ || "" === t || Y.ZP.generateTitle(t, e, nh).then(function(e) {
                    var t = e.title;
                    eu(t),
                    np(),
                    ew(w.s6.renameThread, {
                        threadId: n,
                        content: t,
                        model: nh
                    })
                }).catch(function(e) {
                    console.error(e)
                })
            }, [e_, ew, nh, eu, np]), nk = (0,
            y.useCallback)(function(e, n, t) {
                var r = ex.has(K.uj);
                e_ || !r || void 0 === t || nv.Cv.getIsIncompleteFromMessage(t) || nv.Cv.getWasInterruptedFromMessage(t) || Y.ZP.generateSuggestions(e, n, nh).then(function(e) {
                    nC({
                        messageId: n,
                        suggestions: e.suggestions
                    })
                }).catch(function(e) {
                    console.error(e)
                })
            }, [ex, e_, nh]), nM = (0,
            _.Uy)(ee), nT = (s = ey && (null == nm ? void 0 : null === (U = nm.enabledTools) || void 0 === U ? void 0 : U.includes("tools3")) ? nd.map(function(e) {
                return e.id
            }) : void 0,
            l = (0,
            k.hz)(),
            u = (0,
            y.useId)(),
            c = (0,
            C.WS)(),
            d = (0,
            rw.CS)(function(e) {
                return null == e ? void 0 : e.setCapTimeout
            }),
            f = (0,
            rw.CS)(function(e) {
                return null == e ? void 0 : e.clearCapTimeout
            }),
            g = (0,
            y.useContext)(E.QL).historyDisabled,
            p = (0,
            y.useRef)(0),
            x = (0,
            y.useRef)({}),
            j = (0,
            y.useCallback)(function(e, n, t, r) {
                var a, i, o = r.eventSource, s = function() {
                    setTimeout(function() {
                        I.removeAborterById(t),
                        es(function(e) {
                            var n = new Set(e);
                            return n.delete(t),
                            n
                        }),
                        delete x.current[t],
                        _.tQ.releaseThread(ee)
                    }, 0)
                }, u = _.tQ.getTree(ee), g = t, m = u.getParentId(g), p = n === nz.Os.Continue, v = !0, b = !1, y = u.getMessage(g), j = new Set, C = u.getIsBlockedFromNode(m), k = !1, M = !1, N = o6()(function() {
                    C || k || _.tQ.updateTree(ee, function(e) {
                        e.updateNodeMessage(g, y)
                    })
                }, 50, {
                    leading: !0,
                    maxWait: 50
                });
                function P() {
                    return (P = (0,
                    nl._)(function(e, n, t) {
                        var r, a, i, o, s, l = arguments;
                        return (0,
                        nu.Jh)(this, function(d) {
                            switch (d.label) {
                            case 0:
                                r = l.length > 3 && void 0 !== l[3] && l[3],
                                d.label = 1;
                            case 1:
                                return d.trys.push([1, 3, , 4]),
                                [4, (0,
                                tI._I)(t, !1, e, u.getMessageId(n))];
                            case 2:
                                return i = (a = d.sent()).isBlocked,
                                o = a.isFlagged,
                                (i || o) && (M = !0),
                                i ? (k = !0,
                                r || (C = !0),
                                _.tQ.updateTree(ee, function(e) {
                                    e.updateNode(n, {
                                        message: {
                                            content: {
                                                parts: {
                                                    $set: [""]
                                                }
                                            }
                                        },
                                        metadata: {
                                            $set: (0,
                                            S._)((0,
                                            h._)({}, tI.sK), {
                                                completionSampleFinishTime: Date.now()
                                            })
                                        }
                                    })
                                }),
                                c(r ? w.s6.completionBlockedByModeration : w.s6.promptBlockedByModeration, {
                                    threadId: e,
                                    id: n
                                })) : o ? (_.tQ.updateTree(ee, function(e) {
                                    e.updateNode(n, {
                                        metadata: {
                                            $set: tI.Mf
                                        }
                                    })
                                }),
                                c(r ? w.s6.completionFlaggedByModeration : w.s6.promptFlaggedByModeration, {
                                    threadId: e,
                                    id: n
                                })) : r && C && _.tQ.updateTree(ee, function(e) {
                                    e.updateNodeMessage(n, y)
                                }),
                                [3, 4];
                            case 3:
                                return s = d.sent(),
                                k = !0,
                                _.tQ.updateTree(ee, function(e) {
                                    e.updateNode(n, {
                                        metadata: {
                                            $set: {
                                                err: "An error occured",
                                                errType: "danger",
                                                completionSampleFinishTime: Date.now()
                                            }
                                        }
                                    })
                                }),
                                c(w.s6.moderationError, {
                                    threadId: e,
                                    content: JSON.stringify(s || "")
                                }),
                                tP().publish("UnrecoverableError"),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        })
                    })).apply(this, arguments)
                }
                return a = (0,
                nl._)(function(r) {
                    var a, Z, R, D, E, F, L, A, B, q, U, O, z, H, V;
                    return (0,
                    nu.Jh)(this, function(W) {
                        switch (W.label) {
                        case 0:
                            if ("error" === r.type)
                                return console.error(a = r.error),
                                Z = (null == a ? void 0 : a.message) || "Something went wrong",
                                _.tQ.updateTree(ee, function(e) {
                                    e.updateNode(g, {
                                        message: {
                                            $set: y
                                        },
                                        metadata: {
                                            $set: {
                                                err: Z,
                                                errType: "danger",
                                                errCode: (0,
                                                o9.T)(a) && a.code || "",
                                                completionSampleFinishTime: Date.now()
                                            }
                                        }
                                    })
                                }),
                                s(),
                                (0,
                                o9.T)(a) && (null == a ? void 0 : a.code) === rw.uU && (null == a ? void 0 : a.clearsIn) && (d(new Date(Date.now() + 1e3 * a.clearsIn).toISOString()),
                                setTimeout(function() {
                                    f()
                                }, 1e3 * a.clearsIn)),
                                [2];
                            if ("moderation" === r.type && (R = r.isCompletion,
                            D = r.messageId,
                            E = r.conversationId,
                            F = r.flagged,
                            ((L = r.blocked) || F) && _.tQ.updateTree(ee, function(e) {
                                var n = e.messageIdToNodeId(D);
                                e.updateNode(n, {
                                    message: {
                                        content: {
                                            parts: {
                                                $set: [""]
                                            }
                                        }
                                    },
                                    metadata: {
                                        $set: (0,
                                        S._)((0,
                                        h._)({}, L ? tI.sK : tI.Mf), {
                                            completionSampleFinishTime: Date.now()
                                        })
                                    }
                                })
                            }),
                            (F || L) && c(R ? L ? w.s6.completionBlockedByModeration : w.s6.completionFlaggedByModeration : L ? w.s6.promptBlockedByModeration : w.s6.promptFlaggedByModeration, {
                                threadId: E,
                                id: D
                            })),
                            "message" === r.type) {
                                if (A = r.message,
                                B = r.conversationId,
                                v && u.isFirstCompletion) {
                                    if ((null == A ? void 0 : A.author.role) === nz.uU.System)
                                        return u.appendSystemMessageToRoot(A),
                                        [2];
                                    if ((null == A ? void 0 : A.author.role) === nz.uU.User)
                                        return [2]
                                }
                                v ? (U = (null === (q = _.qN.getState().threads[ee]) || void 0 === q ? void 0 : q.continuingFromSharedConversationId) != null,
                                _.tQ.removeContinuingFromSharedConversationId(ee),
                                v = !1,
                                b = u.isFirstCompletion || U,
                                (null == A ? void 0 : A.id) && j.add(t),
                                void 0 !== B && (i = B,
                                (0,
                                _.Zz)(ee) && _.tQ.setServerIdForNewThread(ee, B)),
                                _.tQ.updateTree(ee, function(e) {
                                    e.updateNodeMessage(g, A)
                                }),
                                b && nx(B),
                                p || function(e, n, t) {
                                    P.apply(this, arguments)
                                }(B, m, u.getTextFromLastNTurns(m, 1), !1),
                                c(w.s6.generateCompletion, {
                                    id: t,
                                    threadId: B,
                                    completionType: n,
                                    eventSource: o,
                                    model: e
                                }),
                                I.addAborter(t, x.current[t])) : p || A.id === u.getMessageId(g) || (j.add(A.id),
                                N.flush(),
                                _.tQ.updateTree(ee, function(e) {
                                    e.addNode(A.id, A, g, nz.Jq.Completion)
                                }),
                                g = A.id,
                                _.tQ.setThreadCurrentLeafId(ee, g)),
                                y = A
                            }
                            if (N(),
                            "done" !== r.type || (C || k || (N.flush(),
                            M || (O = u.getMessageId(g),
                            b && nw(O, i),
                            nk(i, O, y))),
                            _.tQ.updateTree(ee, function(e) {
                                e.updateNode(g, {
                                    metadata: {
                                        $set: (0,
                                        S._)((0,
                                        h._)({}, u.getMetadata(g)), {
                                            completionSampleFinishTime: Date.now()
                                        })
                                    }
                                })
                            }),
                            s(),
                            !l.has("tools3_dev") || !(z = function(e) {
                                var n, t, r, a = (null === (n = e.metadata) || void 0 === n ? void 0 : null === (t = n.invoked_plugin) || void 0 === t ? void 0 : t.http_api_call_data) || (null === (r = e.metadata) || void 0 === r ? void 0 : r.http_api_call_data);
                                if (void 0 !== a) {
                                    if (e.author.role !== nz.uU.Assistant) {
                                        console.error("Refusing to make localhost plugin HTTP call from non-assistant message", e);
                                        return
                                    }
                                    if ("object" != typeof a || "string" != typeof a.namespace || 0 === a.namespace.length || "string" != typeof a.function_name || 0 === a.function_name.length || "string" != typeof a.parent_message_id || 0 === a.parent_message_id.length || "string" != typeof a.url || 0 === a.url.length || "string" != typeof a.method || !["get", "post", "put", "delete", "patch"].includes(a.method) || !Array.isArray(a.qs_params) || a.qs_params.some(function(e) {
                                        return !Array.isArray(e) || 2 !== e.length || "string" != typeof e[0] || "string" != typeof e[1]
                                    }) || "object" != typeof a.headers || Object.keys(a.headers).some(function(e) {
                                        return "string" != typeof e
                                    }) || Object.values(a.headers).some(function(e) {
                                        return "string" != typeof e
                                    }) || !(null === a.body || "object" == typeof a.body && Object.keys(a.body).every(function(e) {
                                        return "string" == typeof e
                                    })) || "string" != typeof a.api_function_type || !["kwargs", "chat"].includes(a.api_function_type)) {
                                        console.error("Refusing to make localhost plugin HTTP call with invalid metadata", e);
                                        return
                                    }
                                    if (!/^https?:\/\/localhost:/.test(a.url)) {
                                        console.error("Refusing to make localhost plugin HTTP call with non-localhost URL", e);
                                        return
                                    }
                                    return a
                                }
                            }(y))))
                                return [3, 2];
                            return [4, function(e) {
                                return nH.apply(this, arguments)
                            }(z)];
                        case 1:
                            H = W.sent(),
                            V = g,
                            _.tQ.updateTree(ee, function(e) {
                                var n = !0
                                  , t = !1
                                  , r = void 0;
                                try {
                                    for (var a, i = H[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                                        var o = a.value;
                                        e.addNode(o.id, o, V, nz.Jq.Completion, {
                                            completionSampleFinishTime: Date.now()
                                        }),
                                        V = o.id
                                    }
                                } catch (e) {
                                    t = !0,
                                    r = e
                                } finally {
                                    try {
                                        n || null == i.return || i.return()
                                    } finally {
                                        if (t)
                                            throw r
                                    }
                                }
                            }),
                            _.tQ.setThreadCurrentLeafId(ee, V),
                            T(e, nz.Os.Next, V, {}, void 0, void 0),
                            W.label = 2;
                        case 2:
                            return [2]
                        }
                    })
                }),
                function(e) {
                    return a.apply(this, arguments)
                }
            }, [c, nx, nw, es, ee]),
            T = (0,
            y.useCallback)((M = (0,
            nl._)(function(e, n, t, r) {
                var a, i, o, l, c, d, f, h, m, v, b, y = arguments;
                return (0,
                nu.Jh)(this, function(C) {
                    switch (C.label) {
                    case 0:
                        return a = !(y.length > 4) || void 0 === y[4] || y[4],
                        i = y.length > 5 ? y[5] : void 0,
                        o = _.tQ.getTree(ee),
                        _.tQ.retainThread(ee),
                        l = "request-".concat(u, "-").concat(p.current++),
                        es(function(e) {
                            var n = new Set(e);
                            return n.add(l),
                            n
                        }),
                        _.tQ.updateTree(ee, function(e) {
                            e.addNode(l, "", t, nz.Jq.Completion)
                        }),
                        a && _.tQ.setThreadCurrentLeafId(ee, l),
                        d = [],
                        f = o.getNode(t),
                        n === nz.Os.Next || n === nz.Os.Variant ? (c = (null === (h = (m = o.getNode(f.parentId)).message) || void 0 === h ? void 0 : h.id) || m.id,
                        d.push(f.message)) : c = f.message.id,
                        void 0 === (v = _.tQ.getServerThreadId(ee)) && (0,
                        _.Zz)(ee) && _.tQ.updateInitialThreadDataForNewThread(ee, e, s),
                        [4, Y.ZP.publicApiCompletionStream({
                            model: e,
                            completionType: n,
                            threadId: v,
                            continueFromSharedConversationId: nM,
                            historyDisabled: g,
                            parentMessageId: c,
                            messages: d,
                            enabledPluginIds: s,
                            completionMetadata: i
                        }, j(e, n, l, r))];
                    case 1:
                        return b = C.sent(),
                        x.current[l] = b,
                        [2]
                    }
                })
            }),
            function(e, n, t, r) {
                return M.apply(this, arguments)
            }
            ), [ee, u, es, nM, g, s, j])), nN = (0,
            y.useCallback)(function() {
                if (eI) {
                    var e = _.tQ.getTree(ee).getBranchFromLeaf(eI);
                    e.forEach(function(e) {
                        I.abortAndRemoveById(e.id)
                    }),
                    es(function(n) {
                        var t = new Set(n);
                        return e.forEach(function(e) {
                            t.delete(e.id)
                        }),
                        t
                    })
                }
            }, [eI, es, ee]), nP = (0,
            y.useCallback)((P = (0,
            nl._)(function(e, n, t, r) {
                var a, i, o, s, l = arguments;
                return (0,
                nu.Jh)(this, function(u) {
                    return a = !(l.length > 4) || void 0 === l[4] || l[4],
                    i = l.length > 5 ? l[5] : void 0,
                    o = l.length > 6 ? l[6] : void 0,
                    r && nN(),
                    s = _.tQ.getTree(ee),
                    e !== nz.Os.Continue && ne(s.getTextFromNode(n)) || nT(i ? (0,
                    rw.xt)(!1, nc) : nh, e, n, t, a, o),
                    [2]
                })
            }),
            function(e, n, t, r) {
                return P.apply(this, arguments)
            }
            ), [ne, ee, nT, nc, nh, nN]), nI = (0,
            y.useCallback)(function(e, n, t, r) {
                _.tQ.updateTree(ee, function(t) {
                    t.addNode(e, r, n, nz.Jq.Prompt)
                })
            }, [ee]), nS = (0,
            y.useCallback)(function(e, n, t) {
                var r = n.value
                  , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                nI(e, eI, nz.Jq.Prompt, r),
                nP(nz.Os.Next, e, t, !0, void 0, void 0, a)
            }, [eI, nI, nP]), nZ = (0,
            _.nh)(ee, eI), nR = (0,
            y.useMemo)(function() {
                var e, n, t = nZ.type === nz.Jq.Prompt, r = (null === (e = nZ.metadata) || void 0 === e ? void 0 : e.err) && (null === (n = nZ.metadata) || void 0 === n ? void 0 : n.errCode) !== tI.Dd;
                return !!(t || r) && 0 === eo.size
            }, [eo.size, nZ]), nD = (0,
            rw.CS)(function(e) {
                return e.isoDate
            }), nE = (0,
            y.useMemo)(function() {
                var e, n = (null === (e = nZ.metadata) || void 0 === e ? void 0 : e.errCode) === rw.uU;
                return nR && n && null != nD && "" !== nD
            }, [null === (O = nZ.metadata) || void 0 === O ? void 0 : O.errCode, nR, nD]), nF = (0,
            y.useCallback)(function(e, n) {
                var t, r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none", i = arguments.length > 4 ? arguments[4] : void 0, o = _.tQ.getTree(ee);
                t = nR ? o.getLastValidNode(e).id : o.getParentPromptNode(e).id,
                nP(nz.Os.Variant, t, n, !1, r, i, {
                    variantPurpose: a
                })
            }, [nP, nR, ee]), nL = (0,
            y.useCallback)(function(e) {
                ew(w.s6.continueCompletion),
                nP(nz.Os.Continue, e, {
                    eventSource: "mouse"
                }, !1)
            }, [ew, nP]), nA = (0,
            y.useCallback)(function(e) {
                var n = eI
                  , t = !0
                  , r = !1
                  , a = void 0;
                try {
                    for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0)
                        !function() {
                            var e = i.value;
                            e.conversation_id && (0,
                            _.Zz)(ee) && _.tQ.setServerIdForNewThread(ee, e.conversation_id),
                            _.tQ.updateTree(ee, function(t) {
                                t.addNode(e.message.id, e.message, n, nz.Jq.Completion)
                            }),
                            n = e.message.id
                        }()
                } catch (e) {
                    r = !0,
                    a = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw a
                    }
                }
                _.tQ.setThreadCurrentLeafId(ee, n),
                nP(nz.Os.Next, n, {}, !0, void 0, void 0, void 0)
            }, [eI, nP, ee]), nB = !!(ej && (null == nm ? void 0 : null === (z = nm.enabledTools) || void 0 === z ? void 0 : z.includes("tools2"))), nq = (0,
            y.useCallback)((Z = (0,
            nl._)(function(e, n) {
                var t, r;
                return (0,
                nu.Jh)(this, function(a) {
                    switch (a.label) {
                    case 0:
                        if (!nB)
                            return [3, 2];
                        return n.preventDefault(),
                        n.stopPropagation(),
                        t = n.currentTarget.href,
                        r = _.tQ.getServerThreadId(ee),
                        [4, (0,
                        tS.handleSandboxLinkClick)(ex, r)(e, t)];
                    case 1:
                        a.sent(),
                        a.label = 2;
                    case 2:
                        return [2]
                    }
                })
            }),
            function(e, n) {
                return Z.apply(this, arguments)
            }
            ), [ex, nB, ee]), nU = (0,
            y.useCallback)(function(e) {
                var n = _.tQ.getTree(ee).getLeafFromNode(e);
                _.tQ.setThreadCurrentLeafId(ee, n.id),
                ew(w.s6.changeNode)
            }, [ew, ee]), nO = (0,
            y.useCallback)(function(e, n) {
                _.tQ.updateTree(ee, function(t) {
                    t.updateNodeText(e, n)
                })
            }, [ee]), nV = (0,
            y.useCallback)(function(e, n, t) {
                var r = _.tQ.getServerThreadId(ee);
                if (ew(w.s6.thumbRating, {
                    id: n,
                    threadId: r,
                    rating: t,
                    model: nh
                }),
                void 0 !== r && Y.ZP.submitMessageFeedback({
                    message_id: n,
                    conversation_id: r,
                    rating: t
                }),
                eQ(e),
                eK(n),
                eW(t),
                _.tQ.updateTree(ee, function(n) {
                    var r = n.getMetadata(e);
                    n.updateNode(e, {
                        metadata: {
                            $set: (0,
                            S._)((0,
                            h._)({}, r), {
                                rating: t
                            })
                        }
                    })
                }),
                "thumbsDown" === t && ek) {
                    var a = _.tQ.getTree(ee).getConversationTurns(e || "root");
                    rQ(a[a.length - 1]) && nF(e, {
                        eventSource: "mouse",
                        intent: "comparison"
                    }, !1, "comparison")
                }
            }, [ew, ee, nh, ek, nF]), nW = (0,
            y.useCallback)(function(e, n) {
                if (eV && null != e$ && "" !== e$ && (e || n.length > 0)) {
                    var t = _.tQ.getServerThreadId(ee);
                    ew(w.s6.reportResult, {
                        id: eY,
                        threadId: t,
                        content: e,
                        model: nh,
                        rating: eV,
                        tags: n
                    }),
                    ee && eY && Y.ZP.submitMessageFeedback({
                        message_id: eY,
                        conversation_id: t,
                        rating: eV,
                        text: e,
                        tags: n
                    })
                }
            }, [eV, e$, ee, ew, eY, nh]), nG = (0,
            y.useCallback)(function(e, n) {
                if (eZ && null != eA && "" !== eA) {
                    var t = _.tQ.getServerThreadId(ee);
                    ew(w.s6.reportResult, {
                        id: eY,
                        threadId: t,
                        content: e,
                        model: nh,
                        rating: eV,
                        tags: n
                    }),
                    Y.ZP.submitSharedConversationReportFeedback({
                        message_id: eA,
                        shared_conversation_id: t,
                        text: e,
                        tags: n
                    }),
                    eF(!0)
                }
            }, [eV, eZ, eA, ee, ew, eY, nh]), n$ = (0,
            y.useCallback)((D = (0,
            nl._)(function(e, n, t, r, a, i, o, s, l, u, c) {
                return (0,
                nu.Jh)(this, function(d) {
                    switch (d.label) {
                    case 0:
                        return [4, Y.ZP.submitMessageComparisonFeedback({
                            feedback_version: "comparison_feedback_modal:a:1.0",
                            original_message_id: e,
                            new_message_id: n,
                            rating: t,
                            conversation_id: _.tQ.getServerThreadId(ee),
                            text: u,
                            tags: c.map(function(e) {
                                return e.replace("feedback-", "")
                            }),
                            completion_comparison_rating: r,
                            new_completion_placement: a,
                            feedback_start_time: i,
                            compare_step_start_time: o,
                            new_completion_load_start_time: s,
                            new_completion_load_end_time: l,
                            frontend_submission_time: Date.now(),
                            timezone_offset_min: new Date().getTimezoneOffset()
                        })];
                    case 1:
                        return d.sent(),
                        [2]
                    }
                })
            }),
            function(e, n, t, r, a, i, o, s, l, u, c) {
                return D.apply(this, arguments)
            }
            ), [ee]), nQ = (0,
            y.useCallback)((L = (0,
            nl._)(function(e, n, t, r, a, i, o) {
                return (0,
                nu.Jh)(this, function(s) {
                    switch (s.label) {
                    case 0:
                        return [4, Y.ZP.submitMessageComparisonFeedback({
                            feedback_version: "inline_regen_feedback:a:1.0",
                            original_message_id: e,
                            new_message_id: n,
                            rating: "none",
                            conversation_id: _.tQ.getServerThreadId(ee),
                            text: "",
                            tags: [],
                            completion_comparison_rating: t,
                            new_completion_placement: "not-applicable",
                            feedback_start_time: r,
                            compare_step_start_time: a,
                            new_completion_load_start_time: i,
                            new_completion_load_end_time: o,
                            frontend_submission_time: Date.now(),
                            timezone_offset_min: new Date().getTimezoneOffset()
                        })];
                    case 1:
                        return s.sent(),
                        [2]
                    }
                })
            }),
            function(e, n, t, r, a, i, o) {
                return L.apply(this, arguments)
            }
            ), [ee]), nY = (0,
            y.useCallback)(function(e, n) {
                var t = _.tQ.getTree(ee).getConversationTurns(e)
                  , r = null == t ? void 0 : t[(null == t ? void 0 : t.length) - 1].variantIds
                  , a = (null == r ? void 0 : r.length) === 1;
                nF(e, a ? (0,
                S._)((0,
                h._)({}, n), {
                    intent: "comparison_implicit"
                }) : n, !0, a ? "comparison_implicit" : "none")
            }, [nF, ee]), nK = (0,
            y.useCallback)(function(e) {
                _.tQ.updateTree(ee, function(n) {
                    n.deleteNode(e)
                })
            }, [ee]), n0 = (0,
            y.useCallback)(function() {
                ea(function(e) {
                    return "navigation" !== e && "navigation"
                })
            }, [ea]), n1 = (0,
            y.useCallback)(function() {
                ea(function(e) {
                    return "debug" !== e && "debug"
                })
            }, [ea]), n2 = (0,
            y.useCallback)(function() {
                et(!1)
            }, [et]), n3 = o7(function(e) {
                return {
                    setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                    showAccountPaymentModal: e.showAccountPaymentModal
                }
            }), n5 = n3.showAccountPaymentModal, n4 = n3.setShowAccountPaymentModal, n7 = (0,
            y.useCallback)(function() {
                n4(!1)
            }, [n4]), n8 = (0,
            y.useCallback)(function(e, n) {
                var t = _.tQ.getTree(ee);
                if (t.isFirstCompletion && !e_) {
                    var r, a = t.getParent(n);
                    (null === (r = a.metadata) || void 0 === r ? void 0 : r.errCode) !== tI.Dd && setTimeout(function() {
                        nw(a.message.id)
                    }, 500)
                }
                I.abortAndRemoveById(n),
                eo.has(n) && (_.tQ.updateTree(ee, function(e) {
                    e.updateNodeMessageMetadata(n, {
                        finish_details: {
                            type: "interrupted"
                        }
                    })
                }),
                es(function(e) {
                    var t = new Set(e);
                    return t.delete(n),
                    t
                }))
            }, [nw, e_, eo, es, ee]), n6 = (0,
            y.useCallback)(function() {
                no(!0)
            }, []);
            (0,
            y.useEffect)(function() {
                var e = tP().subscribe("AbortCompletion", n8)
                  , n = tP().subscribe("UnrecoverableError", n6);
                return function() {
                    tP().unsubscribe(e),
                    tP().unsubscribe(n)
                }
            }, [n8, n6]);
            var n9 = (0,
            _.Hk)(ee)
              , te = eN >= 2
              , tn = (0,
            _.Zz)(ee) && !te
              , tt = (0,
            m._)((0,
            y.useState)(""), 2)
              , tr = tt[0]
              , ta = tt[1];
            (0,
            y.useEffect)(function() {
                ta("")
            }, [ee]);
            var ti = (0,
            y.useCallback)(function() {
                nr(!0),
                ec.m.setItem("oai/librarian/hasSeenWarning", "true")
            }, [])
              , to = (0,
            y.useCallback)(function() {
                e7(!1)
            }, [])
              , ts = (0,
            _.lA)(ee, eI)
              , tl = (0,
            _.dz)(ee, eI)
              , tu = N(function(e) {
                return null != e.aborters[n9]
            })
              , tc = (0,
            y.useMemo)(function() {
                return !tu && !ts && tl
            }, [ts, tl, tu])
              , td = (0,
            iX.Z)()
              , tf = eP || e0
              , th = (0,
            _.XK)(ee)
              , tg = R(function(e) {
                return e.sharingModalThreadId === th
            })
              , tm = (0,
            _.r7)(ee);
            return (0,
            v.jsxs)(v.Fragment, {
                children: [(0,
                v.jsxs)(tT(), {
                    children: [(0,
                    v.jsx)("title", {
                        children: nb
                    }), eh && (0,
                    v.jsxs)(v.Fragment, {
                        children: [(0,
                        v.jsx)("meta", {
                            property: "og:site_name",
                            content: "ChatGPT"
                        }), (0,
                        v.jsx)("meta", {
                            name: "robots",
                            content: "noindex,nofollow"
                        }), (0,
                        v.jsx)("meta", {
                            property: "og:title",
                            content: null != nb ? nb : "Shared Conversation on ChatGPT"
                        }), (0,
                        v.jsx)("meta", {
                            property: "og:image",
                            content: "/api/share/og/".concat(th)
                        })]
                    })]
                }), (0,
                v.jsx)(oY, {}), !nt && (0,
                v.jsx)(e9.ZP, {
                    isOpen: !0,
                    onModalClose: ti,
                    icon: t_.Z,
                    title: ev.formatMessage(sa.doNotShareSensitive),
                    primaryButton: (0,
                    v.jsx)(e9.mH, {
                        onClick: ti,
                        title: ev.formatMessage(sa.acknowledge)
                    }),
                    type: "danger"
                }, "OnboardingModal"), e6 && e4 && (0,
                v.jsx)(e9.ZP, {
                    isOpen: !0,
                    onModalClose: to,
                    icon: G.U0j,
                    title: ev.formatMessage(sa.contentPolicyViolation),
                    primaryButton: (0,
                    v.jsx)(e9.mH, {
                        onClick: to,
                        title: ev.formatMessage(sa.acknowledge)
                    }),
                    type: "danger"
                }, "RestrictedTerms"), tg && null != th && (0,
                v.jsx)(oD, {
                    serverThreadId: th,
                    isLoading: tf,
                    currentLeafId: eI,
                    activeRequests: eo,
                    currentThreadModel: $.lastModelUsed
                }), null != eV && (0,
                v.jsx)(rJ, {
                    ratingModalNodeId: e$,
                    ratingModalOpen: eV,
                    onCloseRatingModal: function() {
                        return eW(void 0)
                    },
                    handleSubmitFeedback: nW,
                    onHandleChangeFeedbackComparisonRating: n$,
                    modelBackend: nh,
                    feedbackTextareaRef: eX,
                    clientThreadId: ee,
                    activeRequests: eo,
                    onChangeItemInView: nU,
                    onRequestMoreCompletions: nF,
                    onUpdateNode: nO,
                    onChangeRating: nV,
                    onDeleteNode: nK,
                    onRequestCompletion: nP,
                    onSandboxLinkClick: nq
                }), eZ && (0,
                v.jsx)(rJ, {
                    ratingModalNodeId: eA,
                    ratingModalOpen: "report",
                    onCloseRatingModal: function() {
                        return eR(!1)
                    },
                    handleSubmitFeedback: nG,
                    onHandleChangeFeedbackComparisonRating: function() {},
                    modelBackend: nh,
                    feedbackTextareaRef: eX,
                    clientThreadId: ee,
                    activeRequests: eo,
                    onChangeItemInView: nU,
                    onRequestMoreCompletions: nF,
                    onUpdateNode: nO,
                    onChangeRating: nV,
                    onDeleteNode: nK,
                    onRequestCompletion: nP,
                    onSandboxLinkClick: nq
                }), eE && (0,
                v.jsx)(e9.ZP, {
                    onModalClose: function() {
                        return eF(!1)
                    },
                    isOpen: !0,
                    icon: t_.Z,
                    title: ev.formatMessage(sa.reportModalThankYouTitle),
                    description: ev.formatMessage(sa.reportModalThankYouDescription),
                    primaryButton: (0,
                    v.jsx)(e9.mH, {
                        onClick: function() {
                            return eF(!1)
                        },
                        title: ev.formatMessage(sa.reportModalThankYouDismiss)
                    }),
                    type: "danger"
                }), eU && (0,
                v.jsx)(rJ, {
                    ratingModalNodeId: eI,
                    ratingModalOpen: "moderate",
                    onCloseRatingModal: function() {
                        return ez(!1)
                    },
                    handleSubmitFeedback: W(),
                    onHandleChangeFeedbackComparisonRating: function() {},
                    modelBackend: nh,
                    feedbackTextareaRef: eX,
                    clientThreadId: ee,
                    activeRequests: eo,
                    onChangeItemInView: nU,
                    onRequestMoreCompletions: nF,
                    onUpdateNode: nO,
                    onChangeRating: nV,
                    onDeleteNode: nK,
                    onRequestCompletion: nP,
                    onSandboxLinkClick: nq
                }), (0,
                v.jsxs)("div", {
                    className: "flex h-full max-w-full flex-1 flex-col",
                    children: [!eC && (0,
                    v.jsx)(tk.Z, {
                        children: (0,
                        v.jsx)(tC, {
                            onNewThread: ef,
                            onClickOpenSidebar: n0,
                            title: $.title,
                            newChatName: el
                        })
                    }), (0,
                    v.jsxs)(so, {
                        className: "flex-1",
                        children: [(0,
                        v.jsx)(oG, {
                            isStaticSharedThread: eh,
                            handleResetThread: ef,
                            activeSidebar: er,
                            toggleDebugSidebar: n1
                        }), (0,
                        v.jsx)(ss, {
                            children: !eP && (tn || te) && (A = (0,
                            v.jsx)(ob, {
                                isLoading: tf,
                                onChangeItemInView: nU,
                                onRequestMoreCompletions: nF,
                                onUpdateNode: nO,
                                onChangeRating: nV,
                                onDeleteNode: nK,
                                onRequestCompletion: nP,
                                onChangeCurrentPrompt: ta,
                                onSandboxLinkClick: nq,
                                onHandleChangeVariantFeedbackInlineComparisonRating: nQ,
                                isNewThread: tn,
                                clientThreadId: ee,
                                isStaticSharedThread: eh,
                                activeRequests: eo,
                                onChangeModelSetting: ng,
                                currentThreadModel: $.lastModelUsed,
                                initiallyHighlightedMessageId: eg,
                                inlineEmbeddedDisplay: !1,
                                continueConversationUrl: ep
                            }, ee),
                            eh ? (0,
                            v.jsx)("div", {
                                className: "h-full overflow-auto dark:bg-gray-800",
                                children: A
                            }) : (0,
                            v.jsx)(oJ, {
                                children: A
                            }))
                        }), (0,
                        v.jsxs)(sl, {
                            children: [ex.has("model_preview") && tn && nh.startsWith(rw.f_) && (0,
                            v.jsx)("div", {
                                className: "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:m-auto lg:max-w-3xl",
                                children: td.textareaDisclaimer
                            }), !nE && !eh && (0,
                            v.jsx)(tk.Z, {
                                children: (0,
                                v.jsx)(r6, {
                                    clientThreadId: ee,
                                    currentPrompt: tr,
                                    onChangeCurrentPrompt: ta,
                                    onRequestMoreCompletions: nY,
                                    onCreateNewCompletion: nS,
                                    onAbortCompletion: n8,
                                    onContinueGenerating: nL,
                                    onFileUpload: nA,
                                    modelBackend: nh,
                                    canUpload: nB,
                                    isCompletionInProgress: eo.has(n9),
                                    className: (0,
                                    F.Z)("stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto", e3 ? "max-w-[44rem]" : "lg:max-w-2xl xl:max-w-3xl"),
                                    shouldRetry: nR,
                                    canContinue: tc,
                                    suggestions: void 0 !== nj && (null == nj ? void 0 : nj.messageId) === (null === (H = _.tQ.getTree(ee).getLastValidNode(eI)) || void 0 === H ? void 0 : null === (V = H.message) || void 0 === V ? void 0 : V.id) ? null == nj ? void 0 : nj.suggestions : void 0,
                                    disabled: !nc.length,
                                    canPause: tu,
                                    isInteractableSharedThread: tm
                                }, ee)
                            }), eh && (0,
                            v.jsx)(v.Fragment, {
                                children: (0,
                                v.jsxs)("div", {
                                    className: "relative flex h-full w-full flex-1 justify-center gap-2",
                                    children: [(0,
                                    v.jsx)(ei.z, {
                                        as: "link",
                                        to: ep,
                                        children: ev.formatMessage(sa.sharedConversationContinueConversation)
                                    }), !eT && (0,
                                    v.jsx)(ei.z, {
                                        onClick: function() {
                                            eB(eI),
                                            eR(!0)
                                        },
                                        children: ev.formatMessage(sa.sharedConversationReportConversation)
                                    }), eT && (0,
                                    v.jsx)(ei.z, {
                                        onClick: function() {
                                            ez(!0)
                                        },
                                        children: ev.formatMessage(sa.sharedConversationModerateConversation)
                                    })]
                                })
                            }), (0,
                            v.jsx)("div", {
                                className: "px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3",
                                children: e1 ? (0,
                                v.jsx)("span", {
                                    children: (0,
                                    v.jsx)(J.Z, (0,
                                    S._)((0,
                                    h._)({}, sa.mayProduceInaccurateInformation), {
                                        values: {
                                            link: function(e) {
                                                return (0,
                                                v.jsx)("a", {
                                                    href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "underline",
                                                    children: e
                                                })
                                            }
                                        }
                                    }))
                                }) : (0,
                                v.jsx)("span", {
                                    children: (0,
                                    v.jsx)(J.Z, (0,
                                    S._)((0,
                                    h._)({}, sa.freeResearchPreview), {
                                        values: {
                                            link: function(e) {
                                                return (0,
                                                v.jsx)("a", {
                                                    href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "underline",
                                                    children: e
                                                })
                                            }
                                        }
                                    }))
                                })
                            })]
                        })]
                    })]
                }), ex.has("debug") && "debug" === er && (0,
                v.jsx)(n_, {
                    clientThreadId: ee,
                    currentLeafId: eI,
                    isOpen: "debug" === er,
                    slideOver: !eC,
                    onClose: n1
                }), ex.has("tools3_dev") && (0,
                v.jsx)(nX, {
                    slideOver: !eC
                }), e2 && (0,
                v.jsx)(o5.Z, {
                    isOpen: n5,
                    onClose: n7
                }), void 0 !== e1 && e1 && (0,
                v.jsx)(o3, {
                    isOpen: en,
                    onClose: n2
                }), ni && (0,
                v.jsx)(e9.ZP, {
                    onModalClose: W(),
                    isOpen: !0,
                    icon: t_.Z,
                    title: ev.formatMessage(sa.somethingWentWrong),
                    description: ev.formatMessage(sa.tryAgainLater),
                    primaryButton: (0,
                    v.jsx)(e9.mH, {
                        onClick: function() {
                            ef(),
                            no(!1)
                        },
                        title: ev.formatMessage(sa.resetThread)
                    }),
                    type: "danger"
                }, "UnrecoverableErrorModal")]
            })
        }
          , so = j.Z.main(sn())
          , ss = j.Z.div(st())
          , sl = j.Z.div(sr());
        function su() {
            var e = (0,
            p._)(["overflow-hidden w-full h-full relative flex z-0"]);
            return su = function() {
                return e
            }
            ,
            e
        }
        var sc = j.Z.div(su())
          , sd = (s = function(e) {
            var n = e.clientThreadId
              , t = e.setClientThreadId
              , r = e.isStaticSharedThread
              , a = (0,
            g._)(e, ["clientThreadId", "setClientThreadId", "isStaticSharedThread"])
              , i = (0,
            _.UL)(n)
              , o = a.setShowAccountPortalModal
              , s = a.activeSidebar
              , l = a.setActiveSidebar
              , u = a.setActiveRequests
              , c = a.newChatName
              , d = a.setNewChatName
              , f = a.userModifiedTitle
              , m = a.setUserModifiedTitle
              , p = (0,
            _.XK)(n)
              , j = (0,
            b.useRouter)()
              , M = (0,
            C.WS)()
              , T = (0,
            k.nR)()
              , N = (0,
            oh.Z)().availableModels
              , P = (0,
            y.useContext)(E.QL).historyDisabled
              , S = (0,
            rw.ZP)(N, i.lastModelUsed, n).modelBackend
              , Z = (0,
            x.NL)();
            (0,
            y.useEffect)(function() {
                return _.tQ.retainThread(n),
                function() {
                    setTimeout(function() {
                        Z.invalidateQueries(["conversation", n])
                    }, 0),
                    _.tQ.releaseThread(n)
                }
            }, [n, Z]),
            (0,
            y.useEffect)(function() {
                D.closeSharingModal()
            }, [n, p]);
            var R = (0,
            y.useCallback)(function() {
                l(function(e) {
                    return "navigation" !== e && "navigation"
                })
            }, [l])
              , F = (0,
            y.useCallback)(function() {
                M(w.s6.clickSidebarAccountPortalMenuItem),
                o(!0)
            }, [M, o])
              , L = o7(function(e) {
                return {
                    setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                    showAccountPaymentModal: e.showAccountPaymentModal
                }
            }).setShowAccountPaymentModal
              , A = (0,
            y.useCallback)(function() {
                L(!0, function() {
                    M(w.s6.clickSidebarAccountPaymentMenuItem)
                })
            }, [M, L])
              , B = (0,
            y.useCallback)(function() {
                d(""),
                m(""),
                t((0,
                _.OX)()),
                S === rw.f_ ? j.replace("/", void 0, {
                    shallow: !0
                }) : j.replace("/?model=".concat(S))
            }, [S, j, d, m, t]);
            return (0,
            y.useEffect)(function() {
                return function() {
                    I.abortAllAndReset(),
                    u(new Set)
                }
            }, [u, n]),
            (0,
            v.jsxs)(sc, {
                children: [!r && (0,
                v.jsx)(tk.Z, {
                    children: (0,
                    v.jsx)(tw, {
                        toggleNavigationSidebar: R,
                        handleAccountPayment: A,
                        handleClickCustomerPortal: F,
                        handleResetThread: B,
                        activeSidebar: s,
                        isAccountPaid: T,
                        children: (0,
                        v.jsx)(eT, {
                            activeId: P ? void 0 : p,
                            onNewThread: B,
                            onUpdateUserModifiedTitle: m,
                            userModifiedTitle: f,
                            newChatName: c,
                            setNewChatName: d,
                            setActiveRequests: u
                        })
                    })
                }), (0,
                v.jsx)("div", {
                    className: "relative flex h-full max-w-full flex-1 overflow-hidden",
                    children: (0,
                    v.jsx)(si, (0,
                    h._)({
                        initialThreadData: i,
                        clientThreadId: n,
                        handleResetThread: B,
                        isStaticSharedThread: r
                    }, a), n)
                })]
            })
        }
        ,
        function(e) {
            var n = e.clientThreadId
              , t = e.isStaticSharedThread;
            (0,
            _.ax)(n, t);
            var r = (0,
            _.UL)(n)
              , a = (0,
            m._)((0,
            y.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , l = (0,
            m._)((0,
            y.useState)(!1), 2)
              , u = l[0]
              , c = l[1]
              , d = (0,
            m._)((0,
            y.useState)(new Set), 2)
              , f = d[0]
              , g = d[1]
              , p = (0,
            m._)((0,
            y.useState)(""), 2)
              , x = p[0]
              , b = p[1]
              , j = (0,
            m._)((0,
            y.useState)(""), 2)
              , C = j[0]
              , w = j[1];
            return (0,
            y.useEffect)(function() {
                c(!1),
                I.reset(),
                g(new Set),
                w("")
            }, [r.threadId]),
            (0,
            v.jsx)(s, (0,
            h._)({}, e, {
                showAccountPortalModal: i,
                setShowAccountPortalModal: o,
                activeSidebar: u,
                setActiveSidebar: c,
                activeRequests: f,
                setActiveRequests: g,
                newChatName: x,
                setNewChatName: b,
                userModifiedTitle: C,
                setUserModifiedTitle: w
            }))
        }
        )
    },
    28869: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return O
            }
        });
        var r = t(39324)
          , a = t(71209)
          , i = t(70216)
          , o = t(35250)
          , s = t(19841)
          , l = t(86546)
          , u = t(70079)
          , c = t(45306)
          , d = t(64135)
          , f = t(22208)
          , h = t(61110)
          , g = t(55975)
          , m = t(46050)
          , p = t(29874)
          , v = t(8449)
          , x = t(15472);
        let b = {
            tokenize: function(e, n, t) {
                let r = this
                  , a = this.events[this.events.length - 1]
                  , i = a && a[1].type === x.V.linePrefix ? a[2].sliceSerialize(a[1], !0).length : 0
                  , o = [];
                return function(n) {
                    return g.q.backslash,
                    e.enter("mathFlow"),
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    function n(r) {
                        return r === g.q.backslash || r === g.q.leftSquareBracket && o[0] === g.q.backslash ? (e.consume(r),
                        o.push(r),
                        n) : (e.exit("mathFlowFenceSequence"),
                        o.length < 2 ? t(r) : (0,
                        m.f)(e, s, x.V.whitespace)(r))
                    }(n)
                }
                ;
                function s(n) {
                    return n === g.q.eof || (0,
                    p.Ch)(n) ? l(n) : (e.enter("mathFlowFenceMeta"),
                    e.enter(x.V.chunkString, {
                        contentType: v._.contentTypeString
                    }),
                    function n(r) {
                        return r === g.q.eof || (0,
                        p.Ch)(r) ? (e.exit(x.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r)) : r === g.q.rightSquareBracket ? t(r) : (e.consume(r),
                        n)
                    }(n))
                }
                function l(t) {
                    return e.exit("mathFlowFence"),
                    r.interrupt ? n(t) : function n(t) {
                        return t === g.q.eof ? u(t) : (0,
                        p.Ch)(t) ? e.attempt(y, e.attempt({
                            tokenize: c,
                            partial: !0
                        }, u, i ? (0,
                        m.f)(e, n, x.V.linePrefix, i + 1) : n), u)(t) : (e.enter("mathFlowValue"),
                        function t(r) {
                            return r === g.q.eof || (0,
                            p.Ch)(r) ? (e.exit("mathFlowValue"),
                            n(r)) : (e.consume(r),
                            t)
                        }(t))
                    }(t)
                }
                function u(t) {
                    return e.exit("mathFlow"),
                    n(t)
                }
                function c(e, n, t) {
                    let r = [];
                    return (0,
                    m.f)(e, function(n) {
                        return e.enter("mathFlowFence"),
                        e.enter("mathFlowFenceSequence"),
                        function n(i) {
                            return i === g.q.backslash && 0 === r.length || i === g.q.rightSquareBracket && r[0] === g.q.backslash ? (e.consume(i),
                            r.push(i),
                            n) : r < o ? t(i) : (e.exit("mathFlowFenceSequence"),
                            (0,
                            m.f)(e, a, x.V.whitespace)(i))
                        }(n)
                    }, x.V.linePrefix, v._.tabSize);
                    function a(r) {
                        return r === g.q.eof || (0,
                        p.Ch)(r) ? (e.exit("mathFlowFence"),
                        n(r)) : t(r)
                    }
                }
            },
            concrete: !0
        }
          , y = {
            tokenize: function(e, n, t) {
                let r = this;
                return function(n) {
                    return e.enter(x.V.lineEnding),
                    e.consume(n),
                    e.exit(x.V.lineEnding),
                    a
                }
                ;
                function a(e) {
                    return r.parser.lazy[r.now().line] ? t(e) : n(e)
                }
            },
            partial: !0
        }
          , j = {
            tokenize: function(e, n, t) {
                let r = this
                  , a = r.events[r.events.length - 1]
                  , i = a && a[1].type === x.V.linePrefix ? a[2].sliceSerialize(a[1], !0).length : 0
                  , o = 0;
                return function(n) {
                    return g.q.dollarSign,
                    e.enter("mathFlow"),
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    function n(r) {
                        return r === g.q.dollarSign ? (e.consume(r),
                        o++,
                        n) : (e.exit("mathFlowFenceSequence"),
                        o < 2 ? t(r) : (0,
                        m.f)(e, s, x.V.whitespace)(r))
                    }(n)
                }
                ;
                function s(n) {
                    return n === g.q.eof || (0,
                    p.Ch)(n) ? l(n) : (e.enter("mathFlowFenceMeta"),
                    e.enter(x.V.chunkString, {
                        contentType: v._.contentTypeString
                    }),
                    function n(r) {
                        return r === g.q.eof || (0,
                        p.Ch)(r) ? (e.exit(x.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r)) : r === g.q.dollarSign ? t(r) : (e.consume(r),
                        n)
                    }(n))
                }
                function l(t) {
                    return e.exit("mathFlowFence"),
                    r.interrupt ? n(t) : function n(t) {
                        return t === g.q.eof ? u(t) : (0,
                        p.Ch)(t) ? e.attempt(C, e.attempt({
                            tokenize: c,
                            partial: !0
                        }, u, i ? (0,
                        m.f)(e, n, x.V.linePrefix, i + 1) : n), u)(t) : (e.enter("mathFlowValue"),
                        function t(r) {
                            return r === g.q.eof || (0,
                            p.Ch)(r) ? (e.exit("mathFlowValue"),
                            n(r)) : (e.consume(r),
                            t)
                        }(t))
                    }(t)
                }
                function u(t) {
                    return e.exit("mathFlow"),
                    n(t)
                }
                function c(e, n, t) {
                    let r = 0;
                    return (0,
                    m.f)(e, function(n) {
                        return e.enter("mathFlowFence"),
                        e.enter("mathFlowFenceSequence"),
                        function n(i) {
                            return i === g.q.dollarSign ? (e.consume(i),
                            r++,
                            n) : r < o ? t(i) : (e.exit("mathFlowFenceSequence"),
                            (0,
                            m.f)(e, a, x.V.whitespace)(i))
                        }(n)
                    }, x.V.linePrefix, v._.tabSize);
                    function a(r) {
                        return r === g.q.eof || (0,
                        p.Ch)(r) ? (e.exit("mathFlowFence"),
                        n(r)) : t(r)
                    }
                }
            },
            concrete: !0
        }
          , C = {
            tokenize: function(e, n, t) {
                let r = this;
                return function(n) {
                    return (0,
                    p.Ch)(n),
                    e.enter(x.V.lineEnding),
                    e.consume(n),
                    e.exit(x.V.lineEnding),
                    a
                }
                ;
                function a(e) {
                    return r.parser.lazy[r.now().line] ? t(e) : n(e)
                }
            },
            partial: !0
        };
        function w(e) {
            let n, t, r = e.length - 4, a = 3;
            if ((e[3][1].type === x.V.lineEnding || "space" === e[a][1].type) && (e[r][1].type === x.V.lineEnding || "space" === e[r][1].type)) {
                for (n = a; ++n < r; )
                    if ("mathTextData" === e[n][1].type) {
                        e[r][1].type = "mathTextPadding",
                        e[a][1].type = "mathTextPadding",
                        a += 2,
                        r -= 2;
                        break
                    }
            }
            for (n = a - 1,
            r++; ++n <= r; )
                void 0 === t ? n !== r && e[n][1].type !== x.V.lineEnding && (t = n) : (n === r || e[n][1].type === x.V.lineEnding) && (e[t][1].type = "mathTextData",
                n !== t + 2 && (e[t][1].end = e[n - 1][1].end,
                e.splice(t + 2, n - t - 2),
                r -= n - t - 2,
                n = t + 2),
                t = void 0);
            return e
        }
        function k(e) {
            return e !== g.q.backslash || this.events[this.events.length - 1][1].type === x.V.characterEscape
        }
        function _(e) {
            let n, t, r = e.length - 4, a = 3;
            if ((e[3][1].type === x.V.lineEnding || "space" === e[a][1].type) && (e[r][1].type === x.V.lineEnding || "space" === e[r][1].type)) {
                for (n = a; ++n < r; )
                    if ("mathTextData" === e[n][1].type) {
                        e[r][1].type = "mathTextPadding",
                        e[a][1].type = "mathTextPadding",
                        a += 2,
                        r -= 2;
                        break
                    }
            }
            for (n = a - 1,
            r++; ++n <= r; )
                void 0 === t ? n !== r && e[n][1].type !== x.V.lineEnding && (t = n) : (n === r || e[n][1].type === x.V.lineEnding) && (e[t][1].type = "mathTextData",
                n !== t + 2 && (e[t][1].end = e[n - 1][1].end,
                e.splice(t + 2, n - t - 2),
                r -= n - t - 2,
                n = t + 2),
                t = void 0);
            return e
        }
        function M(e) {
            return e !== g.q.dollarSign || this.events[this.events.length - 1][1].type === x.V.characterEscape
        }
        function T(e) {
            let n, t, r = e.length - 4, a = 3;
            if ((e[3][1].type === x.V.lineEnding || "space" === e[a][1].type) && (e[r][1].type === x.V.lineEnding || "space" === e[r][1].type)) {
                for (n = a; ++n < r; )
                    if ("mathTextData" === e[n][1].type) {
                        e[r][1].type = "mathTextPadding",
                        e[a][1].type = "mathTextPadding",
                        a += 2,
                        r -= 2;
                        break
                    }
            }
            for (n = a - 1,
            r++; ++n <= r; )
                void 0 === t ? n !== r && e[n][1].type !== x.V.lineEnding && (t = n) : (n === r || e[n][1].type === x.V.lineEnding) && (e[t][1].type = "mathTextData",
                n !== t + 2 && (e[t][1].end = e[n - 1][1].end,
                e.splice(t + 2, n - t - 2),
                r -= n - t - 2,
                n = t + 2),
                t = void 0);
            return e
        }
        function N(e) {
            return e !== g.q.backslash || this.events[this.events.length - 1][1].type === x.V.characterEscape
        }
        var P = t(67726)
          , I = t(9871)
          , S = t(93362)
          , Z = t(45369)
          , R = t(42426)
          , D = t(65028)
          , E = t(88366)
          , F = t(36716)
          , L = t(2368)
          , A = function(e) {
            return e.startsWith(f.SANDBOX_LINK_PREFIX) ? e : (0,
            I.A)(e)
        }
          , B = [D.Z, [function() {
            let e = this.data();
            function n(n, t) {
                let r = e[n] ? e[n] : e[n] = [];
                r.push(t)
            }
            n("micromarkExtensions", {
                flow: {
                    [g.q.dollarSign]: j,
                    [g.q.backslash]: b
                },
                text: {
                    [g.q.dollarSign]: {
                        tokenize: function(e, n, t) {
                            let r, a, i = 0;
                            return function(n) {
                                return e.enter("mathText"),
                                e.enter("mathTextSequence"),
                                function n(r) {
                                    return r === g.q.dollarSign ? (e.consume(r),
                                    i++,
                                    n) : i < 2 ? t(r) : (e.exit("mathTextSequence"),
                                    o(r))
                                }(n)
                            }
                            ;
                            function o(l) {
                                return l === g.q.eof ? t(l) : l === g.q.dollarSign ? (a = e.enter("mathTextSequence"),
                                r = 0,
                                function t(o) {
                                    return o === g.q.dollarSign ? (e.consume(o),
                                    r++,
                                    t) : r === i ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    n(o)) : (a.type = "mathTextData",
                                    s(o))
                                }(l)) : l === g.q.space ? (e.enter("space"),
                                e.consume(l),
                                e.exit("space"),
                                o) : (0,
                                p.Ch)(l) ? (e.enter(x.V.lineEnding),
                                e.consume(l),
                                e.exit(x.V.lineEnding),
                                o) : (e.enter("mathTextData"),
                                s(l))
                            }
                            function s(n) {
                                return n === g.q.eof || n === g.q.space || n === g.q.dollarSign || (0,
                                p.Ch)(n) ? (e.exit("mathTextData"),
                                o(n)) : (e.consume(n),
                                s)
                            }
                        },
                        resolve: _,
                        previous: M
                    },
                    [g.q.backslash]: [{
                        tokenize: function(e, n, t) {
                            let r;
                            let a = []
                              , i = []
                              , o = this;
                            return function(n) {
                                return g.q.backslash,
                                k.call(o, o.previous) && o.previous,
                                e.enter("mathText"),
                                e.enter("mathTextSequence"),
                                function n(r) {
                                    return (a.join(","),
                                    r === g.q.backslash && 0 === a.length || r === g.q.leftParenthesis && 1 === a.length) ? (e.consume(r),
                                    a.push(r),
                                    n) : a.length < 2 ? t(r) : (e.exit("mathTextSequence"),
                                    s(r))
                                }(n)
                            }
                            ;
                            function s(o) {
                                return o === g.q.eof ? t(o) : o === g.q.backslash ? (r = e.enter("mathTextSequence"),
                                i = [],
                                function t(o) {
                                    return (a.join(","),
                                    o === g.q.backslash && 0 === i.length || o === g.q.rightParenthesis && 1 === i.length) ? (e.consume(o),
                                    i.push(o),
                                    t) : i.length === a.length ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    n(o)) : (r.type = "mathTextData",
                                    l(o))
                                }(o)) : o === g.q.space ? (e.enter("space"),
                                e.consume(o),
                                e.exit("space"),
                                s) : (0,
                                p.Ch)(o) ? (e.enter(x.V.lineEnding),
                                e.consume(o),
                                e.exit(x.V.lineEnding),
                                s) : (e.enter("mathTextData"),
                                l(o))
                            }
                            function l(n) {
                                return n === g.q.eof || n === g.q.space || n === g.q.backslash || (0,
                                p.Ch)(n) ? (e.exit("mathTextData"),
                                s(n)) : (e.consume(n),
                                l)
                            }
                        },
                        resolve: w,
                        previous: k
                    }, {
                        tokenize: function(e, n, t) {
                            let r;
                            let a = []
                              , i = []
                              , o = this;
                            return function(n) {
                                return g.q.backslash,
                                N.call(o, o.previous) && o.previous,
                                e.enter("mathText"),
                                e.enter("mathTextSequence"),
                                function n(r) {
                                    return (a.join(","),
                                    r === g.q.backslash && 0 === a.length || r === g.q.leftSquareBracket && 1 === a.length) ? (e.consume(r),
                                    a.push(r),
                                    n) : a.length < 2 ? t(r) : (e.exit("mathTextSequence"),
                                    s(r))
                                }(n)
                            }
                            ;
                            function s(o) {
                                return o === g.q.eof ? t(o) : o === g.q.backslash ? (r = e.enter("mathTextSequence"),
                                i = [],
                                function t(o) {
                                    return (a.join(","),
                                    o === g.q.backslash && 0 === i.length || o === g.q.rightSquareBracket && 1 === i.length) ? (e.consume(o),
                                    i.push(o),
                                    t) : i.length === a.length ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    n(o)) : (r.type = "mathTextData",
                                    l(o))
                                }(o)) : o === g.q.space ? (e.enter("space"),
                                e.consume(o),
                                e.exit("space"),
                                s) : (0,
                                p.Ch)(o) ? (e.enter(x.V.lineEnding),
                                e.consume(o),
                                e.exit(x.V.lineEnding),
                                s) : (e.enter("mathTextData"),
                                l(o))
                            }
                            function l(n) {
                                return n === g.q.eof || n === g.q.space || n === g.q.backslash || (0,
                                p.Ch)(n) ? (e.exit("mathTextData"),
                                s(n)) : (e.consume(n),
                                l)
                            }
                        },
                        resolve: T,
                        previous: N
                    }]
                }
            }),
            n("fromMarkdownExtensions", (0,
            h.N)()),
            n("toMarkdownExtensions", (0,
            h.O)())
        }
        , {
            singleDollarTextMath: !1
        }]]
          , q = [[S.Z, {
            languages: {
                mathematica: P.Z
            },
            detect: !0,
            subset: ["arduino", "bash", "c", "cpp", "csharp", "css", "diff", "go", "graphql", "java", "javascript", "json", "kotlin", "latex", "less", "lua", "makefile", "makefile", "markdown", "matlab", "mathematica", "nginx", "objectivec", "perl", "pgsql", "php-template", "php", "plaintext", "python-repl", "python", "r", "ruby", "rust", "scss", "shell", "sql", "swift", "typescript", "vbnet", "wasm", "xml", "yaml"],
            ignoreMissing: !0,
            aliases: {
                mathematica: "wolfram"
            }
        }], Z.Z, [R.Z, {
            newlines: !0
        }]]
          , U = {
            code: function(e) {
                var n = e.inline
                  , t = e.node
                  , s = e.className
                  , l = e.children
                  , u = (0,
                i._)(e, ["inline", "node", "className", "children"]);
                if (n) {
                    var c = (0,
                    E.B)(t)
                      , d = (0,
                    F.T$)(c);
                    return d ? (0,
                    o.jsx)(F.s8, {
                        displayInfo: d
                    }) : (0,
                    o.jsx)("code", (0,
                    a._)((0,
                    r._)({
                        className: s
                    }, u), {
                        children: l
                    }))
                }
                var f, h = null === (f = null == s ? void 0 : s.split(" ").filter(function(e) {
                    return e.startsWith("language-")
                })) || void 0 === f ? void 0 : f[0], g = h ? h.split("-")[1] : "";
                return (0,
                o.jsx)(L.Z, {
                    language: g,
                    className: s,
                    content: (0,
                    E.B)(t),
                    children: l
                })
            }
        };
        function O(e) {
            var n = e.size
              , t = e.children
              , h = e.className
              , g = e.onSandboxLinkClick
              , m = (0,
            l.F)().theme
              , p = (0,
            d.hz)().has("tools2")
              , v = (0,
            u.useMemo)(function() {
                return (0,
                a._)((0,
                r._)({}, U), {
                    a: function(e) {
                        var n = e.node
                          , t = (0,
                        i._)(e, ["node"])
                          , s = n.properties.href;
                        return g && p && s.startsWith(f.SANDBOX_LINK_PREFIX) ? (0,
                        o.jsx)("a", (0,
                        a._)((0,
                        r._)({}, t), {
                            onClick: g
                        })) : (0,
                        o.jsx)("a", (0,
                        r._)({}, t))
                    },
                    img: function(e) {
                        var n = e.node
                          , t = (0,
                        i._)(e, ["node"])
                          , a = n.properties.src;
                        return a.startsWith("sandbox:") || a.startsWith("attachment:") ? null : (0,
                        o.jsx)("img", (0,
                        r._)({}, t))
                    }
                })
            }, [g, p]);
            return (0,
            o.jsx)(c.D, {
                rehypePlugins: q,
                remarkPlugins: B,
                linkTarget: "_new",
                className: (0,
                s.Z)(h, "markdown prose w-full break-words dark:prose-invert", "dark" === m ? "dark" : "light", "small" === (void 0 === n ? "medium" : n) && "prose-xs"),
                transformLinkUri: A,
                components: v,
                children: t
            })
        }
    },
    99585: function(e, n, t) {
        "use strict";
        t.d(n, {
            Cf: function() {
                return ed
            },
            ZP: function() {
                return ec
            },
            xz: function() {
                return ef
            }
        });
        var r, a = t(39324), i = t(70216), o = t(4337), s = t(35250), l = t(19841), u = t(68555), c = t(70079), d = t(34303), f = t(75179), h = t(64135), g = t(88038), m = t(75527), p = t(36716), v = t(59710), x = t(57311), b = t(66958), y = t(22830), j = t(2827), C = t(82841), w = t(36218), k = t(69403);
        function _() {
            var e = (0,
            o._)(["text-center mt-2 flex justify-center"]);
            return _ = function() {
                return e
            }
            ,
            e
        }
        var M = d.Z.div(_());
        function T(e) {
            var n = e.initialText
              , t = e.role
              , r = e.clientThreadId
              , a = e.currentLeaf
              , i = e.onUpdateNode
              , o = e.onChangeItemInView
              , l = e.onExitEdit
              , u = e.onDeleteNode
              , d = e.onRequestCompletion
              , f = e.onCreateEditNode
              , h = e.disabled
              , g = (0,
            C.WS)()
              , p = (0,
            c.useId)()
              , v = "".concat(a, "-").concat(p)
              , x = (0,
            y._)((0,
            c.useState)(n || ""), 2)
              , _ = x[0]
              , T = x[1]
              , N = (0,
            c.useRef)(null);
            (0,
            c.useEffect)(function() {
                f(a, v)
            }, []);
            var P = (0,
            c.useCallback)(function(e) {
                T(e.currentTarget.value)
            }, [])
              , I = (0,
            c.useCallback)(function() {
                i(v, _),
                o(v),
                d(k.Os.Next, v, {
                    eventSource: "mouse"
                }, !0),
                l()
            }, [i, v, _, o, d, l])
              , S = (0,
            c.useCallback)(function() {
                u(v),
                o(a),
                l(),
                g(t === k.uU.User ? w.s6.cancelEditPrompt : w.s6.cancelEditCompletion, {
                    threadId: m.tQ.getServerThreadId(r)
                })
            }, [v, a, g, o, u, l, t, r]);
            return (0,
            c.useEffect)(function() {
                var e = N.current
                  , n = function(e) {
                    "Enter" === e.key && e.metaKey ? I() : "Escape" === e.key && S()
                };
                return e && e.addEventListener("keydown", n),
                function() {
                    e && e.removeEventListener("keydown", n)
                }
            }, [S, I]),
            (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(j.ZP, {
                    ref: N,
                    value: _,
                    onChange: P,
                    className: "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0"
                }), (0,
                s.jsxs)(M, {
                    children: [(0,
                    s.jsx)(b.z, {
                        as: "button",
                        onClick: I,
                        className: "mr-2",
                        disabled: h,
                        children: "Save & Submit"
                    }), (0,
                    s.jsx)(b.z, {
                        as: "button",
                        color: "neutral",
                        onClick: S,
                        children: "Cancel"
                    })]
                })]
            })
        }
        var N = t(21722)
          , P = t(39889)
          , I = t(10642)
          , S = t(47635)
          , Z = t(32787)
          , R = t(24274)
          , D = t(75515)
          , E = t(180);
        function F() {
            var e = (0,
            o._)(["text-xs text-black\n", ""]);
            return F = function() {
                return e
            }
            ,
            e
        }
        function L() {
            var e = (0,
            o._)(["relative w-full overflow-hidden pt-[67%]"]);
            return L = function() {
                return e
            }
            ,
            e
        }
        function A(e) {
            var n, t = e.title, r = e.url, a = e.imageUrl, i = e.logoUrl, o = e.className, u = e.mini, d = !!a, f = (0,
            C.WS)(), h = (0,
            c.useCallback)(function() {
                f(w.s6.carouselCardClick, {
                    content: r
                })
            }, [f, r]);
            try {
                n = S.get(new URL(r).hostname)
            } catch (e) {
                return console.error("Invalid card url: ", e),
                null
            }
            return (0,
            s.jsxs)(r ? "a" : "div", {
                className: (0,
                l.Z)("flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]", o),
                href: r,
                target: r ? "_blank" : "",
                onClick: h,
                children: [d && (0,
                s.jsx)(q, {
                    children: (0,
                    s.jsx)("div", {
                        className: "absolute inset-0",
                        children: (0,
                        s.jsx)("img", {
                            src: a,
                            alt: "image of ".concat(t),
                            className: "h-full w-full border-b border-black/10 object-cover"
                        })
                    })
                }), (0,
                s.jsxs)("div", {
                    className: "flex flex-1 flex-col justify-between gap-1.5 p-3",
                    children: [(0,
                    s.jsx)(B, {
                        $clamp: void 0 !== u && u || d,
                        children: t
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [i ? (0,
                        s.jsx)(D.Z, {
                            url: i,
                            name: n,
                            size: 13
                        }) : (0,
                        s.jsx)(E.Z, {
                            url: r,
                            size: 13
                        }), (0,
                        s.jsx)("div", {
                            className: "text-[10px] leading-3 text-gray-500 line-clamp-1",
                            children: n
                        })]
                    })]
                })]
            })
        }
        var B = d.Z.div(F(), function(e) {
            return e.$clamp && "line-clamp-2"
        })
          , q = d.Z.div(L())
          , U = t(96237)
          , O = t(21260)
          , z = t(52422)
          , H = t(95182)
          , V = t.n(H)
          , W = t(1454)
          , G = t(77442)
          , $ = t(38317);
        function Q(e) {
            var n = e.disabled
              , t = e.onClick
              , r = e.left
              , a = e.children;
            return (0,
            s.jsx)("button", {
                disabled: n,
                onClick: t,
                "aria-disabled": n,
                className: (0,
                l.Z)("flex h-6 w-[30px] items-center justify-center rounded-full", "bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white", "transition-opacity disabled:opacity-20", "cursor-pointer disabled:cursor-auto", "absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2", void 0 !== r && r ? "left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full" : "left-1/2 translate-x-1 lg:-right-3 lg:left-auto lg:translate-x-full", n && "lg:hidden"),
                children: a
            })
        }
        var J = t(70575)
          , Y = function(e) {
            var n = e.x
              , t = e.children
              , r = e.className;
            return (0,
            s.jsx)(J.E.div, {
                className: (0,
                l.Z)("mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]", r),
                style: {
                    x: n
                },
                children: t
            })
        }
          , K = {
            type: "spring",
            bounce: 0
        }
          , X = (0,
        c.forwardRef)(function(e, n) {
            return (0,
            s.jsx)("div", {
                ref: n,
                className: (0,
                l.Z)("relative flex h-full w-full overflow-hidden", e.className),
                children: e.children
            })
        });
        X.displayName = "CarouselContainer";
        var ee = (r = {},
        (0,
        U._)(r, G._G.Mobile, 1),
        (0,
        U._)(r, G._G.Small, 2),
        (0,
        U._)(r, G._G.Medium, 2),
        (0,
        U._)(r, G._G.Large, 3),
        (0,
        U._)(r, G._G.XLarge, 3),
        r);
        function en(e) {
            var n = e.children
              , t = e.loop
              , r = void 0 === t || t
              , a = e.className
              , i = (0,
            O.c)(0)
              , o = (0,
            c.useRef)(null)
              , u = (0,
            y._)((0,
            c.useState)(0), 2)
              , d = u[0]
              , f = u[1]
              , h = ee[(0,
            G.dQ)()] || 1
              , g = c.Children.count(n) > h
              , m = c.Children.toArray(n)
              , p = (0,
            c.useCallback)(function() {
                var e, n = null === (e = o.current) || void 0 === e ? void 0 : e.clientWidth;
                return n ? -Math.floor(d / h) * (n + 12) : 0
            }, [h, d])
              , v = (0,
            c.useCallback)(function(e) {
                var n = h * e;
                r ? f(function(e) {
                    return (e + n) % m.length - 1
                }) : f(function(e) {
                    return V()(e + n, 0, m.length - 1)
                })
            }, [m.length, r, h])
              , x = (0,
            c.useCallback)(function() {
                v(1)
            }, [v])
              , b = (0,
            c.useCallback)(function() {
                v(-1)
            }, [v])
              , j = (0,
            y._)((0,
            c.useMemo)(function() {
                if (r)
                    return [!0, !0];
                var e = d < m.length - h;
                return [d > 0, e]
            }, [m.length, d, r, h]), 2)
              , C = j[0]
              , w = j[1];
            return (0,
            c.useEffect)(function() {
                return (0,
                z.j)(i, p(), K).stop
            }, [p, d, i]),
            (0,
            s.jsxs)("div", {
                className: (0,
                l.Z)("relative h-full w-full", a, g && "mb-12 lg:mb-0"),
                children: [(0,
                s.jsx)(X, {
                    ref: o,
                    children: m.map(function(e, n) {
                        return (0,
                        s.jsx)(Y, {
                            x: i,
                            children: e
                        }, n)
                    })
                }), g && (0,
                s.jsxs)(s.Fragment, {
                    children: [(0,
                    s.jsx)(Q, {
                        onClick: b,
                        left: !0,
                        disabled: !C,
                        children: (0,
                        s.jsx)($.ZP, {
                            icon: W.YFh
                        })
                    }), (0,
                    s.jsx)(Q, {
                        onClick: x,
                        disabled: !w,
                        children: (0,
                        s.jsx)($.ZP, {
                            icon: W.Tfp
                        })
                    })]
                })]
            })
        }
        var et = t(44878)
          , er = new Set(["og:site_name", "og:title", "og:description", "og:image", "og:url"])
          , ea = {
            "og:site_name": "metadataTitle",
            "og:title": "title",
            "og:description": "description",
            "og:image": "imageUrl",
            "og:url": "url"
        }
          , ei = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
          , eo = c.memo(function(e) {
            var n, t, r = e.urls, a = (0,
            et.Z)(), i = (n = (0,
            Z.kP)().session,
            t = (0,
            I.h)({
                queries: r.map(function(e) {
                    return {
                        queryKey: ["opengraph", e],
                        queryFn: (0,
                        N._)(function() {
                            return (0,
                            P.Jh)(this, function(n) {
                                switch (n.label) {
                                case 0:
                                    return [4, R.ZP.getPageMetadata({
                                        url: e
                                    })];
                                case 1:
                                    return [2, n.sent()]
                                }
                            })
                        }),
                        enabled: !!(e && (null == n ? void 0 : n.accessToken)),
                        retry: !1
                    }
                })
            }),
            (0,
            c.useMemo)(function() {
                return t.map(function(e, n) {
                    var t = e.data
                      , a = e.isError
                      , i = e.isLoading
                      , o = r[n];
                    if (a || i)
                        return null;
                    var s = t.tags.reduce(function(e, n) {
                        return er.has(n.type) && (e[ea[n.type]] = n.value),
                        e
                    }, {});
                    try {
                        var l, u = o.split(/[#?]/)[0], c = null === (l = s.url) || void 0 === l ? void 0 : l.endsWith("/login"), d = s.url && "/" === new URL(s.url || "").pathname;
                        if (u !== s.url && (c || d))
                            return null
                    } catch (e) {
                        return null
                    }
                    return s.url = o,
                    s
                }).filter(Boolean)
            }, [t, r])), o = (0,
            c.useMemo)(function() {
                return !i.some(function(e) {
                    return !!(null == e ? void 0 : e.imageUrl)
                })
            }, [i]), l = (0,
            c.useMemo)(function() {
                return a.reduce(function(e, n) {
                    return e[S.get(n.domain)] = n.manifest.logo_url,
                    e
                }, {})
            }, [a]), u = (0,
            c.useMemo)(function() {
                return i.map(function(e) {
                    var n, t;
                    if (!e)
                        return null;
                    try {
                        n = S.get(new URL(e.url).hostname)
                    } catch (e) {
                        return console.error("Invalid card url: ", e),
                        null
                    }
                    return n in l && (t = l[n]),
                    (0,
                    s.jsx)(A, {
                        title: e.title || "",
                        url: e.url,
                        imageUrl: e.imageUrl,
                        logoUrl: t,
                        mini: o
                    }, e.url)
                })
            }, [i, o, l]);
            return 0 === i.length ? null : (0,
            s.jsx)(en, {
                loop: !1,
                children: u
            })
        })
          , es = t(28869)
          , el = t(44541);
        function eu() {
            var e = (0,
            o._)(["\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n", "\n", "\n", "\n"]);
            return eu = function() {
                return e
            }
            ,
            e
        }
        var ec = c.memo(function(e) {
            var n, t = e.message, r = e.isEditing, o = e.format, l = e.isCompletionInProgress, u = e.className, c = e.onSandboxLinkClick, d = e.isCompletion, f = e.isResponseToPluginMessage, h = (0,
            i._)(e, ["message", "isEditing", "format", "isCompletionInProgress", "className", "onSandboxLinkClick", "isCompletion", "isResponseToPluginMessage"]);
            return r ? (0,
            s.jsx)(T, (0,
            a._)({
                currentLeaf: t.nodeId,
                initialText: x.Cv.getTextFromMessage(t.message),
                role: t.message.author.role
            }, h)) : (0,
            s.jsx)(ed, {
                text: x.Cv.getTextFromMessage(t.message),
                errCode: t.errCode,
                err: t.err,
                flag: t.errType,
                isCompletionInProgress: l,
                format: o,
                className: u,
                citations: null === (n = t.message.metadata) || void 0 === n ? void 0 : n.citations,
                isCompletion: d,
                onSandboxLinkClick: c,
                id: t.nodeId,
                onRequestMoreCompletions: h.onRequestMoreCompletions,
                clientThreadId: h.clientThreadId,
                showExtractedLinkCards: f
            })
        });
        function ed(e) {
            var n, t, r, a = e.citations, i = e.className, o = e.err, u = e.errCode, d = e.flag, m = e.format, x = e.isCompletionInProgress, b = e.size, y = e.text, j = e.onSandboxLinkClick, C = e.isCompletion, w = e.id, k = e.onRequestMoreCompletions, _ = e.clientThreadId, M = e.showExtractedLinkCards, T = u === f.Dd, N = (0,
            h.hz)(), P = (t = (n = {
                text: y,
                isCompletionInProgress: x
            }).text,
            r = n.isCompletionInProgress,
            (0,
            c.useMemo)(function() {
                if (r)
                    return [];
                var e = t.match(ei);
                return Array.from(new Set(e))
            }, [r, t])), I = (0,
            c.useMemo)(function() {
                switch (u) {
                case f.Dd:
                    return (0,
                    s.jsx)(em, {
                        $flag: d,
                        children: (0,
                        s.jsx)(eg, {})
                    });
                case el.uU:
                    if (N.has("model_preview"))
                        return (0,
                        s.jsx)(eh, {
                            id: w,
                            onRequestMoreCompletions: k,
                            flag: d,
                            clientThreadId: _
                        });
                    return (0,
                    s.jsx)(em, {
                        $flag: d,
                        children: o
                    });
                case v.wp:
                    return (0,
                    s.jsx)(em, {
                        $flag: d,
                        children: "Sorry, conversations created when Chat History is off expire after 6 hours of inactivity. Please start a new conversation to continue using ChatGPT."
                    });
                default:
                    return (0,
                    s.jsx)(em, {
                        $flag: d,
                        children: o
                    })
                }
            }, [o, u, N, d, w, k, _]), S = (0,
            h.hz)().has(g.FZ);
            return (0,
            s.jsxs)("div", {
                className: (0,
                l.Z)(i, "flex flex-col items-start gap-4 whitespace-pre-wrap break-words", "danger" === d && "flex flex-row gap-2 text-red-500", "warning" === d && "text-orange-500", S && "text-base"),
                children: [o && !y || T || !m ? "danger" === d && T ? null : y : (0,
                s.jsx)(es.Z, {
                    size: void 0 === b ? "medium" : b,
                    className: (0,
                    l.Z)("danger" !== d && x && "result-streaming", "danger" === d && "text-red-500", "warning" === d && "text-orange-500"),
                    onSandboxLinkClick: j,
                    children: "" === y ? "&#8203;" : (0,
                    p.Qd)(y, a)
                }), C && M && P.length > 0 && (0,
                s.jsx)(eo, {
                    urls: P
                }), d && I]
            })
        }
        function ef(e) {
            var n = e && new Date(e)
              , t = n && new Date(n);
            return t ? "after ".concat(t.getHours() % 12 || 12, ":").concat(10 > t.getMinutes() ? "0" : "").concat(t.getMinutes(), " ").concat(t.getHours() >= 12 ? "PM" : "AM") : "later"
        }
        function eh(e) {
            var n = e.id
              , t = e.onRequestMoreCompletions
              , r = e.flag
              , a = e.clientThreadId
              , i = (0,
            u.useRouter)()
              , o = (0,
            el.CS)(function(e) {
                return e.isoDate
            })
              , l = ef(o)
              , d = (0,
            c.useCallback)(function() {
                t(n, {
                    eventSource: "mouse"
                }, !0, "none", !1)
            }, [n, t])
              , f = (0,
            c.useCallback)(function() {
                var e = void 0 !== a ? m.tQ.getServerThreadId(a) : void 0;
                void 0 === e ? i.replace("/", void 0, {
                    shallow: !0
                }) : (0,
                el.m0)(e),
                t(n, {
                    eventSource: "mouse"
                }, !0, "none", !0)
            }, [n, t, i, a])
              , h = o ? (0,
            s.jsxs)("span", {
                children: ["You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again ".concat(l, "."), " ", (0,
                s.jsx)("a", {
                    href: "https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "underline",
                    children: "Learn more"
                })]
            }) : "You previously reached your usage cap for GPT-4, but you can now try sending your message again";
            return (0,
            s.jsx)(em, {
                $flag: !!o && r,
                children: (0,
                s.jsxs)("div", {
                    className: "flex items-center gap-6",
                    children: [h, !o && (0,
                    s.jsx)(b.z, {
                        color: "light",
                        className: "flex-shrink-0 bg-white",
                        onClick: d,
                        children: "Try again"
                    }), o && (0,
                    s.jsx)(b.z, {
                        color: "light",
                        className: "flex-shrink-0 bg-white",
                        onClick: f,
                        children: "Use default model"
                    })]
                })
            })
        }
        function eg() {
            return (0,
            s.jsxs)(s.Fragment, {
                children: ["This content may violate our", " ", (0,
                s.jsx)("a", {
                    target: "_blank",
                    href: "https://platform.openai.com/docs/usage-policies/content-policy",
                    rel: "noreferrer",
                    className: "bold underline",
                    children: "content policy"
                }), ". If you believe this to be in error, please", " ", (0,
                s.jsx)("a", {
                    target: "_blank",
                    href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
                    rel: "noreferrer",
                    className: "bold underline",
                    children: "submit your feedback"
                }), " ", "— your input will aid our research in this area."]
            })
        }
        var em = d.Z.div(eu(), function(e) {
            return "warning" === e.$flag && "border-orange-500 bg-orange-500/10"
        }, function(e) {
            return "danger" === e.$flag && "border-red-500 bg-red-500/10"
        }, function(e) {
            return !e.$flag && "border-green-500 bg-green-500/10"
        })
    },
    5759: function(e, n, t) {
        "use strict";
        t.d(n, {
            I: function() {
                return g
            },
            Z: function() {
                return c
            }
        });
        var r = t(4337)
          , a = t(35250)
          , i = t(34303);
        function o() {
            var e = (0,
            r._)(["flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]"]);
            return o = function() {
                return e
            }
            ,
            e
        }
        function s() {
            var e = (0,
            r._)(["w-10 text-2xl text-center"]);
            return s = function() {
                return e
            }
            ,
            e
        }
        function l() {
            var e = (0,
            r._)(["flex-1 leading-5"]);
            return l = function() {
                return e
            }
            ,
            e
        }
        function u() {
            var e = (0,
            r._)(["flex gap-4 flex-col text-sm"]);
            return u = function() {
                return e
            }
            ,
            e
        }
        function c(e) {
            var n = e.icon
              , t = e.children;
            return (0,
            a.jsxs)(d, {
                children: [(0,
                a.jsx)(f, {
                    children: n
                }), (0,
                a.jsx)(h, {
                    children: t
                })]
            })
        }
        var d = i.Z.div(o())
          , f = i.Z.div(s())
          , h = i.Z.div(l())
          , g = i.Z.div(u())
    },
    44878: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return o
            }
        });
        var r = t(70079)
          , a = t(32983)
          , i = t(74437);
        function o() {
            var e = (0,
            r.useContext)(a.AX)
              , n = (0,
            i.Z)().installedPlugins;
            return (0,
            r.useMemo)(function() {
                return n.filter(function(n) {
                    return e.has(n.id)
                })
            }, [e, n])
        }
    },
    697: function(e, n, t) {
        "use strict";
        t.d(n, {
            dT: function() {
                return h
            },
            hZ: function() {
                return l
            },
            iO: function() {
                return u
            },
            p0: function() {
                return f
            },
            wu: function() {
                return g
            }
        });
        var r = t(81949)
          , a = t(70079)
          , i = t(81292)
          , o = t(85023)
          , s = t(74437)
          , l = 3
          , u = [["www.klarna.com", "server.shop.app"], ["apim.expedia.com", "kayak.com"], ["www.redfin.com", "plugins.zillow.com"], ["instacart.com", "api.tasty.co"]]
          , c = "oai/enabledPluginIds"
          , d = (0,
        i.ZP)(function() {
            var e = Array.from(new Set(o.m.getItem(c)));
            return {
                enabledPluginIds: new Set(e.splice(0, l))
            }
        });
        function f() {
            var e = (0,
            s.Z)().installedPlugins
              , n = d().enabledPluginIds;
            return (0,
            a.useMemo)(function() {
                return e.filter(function(e) {
                    return n.has(e.id)
                })
            }, [n, e])
        }
        function h(e) {
            e.length > l || d.setState(function() {
                return o.m.setItem(c, e),
                {
                    enabledPluginIds: new Set(e)
                }
            })
        }
        function g(e) {
            d.setState(function(n) {
                if (n.enabledPluginIds.size >= l)
                    return n;
                var t = (0,
                r._)(n.enabledPluginIds).concat([e]);
                return o.m.setItem(c, t),
                {
                    enabledPluginIds: new Set(t)
                }
            })
        }
    },
    74437: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return l
            }
        });
        var r = t(24396)
          , a = t(70079)
          , i = t(32787)
          , o = t(24274)
          , s = t(21437);
        function l() {
            var e = (0,
            i.kP)().session
              , n = (0,
            s.Fl)().isPluginsAvailable
              , t = (0,
            r.a)(["installedAip"], function() {
                return o.ZP.getPlugins({
                    offset: 0,
                    limit: 250,
                    isInstalled: !0,
                    accessToken: null == e ? void 0 : e.accessToken
                })
            }, {
                enabled: n && !!(null == e ? void 0 : e.accessToken),
                onError: function(e) {
                    console.error(e)
                }
            })
              , l = t.data
              , u = t.isLoading;
            return (0,
            a.useMemo)(function() {
                return {
                    installedPlugins: l ? l.items : [],
                    isLoading: u
                }
            }, [l, u])
        }
    },
    60382: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return h
            }
        });
        var r = t(21722)
          , a = t(39889)
          , i = t(30331)
          , o = t(24396)
          , s = t(70079)
          , l = t(32787)
          , u = t(24274)
          , c = t(32983);
        function d(e) {
            return e.map(function(e) {
                return {
                    id: e.slug,
                    maxTokens: e.max_tokens,
                    title: e.title,
                    description: e.description,
                    tags: e.tags,
                    enabledTools: e.enabled_tools,
                    properties: e.qualitative_properties
                }
            })
        }
        var f = d([{
            slug: "text-davinci-002-render",
            max_tokens: 4097,
            title: "Default",
            description: "",
            tags: []
        }]);
        function h() {
            var e, n, t = (0,
            s.useContext)(c.QL).historyDisabled, h = (0,
            l.kP)(), g = h.session, m = h.loading, p = (0,
            o.a)(["models", {
                isHistoryDisabled: !t
            }], (0,
            r._)(function() {
                var e;
                return (0,
                a.Jh)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, u.ZP.getModels(g.accessToken, t)];
                    case 1:
                        return [2, {
                            models: d((e = n.sent()).models),
                            categories: e.categories
                        }]
                    }
                })
            }), {
                enabled: !m && (null == g ? void 0 : g.accessToken) != null,
                onError: function(e) {
                    try {
                        i.Tb("Error in useAvailableModels: ".concat(e))
                    } catch (e) {}
                }
            }), v = p.data, x = p.isLoading;
            return {
                availableModels: (null !== (e = null == v ? void 0 : v.models) && void 0 !== e ? e : f).filter(function(e) {
                    return !e.tags.includes("mobile")
                }),
                categories: null !== (n = null == v ? void 0 : v.categories) && void 0 !== n ? n : [],
                isLoading: x
            }
        }
    },
    92186: function(e, n, t) {
        "use strict";
        t.d(n, {
            ZP: function() {
                return b
            },
            Zf: function() {
                return x
            }
        });
        var r, a = t(96237), i = t(39324), o = t(81949), s = t(41170), l = t(70079), u = t(32787), c = t(64135), d = t(21437), f = t(38317), h = t(60382), g = t(66523), m = t(44541), p = (r = {},
        (0,
        a._)(r, "gpt_3.5", {
            icon: f.jr,
            activeIcon: f.jr,
            activeClass: "text-brand-green",
            iconClass: "group-hover/option:text-brand-green",
            disclaimer: "Available to Free and Plus users",
            showSelectedValueBelow: !1
        }),
        (0,
        a._)(r, "gpt_4", {
            icon: f.Bj,
            activeIcon: f.MP,
            activeClass: "text-brand-purple",
            iconClass: "group-hover/option:text-brand-purple",
            backgroundColor: "#AB68FF",
            disclaimer: "Available exclusively to Plus users",
            showSelectedValueBelow: !1
        }),
        (0,
        a._)(r, "other", {
            icon: s.Z,
            activeIcon: s.Z,
            activeClass: "text-orange-500",
            showSelectedValueBelow: !0,
            disclaimer: "Experimental models"
        }),
        r), v = {
            browsing_model: {
                icon: f.xx,
                activeIcon: f.jZ,
                name: "Browsing"
            },
            code_interpreter_model: {
                icon: f.dY,
                activeIcon: f.b3,
                name: "Code Interpreter"
            },
            plugins_model: {
                icon: f.oV,
                activeIcon: f.Z8,
                name: "Plugins"
            }
        };
        function x(e, n) {
            for (var t = 0; t < e.length; t++) {
                var r = e[t];
                if (r.options.length > 0) {
                    var a = r.options.find(function(e) {
                        return e.value === n
                    });
                    if (a)
                        return {
                            item: a,
                            categoryId: r.categoryId,
                            backgroundColor: p[r.categoryId].backgroundColor,
                            icon: a.icon || r.icon || p[r.categoryId].icon
                        }
                }
            }
        }
        function b() {
            var e, n = (0,
            h.Z)(), t = n.categories, r = n.availableModels, a = (0,
            u.kP)().session, i = (0,
            m.BT)(), s = (0,
            d.Fl)(), f = (0,
            g.Z)(), x = (0,
            c.hz)();
            return (0,
            l.useMemo)(function() {
                var n;
                return function(e, n, t, r, a, i, s) {
                    var l = []
                      , u = e.reduce(function(e, r) {
                        var a = e.modelsInDropdown
                          , i = e.allModels
                          , o = n.find(function(e) {
                            return e.id === r.default_model
                        });
                        o && (i.set(o.id, o),
                        a.set(o.id, o));
                        var s = n.find(function(e) {
                            return e.id === r.browsing_model
                        });
                        s && (i.set(s.id, s),
                        t.isBrowsingEnabled && a.set(s.id, s));
                        var l = n.find(function(e) {
                            return e.id === r.code_interpreter_model
                        });
                        l && (i.set(l.id, l),
                        t.isCodeInterpreterEnabled && a.set(l.id, l));
                        var u = n.find(function(e) {
                            return e.id === r.plugins_model
                        });
                        return u && (i.set(u.id, u),
                        t.isPluginsEnabled && a.set(u.id, u)),
                        e
                    }, {
                        modelsInDropdown: new Map,
                        allModels: new Map
                    })
                      , c = u.modelsInDropdown
                      , d = u.allModels
                      , f = !0
                      , h = !1
                      , g = void 0;
                    try {
                        for (var m, x = e[Symbol.iterator](); !(f = (m = x.next()).done); f = !0) {
                            var b = m.value;
                            if (c.has(b.default_model)) {
                                var j = p[b.category] || {}
                                  , C = a === b.default_model
                                  , w = c.get(b.default_model)
                                  , k = C ? [] : function(e, n, t, r) {
                                    var a = e.isBrowsingEnabled
                                      , i = e.isPluginsEnabled
                                      , o = e.isCodeInterpreterEnabled
                                      , s = [];
                                    if (a && t.browsing_model && r.has(t.browsing_model)) {
                                        var l = v.browsing_model;
                                        s.push(y(r.get(t.browsing_model), {
                                            icon: l.icon,
                                            name: l.name,
                                            disabled: n.has("browsing_disabled"),
                                            activeIcon: l.activeIcon
                                        }))
                                    }
                                    if (o && t.code_interpreter_model && r.has(t.code_interpreter_model)) {
                                        var u = v.code_interpreter_model;
                                        s.push(y(r.get(t.code_interpreter_model), {
                                            icon: u.icon,
                                            name: u.name,
                                            activeIcon: u.activeIcon
                                        }))
                                    }
                                    if (i && t.plugins_model && r.has(t.plugins_model)) {
                                        var c = v.plugins_model;
                                        s.push(y(r.get(t.plugins_model), {
                                            icon: c.icon,
                                            name: c.name,
                                            disabled: n.has("plugins_disabled"),
                                            activeIcon: c.activeIcon
                                        }))
                                    }
                                    return s
                                }(t, r, b, c);
                                l.push({
                                    categoryId: b.category,
                                    value: w.id,
                                    name: b.human_category_name,
                                    description: C ? i : w.description,
                                    disclaimer: j.disclaimer,
                                    activeClass: j.activeClass,
                                    iconClass: j.iconClass,
                                    icon: j.icon,
                                    activeIcon: j.activeIcon,
                                    options: [y(w, {
                                        icon: j.icon,
                                        activeIcon: j.activeIcon,
                                        name: "Default"
                                    })].concat((0,
                                    o._)(k)),
                                    disabled: C,
                                    showSelectedValueBelow: !1
                                })
                            }
                        }
                    } catch (e) {
                        h = !0,
                        g = e
                    } finally {
                        try {
                            f || null == x.return || x.return()
                        } finally {
                            if (h)
                                throw g
                        }
                    }
                    var _ = n.filter(function(e) {
                        return !d.has(e.id)
                    });
                    if (_.length > 0 && s) {
                        var M = _[0]
                          , T = p.other;
                        l.push({
                            categoryId: "other",
                            value: M.id,
                            name: "Alpha",
                            activeClass: T.activeClass,
                            options: _.map(function(e) {
                                return y(e)
                            }),
                            showSelectedValueBelow: !0,
                            icon: T.icon,
                            activeIcon: T.activeIcon
                        })
                    }
                    return {
                        items: l,
                        models: (0,
                        o._)(c.values()).concat((0,
                        o._)(_))
                    }
                }(t, r, s, x, i, f.modelSwitcherDisclaimer, null !== (e = null == a ? void 0 : null === (n = a.user) || void 0 === n ? void 0 : n.email.endsWith("@openai.com")) && void 0 !== e && e)
            }, [r, t, i, x, f.modelSwitcherDisclaimer, s, a])
        }
        function y(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (0,
            i._)({
                value: e.id,
                name: e.title,
                tags: e.tags
            }, n)
        }
    },
    66523: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return c
            }
        });
        var r = t(24396)
          , a = t(70079)
          , i = t(24274)
          , o = t(64135)
          , s = t(99585)
          , l = t(44541)
          , u = {
            textarea: "",
            "model-switcher": ""
        };
        function c() {
            var e = (0,
            o.hz)()
              , n = (0,
            l.CS)(function(e) {
                return e.isoDate
            })
              , t = (0,
            s.xz)(n)
              , c = (0,
            r.a)(["modelMessageCap"], function() {
                return i.ZP.getModelMessageCap()
            }, {
                enabled: e.has("model_preview")
            }).data;
            return (0,
            a.useMemo)(function() {
                var e = (null == c ? void 0 : c.message_cap) || 0
                  , n = (null == c ? void 0 : c.message_cap_window) || 1
                  , r = function(e) {
                    if (e < 60)
                        return e < 2 ? "minute" : "".concat(e, " minutes");
                    var n = Math.floor(e / 60);
                    if (n < 24)
                        return n < 2 ? "hour" : "".concat(n, " hours");
                    var t = Math.floor(n / 24);
                    if (t < 7)
                        return t < 2 ? "day" : "".concat(t, " days")
                }(n)
                  , a = (null == c ? void 0 : c.message_disclaimer) || u;
                return r ? c && n && e ? {
                    textareaDisclaimer: a.textarea.replaceAll("%FORMATTED_TIME%", t).replaceAll("%NUMERATOR%", "".concat(e)).replaceAll("%DENOMINATOR%", r),
                    modelSwitcherDisclaimer: a["model-switcher"].replaceAll("%FORMATTED_TIME%", t).replaceAll("%NUMERATOR%", "".concat(e)).replaceAll("%DENOMINATOR%", r)
                } : {
                    textareaDisclaimer: u.textarea,
                    modelSwitcherDisclaimer: u["model-switcher"]
                } : {
                    textareaDisclaimer: a.textarea,
                    modelSwitcherDisclaimer: a["model-switcher"]
                }
            }, [c, t])
        }
    },
    44541: function(e, n, t) {
        "use strict";
        t.d(n, {
            BT: function() {
                return w
            },
            CS: function() {
                return C
            },
            G3: function() {
                return a
            },
            ZP: function() {
                return _
            },
            f_: function() {
                return x
            },
            m0: function() {
                return j
            },
            n2: function() {
                return v
            },
            uU: function() {
                return b
            },
            xt: function() {
                return k
            }
        });
        var r, a, i = t(96237), o = t(39324), s = t(71209), l = t(81949), u = t(68555), c = t(70079), d = t(81292), f = t(51132), h = t(64135), g = t(75527), m = t(21437), p = t(92186);
        (r = a || (a = {})).Model = "model",
        r.Temperature = "temperature",
        r.Context = "context";
        var v = new Set(["text-davinci-002-render-paid"])
          , x = "gpt-4"
          , b = "model_cap_exceeded"
          , y = (0,
        d.ZP)(function() {
            return {
                serverThreadIds: new Set
            }
        });
        function j(e) {
            y.setState(function(n) {
                return {
                    serverThreadIds: new Set((0,
                    l._)(n.serverThreadIds).concat([e]))
                }
            })
        }
        var C = (0,
        d.ZP)()((0,
        f.tJ)(function(e) {
            return {
                isoDate: "",
                setCapTimeout: function(n) {
                    e(function() {
                        return {
                            isoDate: n
                        }
                    })
                },
                clearCapTimeout: function() {
                    e(function() {
                        return {
                            isoDate: ""
                        }
                    })
                }
            }
        }, {
            name: "oai/apps/capExpiresAt"
        }));
        function w() {
            var e = C(function(e) {
                return e.isoDate
            })
              , n = C(function(e) {
                return e.clearCapTimeout
            })
              , t = Date.now()
              , r = e && new Date(e).getTime();
            return e && r && r <= t ? (n(),
            null) : e ? x : null
        }
        function k(e, n) {
            var t;
            return e ? n[0].id : (null === (t = n.find(function(e) {
                return e.id.includes("text-davinci")
            })) || void 0 === t ? void 0 : t.id) || n[0].id
        }
        function _(e, n, t) {
            var r = (0,
            u.useRouter)()
              , l = r.query
              , d = decodeURIComponent(l[a.Model] || "")
              , f = (0,
            h.hz)()
              , v = y().serverThreadIds
              , x = (0,
            g.XK)(t)
              , b = (0,
            p.ZP)().models
              , j = (0,
            m.Fl)().isBetaFeaturesUiEnabled ? b : e
              , C = (0,
            c.useMemo)(function() {
                if (0 !== j.length) {
                    var t = void 0 !== x && v.has(x);
                    if (!t && n) {
                        var r = e.find(function(e) {
                            return e.id === n
                        });
                        if (r)
                            return r
                    }
                    if (!t && d) {
                        var a = j.find(function(e) {
                            return e.id === d
                        });
                        if (a)
                            return a
                    }
                    var i = k(f.has("priority_driven_models_list"), j);
                    return j.find(function(e) {
                        return e.id === i
                    })
                }
            }, [j, x, v, n, d, f, e])
              , w = parseFloat(l[a.Temperature] || "1")
              , _ = (0,
            c.useCallback)(function(e, n) {
                r.replace({
                    pathname: r.basePath,
                    query: (0,
                    s._)((0,
                    o._)({}, l), (0,
                    i._)({}, e, encodeURIComponent(n)))
                }, void 0, {
                    shallow: !0
                })
            }, [l, r]);
            return (0,
            c.useMemo)(function() {
                return {
                    temperature: w,
                    modelBackend: (null == C ? void 0 : C.id) || "",
                    onChangeModelSetting: _
                }
            }, [_, null == C ? void 0 : C.id, w])
        }
    },
    75527: function(e, n, t) {
        "use strict";
        t.d(n, {
            tQ: function() {
                return S
            },
            OX: function() {
                return k
            },
            Zz: function() {
                return _
            },
            ax: function() {
                return Z
            },
            r7: function() {
                return $
            },
            XK: function() {
                return R
            },
            je: function() {
                return z
            },
            Uy: function() {
                return O
            },
            GD: function() {
                return B
            },
            U0: function() {
                return A
            },
            oq: function() {
                return L
            },
            Hk: function() {
                return q
            },
            UL: function() {
                return D
            },
            Kt: function() {
                return E
            },
            GR: function() {
                return F
            },
            qA: function() {
                return U
            },
            u9: function() {
                return G
            },
            nh: function() {
                return H
            },
            lA: function() {
                return V
            },
            dz: function() {
                return W
            },
            qN: function() {
                return T
            }
        });
        var r = t(39324)
          , a = t(71209)
          , i = t(24396)
          , o = t(61888)
          , s = t(68555)
          , l = t(70079)
          , u = t(81292)
          , c = t(58392)
          , d = t(32787)
          , f = t(70216);
        t(59710);
        var h = t(57311)
          , g = t(75179);
        t(44675).env.INTERNAL_API_URL;
        var m = t(69403)
          , p = t(697)
          , v = t(97688)
          , x = t(60382)
          , b = t(44541)
          , y = t(24274)
          , j = t(32983)
          , C = "NEW:"
          , w = 0;
        function k() {
            return "".concat(C).concat(w++)
        }
        function _(e) {
            return e.startsWith(C)
        }
        var M = {}
          , T = (0,
        u.ZP)((0,
        c.n)(function() {
            return {
                threads: {},
                clientNewThreadIdToServerIdMapping: {},
                threadRetainCounts: {}
            }
        }))
          , N = T.getState
          , P = T.setState
          , I = {
            resolveThreadId: function(e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N();
                return null !== (n = t.clientNewThreadIdToServerIdMapping[e]) && void 0 !== n ? n : e
            },
            getThreadTitle: function(e) {
                var n, t, r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N(), i = I.resolveThreadId(e, a);
                return null !== (r = null === (n = a.threads[i]) || void 0 === n ? void 0 : null === (t = n.initialThreadData) || void 0 === t ? void 0 : t.title) && void 0 !== r ? r : void 0
            }
        }
          , S = {
            getOrInitThread: function(e, n, t) {
                var r = S.resolveThreadId(e);
                return null != N().threads[r] ? N().threads[r] : (S.resetThread(e, n, t),
                N().threads[e])
            },
            getServerThreadId: function(e) {
                return _(e) ? N().clientNewThreadIdToServerIdMapping[e] : e
            },
            setServerIdForNewThread: function(e, n) {
                void 0 === N().clientNewThreadIdToServerIdMapping[e] && P(function(t) {
                    t.threads[n] = t.threads[e],
                    delete t.threads[e],
                    t.clientNewThreadIdToServerIdMapping[e] = n
                })
            },
            initThreadFromServerData: function(e, n) {
                var t, i, o, s, l, u, c, d, m, p, v = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], x = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0, b = S.resolveThreadId(e);
                if (null != N().threads[b] || v) {
                    var y = (i = null === (t = Object.values(n.mapping).find(function(e) {
                        return null === e.parent
                    })) || void 0 === t ? void 0 : t.id,
                    o = new Set,
                    s = new Set,
                    (n.moderation_results || []).forEach(function(e) {
                        e.blocked ? s.add(e.message_id) : e.flagged && o.add(e.message_id)
                    }),
                    {
                        rootId: i,
                        mapping: Object.keys(n.mapping).reduce(function(e, t) {
                            var i, l = n.mapping[t], u = l.parent, c = l.children, d = (0,
                            f._)(l, ["parent", "children"]), m = n.mapping[t].message || h.Cv.createRootMessage();
                            return s.has(m.id) ? i = g.sK : o.has(m.id) && (i = g.Mf),
                            e[t] = (0,
                            r._)((0,
                            a._)((0,
                            r._)({}, d), {
                                message: m,
                                children: c || [],
                                parentId: u || "",
                                type: h.uV[m.author.role]
                            }), i && {
                                metadata: i
                            }),
                            e
                        }, {}),
                        initialCurrentLeafId: n.current_node,
                        authorName: n.author_name
                    });
                    if ((null === (l = N().threads[b]) || void 0 === l ? void 0 : l.isLoading) !== !1) {
                        var j = null !== (u = y.mapping) && void 0 !== u ? u : h.Cv.createTree()
                          , C = {
                            thread: j,
                            initialCurrentLeafId: null !== (d = null !== (c = y.initialCurrentLeafId) && void 0 !== c ? c : y.rootId) && void 0 !== d ? d : "root",
                            threadId: b,
                            title: null !== (m = n.title) && void 0 !== m ? m : null,
                            lastModelUsed: function e(n, t) {
                                var r, a, i = n[t];
                                return (null == i ? void 0 : null === (r = i.message) || void 0 === r ? void 0 : null === (a = r.metadata) || void 0 === a ? void 0 : a.model_slug) ? i.message.metadata.model_slug : (null == i ? void 0 : i.parentId) ? e(n, i.parentId) : null
                            }(y.mapping, y.initialCurrentLeafId),
                            pluginIds: null !== (p = n.plugin_ids) && void 0 !== p ? p : [],
                            authorName: y.authorName
                        }
                          , w = new h.Cv(j)
                          , k = C.initialCurrentLeafId;
                        P(function(e) {
                            var n;
                            e.threads[b] = (0,
                            a._)((0,
                            r._)({}, null !== (n = e.threads[b]) && void 0 !== n ? n : {}), {
                                initialThreadData: C,
                                tree: w,
                                currentLeafId: k,
                                isLoading: !1,
                                continuingFromSharedConversationId: x
                            })
                        }),
                        S.recomputeConversationTurns(b, N().threads[b].currentLeafId, [])
                    }
                }
            },
            resetThread: function(e, n, t) {
                var r, a, i = (a = (null == n ? void 0 : null === (r = n.enabledTools) || void 0 === r ? void 0 : r.includes("tools3")) === !0 ? t.map(function(e) {
                    return e.id
                }) : [],
                {
                    thread: h.Cv.createTree(),
                    initialCurrentLeafId: "root",
                    threadId: null,
                    title: "New chat",
                    lastModelUsed: null,
                    pluginIds: a || [],
                    authorName: ""
                });
                S.deleteThread(e),
                P(function(t) {
                    t.threads[e] = {
                        initialThreadData: i,
                        tree: new h.Cv(i.thread),
                        currentLeafId: i.initialCurrentLeafId,
                        conversationTurns: [],
                        currentModel: n,
                        isLoading: !_(e)
                    }
                })
            },
            updateInitialThreadDataForNewThread: function(e, n, t) {
                P(function(r) {
                    r.threads[e].initialThreadData.lastModelUsed = n,
                    r.threads[e].initialThreadData.pluginIds = t
                })
            },
            getThreadCurrentLeafId: function(e) {
                var n, t, r = S.resolveThreadId(e);
                return null !== (t = null === (n = N().threads[r]) || void 0 === n ? void 0 : n.currentLeafId) && void 0 !== t ? t : "root"
            },
            setThreadCurrentLeafId: function(e, n) {
                var t, r, a = S.resolveThreadId(e);
                if (null != N().threads[a]) {
                    P(function(e) {
                        e.threads[a].currentLeafId = n
                    });
                    var i = N();
                    S.recomputeConversationTurns(a, n, null !== (r = null === (t = i.threads[a]) || void 0 === t ? void 0 : t.conversationTurns) && void 0 !== r ? r : [])
                }
            },
            updateTree: function(e, n) {
                var t, r, a, i, o = S.resolveThreadId(e);
                if (!(null != N().threads[o])) {
                    console.warn("Thread does not exist, cannot update tree: ", o);
                    return
                }
                n(S.getTree(e));
                var s = N()
                  , l = null !== (a = null === (t = s.threads[o]) || void 0 === t ? void 0 : t.currentLeafId) && void 0 !== a ? a : "root"
                  , u = null !== (i = null === (r = s.threads[o]) || void 0 === r ? void 0 : r.conversationTurns) && void 0 !== i ? i : [];
                S.recomputeConversationTurns(o, l, u)
            },
            getTree: function(e) {
                var n, t, r = S.resolveThreadId(e);
                return null !== (t = null === (n = N().threads[r]) || void 0 === n ? void 0 : n.tree) && void 0 !== t ? t : new h.Cv
            },
            resolveThreadId: function(e) {
                return I.resolveThreadId(e)
            },
            recomputeConversationTurns: function(e, n, t) {
                var r = S.resolveThreadId(e);
                P(function(e) {
                    e.threads[r] && (e.threads[r].conversationTurns = S.computeThreadConversationTurns(r, n, t))
                })
            },
            computeThreadConversationTurns: function(e, n, t) {
                var r = S.resolveThreadId(e);
                return S.getTree(r).getConversationTurns(n).map(function(e, n) {
                    var r = null == t ? void 0 : t[n];
                    return (0,
                    o.isEqual)(r, e) ? r : e
                })
            },
            getThreadConversationTurns: function(e, n, t) {
                var r, a, i, o, s = S.resolveThreadId(e), l = null !== (i = null === (r = N().threads[s]) || void 0 === r ? void 0 : r.currentLeafId) && void 0 !== i ? i : "root";
                return null != n && n !== l ? S.computeThreadConversationTurns(s, n, null != t ? t : []) : null !== (o = null === (a = N().threads[s]) || void 0 === a ? void 0 : a.conversationTurns) && void 0 !== o ? o : []
            },
            removeContinuingFromSharedConversationId: function(e) {
                var n = S.resolveThreadId(e);
                P(function(e) {
                    var t;
                    (null === (t = e.threads[n]) || void 0 === t ? void 0 : t.continuingFromSharedConversationId) != null && delete e.threads[n].continuingFromSharedConversationId
                })
            },
            deleteThread: function(e) {
                P(function(n) {
                    delete n.threads[e],
                    delete n.clientNewThreadIdToServerIdMapping[e]
                })
            },
            retainThread: function(e) {
                P(function(n) {
                    var t;
                    n.threadRetainCounts[e] = (null !== (t = n.threadRetainCounts[e]) && void 0 !== t ? t : 0) + 1
                }),
                clearTimeout(M[e])
            },
            releaseThread: function(e) {
                null != N().threads[e] && (P(function(n) {
                    var t;
                    n.threadRetainCounts[e] = Math.max((null !== (t = n.threadRetainCounts[e]) && void 0 !== t ? t : 0) - 1, 0)
                }),
                N().threadRetainCounts[e] > 0 || (clearTimeout(M[e]),
                M[e] = setTimeout(function() {
                    null == N().threads[e] || N().threadRetainCounts[e] > 0 || S.deleteThread(e)
                }, 3e4)))
            }
        }
          , Z = function(e, n) {
            var t = (0,
            s.useRouter)()
              , r = (0,
            d.kP)().session
              , a = (0,
            x.Z)().availableModels
              , o = (0,
            p.p0)()
              , u = (0,
            b.ZP)(a, null, e).modelBackend
              , c = (0,
            l.useMemo)(function() {
                return a.find(function(e) {
                    return e.id === u
                })
            }, [a, u])
              , f = (0,
            l.useContext)(j.QL).historyDisabled;
            (0,
            i.a)(["conversation", e], function() {
                return y.ZP.getConversation(e, null == r ? void 0 : r.accessToken)
            }, {
                enabled: !_(e) && (null == r ? void 0 : r.accessToken) !== void 0 && !f && !n,
                onError: function() {
                    t.replace("/"),
                    v.m.danger("Unable to load conversation ".concat(e))
                },
                onSuccess: function(n) {
                    n && S.initThreadFromServerData(e, n)
                }
            }),
            (0,
            l.useEffect)(function() {
                c && S.getOrInitThread(e, c, o)
            }, [e, c, o, t])
        }
          , R = function(e) {
            return T(function(n) {
                return _(e) ? n.clientNewThreadIdToServerIdMapping[e] : e
            })
        }
          , D = function(e) {
            return T(function(n) {
                var t, r, a = S.resolveThreadId(e);
                return null !== (r = null === (t = n.threads[a]) || void 0 === t ? void 0 : t.initialThreadData) && void 0 !== r ? r : Object.freeze({
                    thread: h.Cv.createTree(),
                    threadId: null,
                    initialCurrentLeafId: "root",
                    title: null,
                    lastModelUsed: null
                })
            })
        }
          , E = function(e) {
            return T(function(n) {
                var t, r, a = S.resolveThreadId(e);
                return null !== (r = null === (t = n.threads[a]) || void 0 === t ? void 0 : t.isLoading) && void 0 !== r && r
            })
        }
          , F = function(e) {
            var n = T(function(n) {
                var t, r, a = S.resolveThreadId(e);
                return null === (t = n.threads[a]) || void 0 === t ? void 0 : null === (r = t.initialThreadData) || void 0 === r ? void 0 : r.pluginIds
            });
            return (0,
            l.useMemo)(function() {
                return new Set(null != n ? n : [])
            }, [n])
        }
          , L = function(e) {
            return T(function() {
                return S.getThreadCurrentLeafId(e)
            })
        }
          , A = function(e, n) {
            var t = (0,
            l.useRef)([]);
            return T(function() {
                var r, a = S.getThreadConversationTurns(e, n, t.current);
                return t.current = a,
                null !== (r = null == a ? void 0 : a.length) && void 0 !== r ? r : 0
            })
        }
          , B = function(e, n, t) {
            var r = (0,
            l.useRef)([]);
            return T(function() {
                var a = S.getThreadConversationTurns(e, t, r.current);
                return r.current = a,
                a[n]
            })
        }
          , q = function(e) {
            var n = L(e);
            return (0,
            l.useMemo)(function() {
                var t, r, a = S.getThreadConversationTurns(e, n, []), i = null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0, o = null !== (r = null == a ? void 0 : a[i - 1]) && void 0 !== r ? r : null;
                return 0 === i ? n : h.Cv.getRequestIdFromConversationTurn(o)
            }, [n, e])
        }
          , U = function(e) {
            return T(function(n) {
                return I.getThreadTitle(e, n)
            })
        }
          , O = function(e) {
            return T(function() {
                var n, t = S.resolveThreadId(e);
                return null === (n = N().threads[t]) || void 0 === n ? void 0 : n.continuingFromSharedConversationId
            })
        }
          , z = function(e) {
            return T(function() {
                var n, t, r = S.resolveThreadId(e);
                return null === (n = N().threads[r]) || void 0 === n ? void 0 : null === (t = n.initialThreadData) || void 0 === t ? void 0 : t.authorName
            })
        }
          , H = function(e, n) {
            return T(function() {
                return S.getTree(e).getNode(n)
            })
        }
          , V = function(e, n) {
            return T(function() {
                var t, r;
                return null !== (r = null === (t = S.getTree(e)) || void 0 === t ? void 0 : t.getHasErrorFromNode(n)) && void 0 !== r && r
            })
        }
          , W = function(e, n) {
            return T(function() {
                var t, r;
                return null !== (r = null === (t = S.getTree(e)) || void 0 === t ? void 0 : t.isMessageIncomplete(n)) && void 0 !== r && r
            })
        }
          , G = function(e, n) {
            return T(function() {
                var t = S.getTree(e);
                return null == t ? [] : t.getBranchFromLeaf(n).filter(function(e) {
                    return e.type !== m.Jq.Root
                }).map(function(e) {
                    return e.message
                })
            })
        }
          , $ = function(e) {
            return T(function() {
                var n, t = S.resolveThreadId(e);
                return (null === (n = N().threads[t]) || void 0 === n ? void 0 : n.continuingFromSharedConversationId) != null
            })
        }
    },
    21437: function(e, n, t) {
        "use strict";
        t.d(n, {
            Fl: function() {
                return w
            },
            N2: function() {
                return C
            },
            tr: function() {
                return a
            }
        });
        var r, a, i, o = t(96237), s = t(39324), l = t(71209), u = t(22830), c = t(35448), d = t(24396), f = t(70079), h = t(81292), g = t(32787), m = t(24274), p = t(64135), v = {
            isBetaFeaturesUiEnabled: !1,
            isBrowsingAvailable: !1,
            isBrowsingEnabled: !1,
            isPluginsAvailable: !1,
            isPluginsEnabled: !1,
            isCodeInterpreterAvailable: !1,
            isCodeInterpreterEnabled: !1,
            isLegacyToolsUser: !1,
            isNewToolsUser: !1
        };
        (r = a || (a = {})).BROWSING = "browsing",
        r.CODE_INTERPRETER = "code_interpreter",
        r.PLUGINS = "plugins";
        var x = (i = {},
        (0,
        o._)(i, a.BROWSING, "isBrowsingEnabled"),
        (0,
        o._)(i, a.CODE_INTERPRETER, "isCodeInterpreterEnabled"),
        (0,
        o._)(i, a.PLUGINS, "isPluginsEnabled"),
        i)
          , b = (0,
        h.ZP)()(function() {
            return v
        })
          , y = {
            updateUserSettings: function(e) {
                b.setState(function(n) {
                    return (0,
                    s._)({}, n, e)
                })
            },
            updateUserSettingsFromFeatures: function(e) {
                b.setState(function(n) {
                    return (0,
                    s._)({}, n, y.getUserSettingsFromFeatures(e))
                })
            },
            getUserSettingsFromFeatures: function(e) {
                return Object.entries(e).reduce(function(e, n) {
                    var t = (0,
                    u._)(n, 2)
                      , r = t[0]
                      , a = t[1]
                      , i = x[r];
                    return i ? (0,
                    l._)((0,
                    s._)({}, e), (0,
                    o._)({}, i, a)) : e
                }, {})
            }
        }
          , j = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return ["userSettings", e]
        };
        function C() {
            var e = (0,
            g.kP)().session
              , n = (0,
            c.NL)();
            return function() {
                return n.invalidateQueries({
                    queryKey: j(null == e ? void 0 : e.accessToken)
                })
            }
        }
        function w() {
            var e = (0,
            g.kP)().session
              , n = (0,
            p.hz)()
              , t = n.has("beta_features");
            return (0,
            d.a)(j(null == e ? void 0 : e.accessToken), function() {
                return m.ZP.getUserSettingBetaFeatures(e.accessToken).then(function(e) {
                    return null != e && y.updateUserSettingsFromFeatures(e),
                    e
                })
            }, {
                enabled: t && (null == e ? void 0 : e.accessToken) != null
            }),
            (0,
            f.useEffect)(function() {
                y.updateUserSettings({
                    isBetaFeaturesUiEnabled: t,
                    isBrowsingAvailable: n.has("browsing_available") || n.has("tools"),
                    isCodeInterpreterAvailable: n.has("tools2"),
                    isPluginsAvailable: n.has("plugins_available") || n.has("tools3"),
                    isLegacyToolsUser: n.has("tools") && n.has("browsing_available") || n.has("tools3") && n.has("plugins_available"),
                    isNewToolsUser: n.has("browsing_available") && !n.has("tools") || n.has("plugins_available") && !n.has("tools3")
                })
            }, [n, t]),
            b(function(e) {
                return e
            })
        }
    },
    36716: function(e, n, t) {
        "use strict";
        t.d(n, {
            Op: function() {
                return h
            },
            Qd: function() {
                return c
            },
            T$: function() {
                return d
            },
            s8: function() {
                return f
            }
        });
        var r = t(35250)
          , a = t(1454)
          , i = t(180)
          , o = t(38317)
          , s = t(57924)
          , l = "&#8203;"
          , u = "oaicite:";
        function c(e, n) {
            if (!n)
                return e;
            for (var t = n.length - 1; t >= 0; t--) {
                var r = n[t]
                  , a = r.start_ix
                  , i = r.end_ix
                  , o = r.metadata
                  , s = r.invalid_reason
                  , c = {
                    index: t
                };
                o ? c.metadata = o : s && (c.invalid_reason = s),
                e = e.slice(0, a) + "".concat(l, "`").concat(u).concat(JSON.stringify(c), "`").concat(l) + e.slice(i)
            }
            return e
        }
        function d(e) {
            if (!e.startsWith(u))
                return null;
            try {
                return JSON.parse(e.slice(u.length))
            } catch (e) {
                return {
                    index: -1
                }
            }
        }
        function f(e) {
            var n, t = e.displayInfo;
            return (0,
            r.jsx)(s.u, {
                label: (0,
                r.jsx)(h, {
                    pageInfo: t.metadata,
                    invalidReason: t.invalid_reason
                }),
                side: "top",
                sideOffset: 4,
                withArrow: !1,
                interactive: !0,
                wide: !0,
                children: (0,
                r.jsx)("a", {
                    href: null === (n = t.metadata) || void 0 === n ? void 0 : n.url,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "px-0.5 text-green-600 !no-underline",
                    children: (0,
                    r.jsx)("sup", {
                        children: t.index + 1
                    })
                })
            })
        }
        function h(e) {
            var n = e.pageInfo
              , t = e.invalidReason;
            return (0,
            r.jsx)("a", {
                href: null == n ? void 0 : n.url,
                target: "_blank",
                rel: "noreferrer",
                className: "text-xs !no-underline",
                children: n ? (0,
                r.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0,
                    r.jsx)("div", {
                        className: "flex shrink-0 items-center justify-center",
                        children: (0,
                        r.jsx)(i.Z, {
                            url: n.url,
                            className: "my-0"
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "max-w-xs truncate",
                        children: n.title
                    }), (0,
                    r.jsx)("div", {
                        className: "shrink-0",
                        children: (0,
                        r.jsx)(o.ZP, {
                            icon: a.AlO,
                            size: "xsmall"
                        })
                    })]
                }) : (0,
                r.jsx)("div", {
                    className: "text-red-500",
                    children: null != t ? t : "Invalid citation"
                })
            })
        }
    },
    53086: function(e, n, t) {
        "use strict";
        t.d(n, {
            G: function() {
                return r
            }
        });
        var r = {
            id: "chat",
            name: "ChatGPT",
            href: "/",
            theme: {
                icon: "openai",
                color: "#19c37d",
                activeColor: "#1a7f64"
            }
        }
    },
    77442: function(e, n, t) {
        "use strict";
        t.d(n, {
            _G: function() {
                return a
            },
            dQ: function() {
                return g
            },
            oc: function() {
                return d
            },
            w$: function() {
                return f
            },
            x_: function() {
                return h
            }
        });
        var r, a, i, o = t(96237), s = t(22830), l = t(70079);
        (r = a || (a = {})).Mobile = "mobile",
        r.Small = "small",
        r.Medium = "medium",
        r.Large = "large",
        r.XLarge = "xlarge";
        var u = (i = {},
        (0,
        o._)(i, a.Small, 640),
        (0,
        o._)(i, a.Medium, 768),
        (0,
        o._)(i, a.Large, 1024),
        (0,
        o._)(i, a.XLarge, 1280),
        i);
        function c(e) {
            var n = function() {
                i(t(e))
            }
              , t = function(e) {
                return window.matchMedia(e).matches
            }
              , r = (0,
            s._)((0,
            l.useState)(t(e)), 2)
              , a = r[0]
              , i = r[1];
            return (0,
            l.useEffect)(function() {
                var t = window.matchMedia(e);
                return n(),
                t.addListener ? t.addListener(n) : t.addEventListener("change", n),
                function() {
                    t.removeListener ? t.removeListener(n) : t.removeEventListener("change", n)
                }
            }, [e]),
            a
        }
        function d() {
            return c("(min-width: ".concat(u[a.Small], "px)"))
        }
        function f() {
            return c("(min-width: ".concat(u[a.Medium], "px)"))
        }
        function h() {
            return c("(min-width: ".concat(u[a.Large], "px)"))
        }
        function g() {
            var e = d()
              , n = f()
              , t = h();
            return c("(min-width: ".concat(u[a.XLarge], "px)")) ? a.XLarge : t ? a.Large : n ? a.Medium : e ? a.Small : a.Mobile
        }
    },
    57311: function(e, n, t) {
        "use strict";
        t.d(n, {
            Cv: function() {
                return _
            },
            uV: function() {
                return j
            }
        });
        var r, a, i = t(51217), o = t(53596), s = t(54084), l = t(49406), u = t(31819), c = t(96237), d = t(39324), f = t(70216), h = t(81949), g = t(74050), m = t(84251), p = t.n(m), v = t(8844), x = t(75179), b = t(69403), y = (r = {},
        (0,
        c._)(r, b.Jq.Root, b.uU.Unknown),
        (0,
        c._)(r, b.Jq.Prompt, b.uU.User),
        (0,
        c._)(r, b.Jq.Completion, b.uU.Assistant),
        (0,
        c._)(r, b.Jq.System, b.uU.System),
        r), j = (a = {},
        (0,
        c._)(a, b.uU.Unknown, b.Jq.Root),
        (0,
        c._)(a, b.uU.System, b.Jq.System),
        (0,
        c._)(a, b.uU.User, b.Jq.Prompt),
        (0,
        c._)(a, b.uU.Assistant, b.Jq.Completion),
        (0,
        c._)(a, b.uU.Critic, b.Jq.Completion),
        (0,
        c._)(a, b.uU.Tool, b.Jq.Completion),
        a);
        function C(e) {
            var n = (0,
            v.Z)();
            return "".concat(e).concat(n.substring(e.length))
        }
        var w = new WeakMap
          , k = new WeakMap
          , _ = function() {
            function e(n) {
                (0,
                i._)(this, e),
                (0,
                s._)(this, w, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                s._)(this, k, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                l._)(this, w, n || e.createTree());
                var t = Object.values((0,
                o._)(this, w)).find(function(e) {
                    return e.type === b.Jq.Root
                });
                (0,
                l._)(this, k, (null == t ? void 0 : t.id) || "root")
            }
            var n = e.prototype;
            return n.getNode = function(e) {
                return (0,
                o._)(this, w)[e]
            }
            ,
            n.getMessage = function(e) {
                return (0,
                o._)(this, w)[e].message
            }
            ,
            n.getMessageId = function(e) {
                try {
                    return (0,
                    o._)(this, w)[e].message.id
                } catch (n) {
                    throw console.error("Tree: Unable to getMessageId for node ".concat(e)),
                    n
                }
            }
            ,
            n.getMetadata = function(e) {
                return (0,
                o._)(this, w)[e].metadata
            }
            ,
            n.getLeafFromNode = function(e) {
                for (var n = (0,
                o._)(this, w)[e]; ; ) {
                    if (0 === n.children.length)
                        return n;
                    n = (0,
                    o._)(this, w)[n.children.values().next().value]
                }
            }
            ,
            n.getParent = function(e) {
                var n = (0,
                o._)(this, w)[e].parentId;
                return (0,
                o._)(this, w)[n]
            }
            ,
            n.getParentId = function(e) {
                var n;
                return (null === (n = this.getParent(e)) || void 0 === n ? void 0 : n.id) || "root"
            }
            ,
            n.getBranchFromLeaf = function(e) {
                for (var n = [], t = (0,
                o._)(this, w)[e]; ; ) {
                    if (n.includes(t)) {
                        console.error("Infinite loop detected in getBranchFromLeaf.");
                        break
                    }
                    if (!t || (n.push(t),
                    "root" === t.type))
                        break;
                    t = (0,
                    o._)(this, w)[t.parentId]
                }
                return n.reverse()
            }
            ,
            n.getChildrenFromNode = function(e) {
                var n = this
                  , t = (0,
                o._)(this, w)[e];
                return t ? Array.from(t.children).map(function(e) {
                    return (0,
                    o._)(n, w)[e]
                }) : []
            }
            ,
            n.getFirstPrompt = function() {
                for (var e, n, t = this.getNode((0,
                o._)(this, k)); ; ) {
                    if (!t)
                        return;
                    if (t.type === b.Jq.Prompt || t.type === b.Jq.System && (null === (e = t.message.metadata) || void 0 === e ? void 0 : e.upload_filename))
                        return t;
                    t = (0,
                    o._)(this, w)[null === (n = t.children) || void 0 === n ? void 0 : n[0]]
                }
            }
            ,
            n.isMessageIncomplete = function(n) {
                var t = this.getMessage(n);
                return e.getIsIncompleteFromMessage(t)
            }
            ,
            n.addNodeToEnd = function(e, n) {
                if (!(0,
                o._)(this, w)[e])
                    return (0,
                    c._)({}, n.id, n);
                (0,
                l._)(this, w, p()((0,
                o._)(this, w), (0,
                c._)({
                    $merge: (0,
                    c._)({}, n.id, n)
                }, e, {
                    children: {
                        $apply: function(e) {
                            return Array.from(new Set((0,
                            h._)(e).concat([n.id])))
                        }
                    }
                })))
            }
            ,
            n.appendSystemMessageToRoot = function(e) {
                var n, t, r = null === (n = this.getFirstPrompt()) || void 0 === n ? void 0 : n.parentId;
                if (r) {
                    var a = this.getNode(r)
                      , i = this.getNode(a.children[0])
                      , s = {
                        id: e.id,
                        children: a.children,
                        parentId: a.id,
                        message: e
                    };
                    (0,
                    l._)(this, w, p()((0,
                    o._)(this, w), (t = {
                        $merge: (0,
                        c._)({}, s.id, s)
                    },
                    (0,
                    c._)(t, a.id, {
                        children: {
                            $set: [s.id]
                        }
                    }),
                    (0,
                    c._)(t, i.id, {
                        parentId: {
                            $set: s.id
                        }
                    }),
                    t)))
                }
            }
            ,
            n.addNode = function(e, n, t, r, a) {
                var i = "string" == typeof n ? {
                    id: C("aaa2"),
                    author: {
                        role: y[r]
                    },
                    content: {
                        content_type: "text",
                        parts: [n]
                    }
                } : n
                  , o = (0,
                d._)({
                    id: e,
                    children: [],
                    parentId: t,
                    type: r,
                    message: i
                }, a ? {
                    metadata: a
                } : {});
                this.addNodeToEnd(t, o)
            }
            ,
            n.updateNode = function(e, n) {
                (0,
                l._)(this, w, p()((0,
                o._)(this, w), (0,
                c._)({}, e, n)))
            }
            ,
            n.updateNodeMessage = function(e, n) {
                (0,
                l._)(this, w, p()((0,
                o._)(this, w), (0,
                c._)({}, e, {
                    message: {
                        $set: n
                    }
                })))
            }
            ,
            n.updateNodeMessageMetadata = function(e, n) {
                (0,
                l._)(this, w, p()((0,
                o._)(this, w), (0,
                c._)({}, e, {
                    message: {
                        metadata: {
                            $merge: n
                        }
                    }
                })))
            }
            ,
            n.updateNodeText = function(e, n) {
                (0,
                l._)(this, w, p()((0,
                o._)(this, w), (0,
                c._)({}, e, {
                    message: {
                        content: {
                            parts: {
                                $set: [n]
                            }
                        }
                    }
                })))
            }
            ,
            n.deleteNode = function(e) {
                var n = (0,
                o._)(this, w)
                  , t = n[e]
                  , r = (0,
                f._)(n, [e].map(g._))
                  , a = t.parentId;
                (0,
                l._)(this, w, p()(r, (0,
                c._)({}, a, {
                    children: {
                        $apply: function(n) {
                            return n.filter(function(n) {
                                return n !== e
                            })
                        }
                    }
                })))
            }
            ,
            n.getTextFromNode = function(n) {
                return e.getTextFromMessage(this.getMessage(n))
            }
            ,
            n.getHasErrorFromNode = function(e) {
                var n, t, r = this.getNode(e);
                return r && ((null === (n = r.metadata) || void 0 === n ? void 0 : n.errType) === "danger" || (null === (t = r.metadata) || void 0 === t ? void 0 : t.errType) === "warning")
            }
            ,
            n.getIsBlockedFromNode = function(e) {
                var n, t, r = this.getNode(e);
                return r && (null === (n = r.metadata) || void 0 === n ? void 0 : n.errCode) === x.Dd && (null === (t = r.metadata) || void 0 === t ? void 0 : t.errType) === "danger"
            }
            ,
            n.getTextFromThread = function(n) {
                return this.getBranchFromLeaf(n).filter(function(e) {
                    return e.type !== b.Jq.Root && e.type !== b.Jq.System
                }).map(function(n) {
                    return e.getTextFromMessage(n.message)
                }).join("\n\n")
            }
            ,
            n.shouldFilterNode = function(e) {
                var n = e.message
                  , t = n.content.content_type
                  , r = e.message.author.role === b.uU.System
                  , a = e.message.author.role === b.uU.Tool
                  , i = void 0 !== n.recipient && "all" !== n.recipient;
                return r || i || a && !("code" === t || "execution_output" === t || "system_error" === t)
            }
            ,
            n.getTextFromTurnsById = function(e) {
                var n = this;
                return e.map(function(e) {
                    return n.getNode(e)
                }).filter(function(e) {
                    return !n.shouldFilterNode(e)
                }).map(function(e) {
                    return n.getTextFromNode(e.id)
                }).join("\n\n")
            }
            ,
            n.getTextFromLastNTurns = function(n, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return this.getConversationTurns(n, this.shouldFilterNode).slice(-t).map(function(n) {
                    var t = n.messages.map(function(n) {
                        return e.getTextFromMessage(n.message)
                    }).filter(function(e) {
                        return "" !== e
                    }).join("\n");
                    return r ? "[".concat(n.role, "]\n").concat(t) : t
                }).join("\n")
            }
            ,
            n.getConversationTurns = function(e, n) {
                var t = this
                  , r = [];
                return this.getBranchFromLeaf(e).forEach(function(e) {
                    var a = e.id
                      , i = e.parentId
                      , s = e.message
                      , l = e.metadata;
                    if (null == n || !n(e)) {
                        var u = r[r.length - 1];
                        (null == u ? void 0 : u.role) === s.author.role || s.author.role === b.uU.Tool ? r[r.length - 1].messages.push((0,
                        d._)({
                            nodeId: a,
                            parentId: i,
                            message: s
                        }, l)) : r.push({
                            role: s.author.role,
                            messages: [(0,
                            d._)({
                                nodeId: a,
                                parentId: i,
                                message: s
                            }, l)],
                            variantIds: i ? Array.from((0,
                            o._)(t, w)[i].children) : [a]
                        })
                    }
                }),
                r
            }
            ,
            n.getLastValidNode = function(e) {
                for (var n, t = this.getNode(e); t && t && (null === (n = t.metadata) || void 0 === n ? void 0 : n.err); )
                    t = this.getNode(t.parentId);
                return t
            }
            ,
            n.getParentPromptNode = function(e) {
                for (var n, t = this.getNode(e); t && t && (null === (n = t.message) || void 0 === n ? void 0 : n.author.role) !== b.uU.User; )
                    t = this.getNode(t.parentId);
                return t
            }
            ,
            n.messageIdToNodeId = function(e) {
                if (null != (0,
                o._)(this, w)[e])
                    return e;
                var n = !0
                  , t = !1
                  , r = void 0;
                try {
                    for (var a, i = Object.values((0,
                    o._)(this, w))[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                        var s, l = a.value;
                        if ((null === (s = l.message) || void 0 === s ? void 0 : s.id) === e)
                            return l.id
                    }
                } catch (e) {
                    t = !0,
                    r = e
                } finally {
                    try {
                        n || null == i.return || i.return()
                    } finally {
                        if (t)
                            throw r
                    }
                }
                return e
            }
            ,
            n.unstable_getMapping = function() {
                return (0,
                o._)(this, w)
            }
            ,
            e.createTree = function() {
                return {
                    root: {
                        id: "root",
                        children: [],
                        parentId: "",
                        type: b.Jq.Root,
                        message: e.createRootMessage()
                    }
                }
            }
            ,
            e.createRootMessage = function() {
                return {
                    id: C("aaa1"),
                    author: {
                        role: y[b.Jq.Root]
                    },
                    content: {
                        content_type: "text",
                        parts: []
                    }
                }
            }
            ,
            e.getIsMessageFinished = function(e) {
                var n;
                return (null === (n = e.metadata) || void 0 === n ? void 0 : n.finish_details) != null
            }
            ,
            e.getIsStopFromMessage = function(e) {
                var n, t;
                return (null === (n = e.metadata) || void 0 === n ? void 0 : null === (t = n.finish_details) || void 0 === t ? void 0 : t.type) === "stop"
            }
            ,
            e.getIsIncompleteFromMessage = function(e) {
                var n, t;
                return (null === (n = e.metadata) || void 0 === n ? void 0 : null === (t = n.finish_details) || void 0 === t ? void 0 : t.type) === "max_tokens"
            }
            ,
            e.getWasInterruptedFromMessage = function(e) {
                var n, t;
                return (null === (n = e.metadata) || void 0 === n ? void 0 : null === (t = n.finish_details) || void 0 === t ? void 0 : t.type) === "interrupted"
            }
            ,
            e.getIsContinuedFromMessage = function(e) {
                var n;
                return (null === (n = e.metadata) || void 0 === n ? void 0 : n.message_type) === "continue"
            }
            ,
            e.getModelFromMessage = function(e) {
                var n;
                return null === (n = e.metadata) || void 0 === n ? void 0 : n.model_slug
            }
            ,
            e.getTextFromMessage = function(e) {
                switch (e.content.content_type) {
                case "text":
                    return e.content.parts.join("");
                case "tether_browsing_code":
                case "code":
                case "execution_output":
                case "system_error":
                    return e.content.text;
                case "system_message":
                    var n = e.content.text
                      , t = !0
                      , r = !1
                      , a = void 0;
                    try {
                        for (var i, o = Object.values(e.content.tools_section)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            var s = i.value;
                            n += "\n\n".concat(s)
                        }
                    } catch (e) {
                        r = !0,
                        a = e
                    } finally {
                        try {
                            t || null == o.return || o.return()
                        } finally {
                            if (r)
                                throw a
                        }
                    }
                    return n;
                default:
                    return ""
                }
            }
            ,
            e.getRequestIdFromConversationTurn = function(e) {
                var n = e.messages[e.messages.length - 1];
                return this.getIsContinuedFromMessage(n.message) ? n.nodeId : e.messages[0].nodeId
            }
            ,
            e.getRecipientFromMessage = function(e) {
                return e.recipient || ""
            }
            ,
            (0,
            u._)(e, [{
                key: "isFirstCompletion",
                get: function() {
                    var e = this.getFirstPrompt();
                    if (e) {
                        var n = (0,
                        o._)(this, w)[e.children[0]];
                        if (n && 0 === n.children.length)
                            return !0
                    }
                    return !1
                }
            }]),
            e
        }()
    },
    86526: function(e, n, t) {
        "use strict";
        var r = t(70079);
        n.Z = function() {
            var e = (0,
            r.useRef)(!1);
            return (0,
            r.useEffect)(function() {
                return e.current = !0,
                function() {
                    e.current = !1
                }
            }, []),
            (0,
            r.useCallback)(function() {
                return e.current
            }, [])
        }
    },
    19051: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return a
            }
        });
        var r = t(70079);
        function a() {
            var e = (0,
            r.useRef)([])
              , n = (0,
            r.useRef)(function(n, t) {
                var r = setTimeout(n, t);
                return e.current.push(r),
                r
            });
            return (0,
            r.useEffect)(function() {
                var n = e.current;
                return function() {
                    n.forEach(function(e) {
                        clearTimeout(e)
                    })
                }
            }, []),
            n.current
        }
    },
    75179: function(e, n, t) {
        "use strict";
        t.d(n, {
            Dd: function() {
                return o
            },
            Mf: function() {
                return s
            },
            _I: function() {
                return u
            },
            sK: function() {
                return l
            }
        });
        var r = t(95182)
          , a = t.n(r)
          , i = t(24274)
          , o = "content_policy"
          , s = {
            errType: "warning",
            errCode: o
        }
          , l = {
            err: "Contents may violate our content policy",
            errType: "danger",
            errCode: o
        };
        function u(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , t = arguments.length > 2 ? arguments[2] : void 0
              , r = arguments.length > 3 ? arguments[3] : void 0
              , o = a()(e.length, 0, 4e3)
              , s = a()(e.length - o, 0, e.length - 1)
              , l = n ? e.substring(s, e.length) : e;
            return l ? i.ZP.runModerationApi(l, t, r).then(function(e) {
                return {
                    isBlocked: !!e.blocked,
                    isFlagged: !!e.flagged
                }
            }).catch(function(e) {
                return console.error(e),
                {
                    isBlocked: !1,
                    isFlagged: !1,
                    error: e
                }
            }) : Promise.resolve({
                isBlocked: !1,
                isFlagged: !1
            })
        }
    },
    41402: function() {}
}]);
