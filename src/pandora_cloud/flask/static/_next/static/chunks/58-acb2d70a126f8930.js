"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[58], {
    57924: function(e, n, r) {
        r.d(n, {
            u: function() {
                return c
            }
        });
        var a = r(4337)
          , s = r(35250)
          , t = r(15838)
          , i = r(19841);
        r(70079);
        var l = r(34303);
        function o() {
            var e = (0,
            a._)(["relative top-[-3px] h-2 w-2 rotate-45 transform border-r border-b border-black/10 bg-gray-100"]);
            return o = function() {
                return e
            }
            ,
            e
        }
        var c = function(e) {
            var n = e.label
              , r = e.side
              , a = e.sideOffset
              , l = e.withArrow
              , o = e.wide
              , c = e.interactive
              , u = e.usePortal
              , p = e.children
              , m = (0,
            s.jsxs)(t.VY, {
                side: void 0 === r ? "bottom" : r,
                sideOffset: void 0 === a ? 14 : a,
                className: (0,
                i.Z)("relative rounded border border-black/10 bg-gray-100 p-1 transition-opacity", void 0 !== o && o ? "max-w-sm" : "max-w-xs"),
                children: [(0,
                s.jsx)("span", {
                    className: "flex items-center whitespace-pre-wrap px-2 py-1 text-center text-sm font-medium normal-case text-gray-700",
                    children: n
                }), (void 0 === l || l) && (0,
                s.jsx)(t.Eh, {
                    asChild: !0,
                    children: (0,
                    s.jsx)(d, {})
                })]
            });
            return (0,
            s.jsxs)(t.fC, {
                delayDuration: 300,
                disableHoverableContent: !(void 0 !== c && c),
                children: [(0,
                s.jsx)(t.xz, {
                    asChild: !0,
                    children: (0,
                    s.jsx)("span", {
                        children: p
                    })
                }), void 0 === u || u ? (0,
                s.jsx)(t.h_, {
                    children: m
                }) : m]
            })
        }
          , d = l.Z.div(o())
    },
    48432: function(e, n, r) {
        r.d(n, {
            Z: function() {
                return j
            }
        });
        var a = r(21722)
          , s = r(22830)
          , t = r(39889)
          , i = r(35250)
          , l = r(16578)
          , o = r.n(l)
          , c = r(68555)
          , d = r(70079)
          , u = r(1454)
          , p = r(82841)
          , m = r(36218)
          , x = r(24274)
          , f = r(64135)
          , h = r(97688)
          , b = r(74853)
          , v = r(99652)
          , g = r(44925)
          , y = r(1220);
        function j(e) {
            var n = e.isOpen
              , r = e.onClose
              , l = (0,
            f.hz)()
              , j = (0,
            p.WS)()
              , w = (0,
            s._)((0,
            d.useState)(!1), 2)
              , N = w[0]
              , k = w[1]
              , C = (0,
            c.useRouter)()
              , _ = (0,
            d.useCallback)(function() {
                j(m.s6.closeAccountPaymentModal),
                r()
            }, [r, j])
              , P = (0,
            d.useCallback)((0,
            a._)(function() {
                var e;
                return (0,
                t.Jh)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        k(!0),
                        j(m.s6.clickAccountPaymentCheckout),
                        n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, 4, 5]),
                        [4, x.ZP.getCheckoutLink()];
                    case 2:
                        return e = n.sent(),
                        C.push(e.url),
                        [3, 5];
                    case 3:
                        return n.sent(),
                        h.m.warning("The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com.", {
                            hasCloseButton: !0
                        }),
                        [3, 5];
                    case 4:
                        return k(!1),
                        [7];
                    case 5:
                        return [2]
                    }
                })
            }), [C, j, k])
              , A = (0,
            d.useCallback)((0,
            a._)(function() {
                var e;
                return (0,
                t.Jh)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        k(!0),
                        j(m.s6.clickAccountCustomerPortal),
                        n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, 4, 5]),
                        [4, x.ZP.fetchCustomerPortalUrl()];
                    case 2:
                        return e = n.sent(),
                        C.push(e.url),
                        [3, 5];
                    case 3:
                        return n.sent(),
                        h.m.warning("The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.", {
                            hasCloseButton: !0
                        }),
                        [3, 5];
                    case 4:
                        return k(!1),
                        [7];
                    case 5:
                        return [2]
                    }
                })
            }), [C, j, k])
              , S = (0,
            d.useCallback)(function() {
                j(m.s6.clickAccountPaymentGetHelp)
            }, [j])
              , Z = (0,
            f.YD)()
              , T = l.has("disable_upgrade_ui");
            return (0,
            i.jsxs)(b.x, {
                isOpen: n,
                onClose: r,
                children: [(0,
                i.jsxs)("div", {
                    className: "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
                    children: [(0,
                    i.jsx)("span", {
                        className: "text-base font-semibold sm:text-base",
                        children: "Your plan"
                    }), (0,
                    i.jsx)("button", {
                        className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                        onClick: _,
                        children: (0,
                        i.jsx)(u.q5L, {
                            className: "h-6 w-6"
                        })
                    })]
                }), (0,
                i.jsxs)("div", {
                    className: "grid sm:grid-cols-2",
                    children: [(0,
                    i.jsx)("div", {
                        className: "relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0",
                        children: (0,
                        i.jsx)(v.Oi, {
                            rowElements: [(0,
                            i.jsx)(v.Cu, {
                                text: "Free plan"
                            }, "row-free-plan-name"), (0,
                            i.jsx)(v.hi, {
                                variant: "disabled",
                                disabled: !0,
                                text: y.S.free.callToAction.active
                            }, "row-free-plan-button"), (0,
                            i.jsx)(v.G, {
                                variant: "secondary",
                                text: y.S.free.demandAccess
                            }, "row-free-plan-demand"), (0,
                            i.jsx)(v.G, {
                                variant: "secondary",
                                text: y.S.free.responseSpeed
                            }, "row-free-plan-speed"), (0,
                            i.jsx)(v.G, {
                                className: "sm:pb-2",
                                variant: "secondary",
                                text: y.S.free.modelFeatures
                            }, "row-free-plan-updates")]
                        })
                    }), (0,
                    i.jsx)("div", {
                        className: "relative order-1 col-span-1 sm:order-2",
                        children: (0,
                        i.jsx)(v.Oi, {
                            rowElements: [(0,
                            i.jsx)(v.Cu, {
                                text: y.S.plus.name,
                                children: (0,
                                i.jsx)("span", {
                                    className: "font-semibold text-gray-500",
                                    children: y.S.plus.costInDollars
                                })
                            }, "row-plus-plan-title"), (0,
                            i.jsx)(v.hi, {
                                variant: "primary",
                                disabledText: T ? "Due to high demand, we've temporarily paused upgrades." : "",
                                disabled: N,
                                isLoading: N,
                                onClick: P,
                                text: y.S.plus.callToAction.inactivePayment
                            }, "row-plus-plan-button"), (0,
                            i.jsx)(v.G, {
                                variant: "primary",
                                text: y.S.plus.demandAccess
                            }, "row-plus-plan-demand"), (0,
                            i.jsx)(v.G, {
                                variant: "primary",
                                text: y.S.plus.responseSpeed
                            }, "row-plus-plan-speed"), (0,
                            i.jsx)(v.G, {
                                className: "sm:pb-2",
                                variant: "primary",
                                text: y.S.plus.modelFeatures
                            }, "row-plus-plan-updates"), Z && (0,
                            i.jsx)(v.nR, {
                                className: "sm:pb-1",
                                isLoading: N,
                                text: y.S.manageSubscriptionWeb.callToAction,
                                onClick: A
                            }, "row-plus-plan-manage"), (0,
                            i.jsx)(o(), {
                                target: "_blank",
                                href: g.L,
                                passHref: !0,
                                children: (0,
                                i.jsx)(v.nR, {
                                    className: "sm:pb-1",
                                    isLoading: !1,
                                    text: y.S.getHelp.callToAction,
                                    onClick: S
                                }, "row-plus-plan-help")
                            }, "row-plus-plan-help-link")]
                        })
                    })]
                })]
            })
        }
    },
    74853: function(e, n, r) {
        r.d(n, {
            x: function() {
                return o
            }
        });
        var a = r(4337)
          , s = r(35250)
          , t = r(34303)
          , i = r(55041);
        function l() {
            var e = (0,
            a._)(["flex grow justify-center bg-white dark:bg-gray-900 rounded-md flex-col items-start overflow-hidden border shadow-md dark:border-gray-700"]);
            return l = function() {
                return e
            }
            ,
            e
        }
        var o = function(e) {
            var n = e.children
              , r = e.isOpen
              , a = e.onClose;
            return (0,
            s.jsx)(i.ZP, {
                size: "fullscreen",
                isOpen: r,
                onModalClose: a,
                type: "success",
                className: "md:w-[672px] lg:w-[896px] xl:w-[1024px]",
                children: (0,
                s.jsx)("div", {
                    className: "flex h-full flex-col items-center justify-start",
                    children: (0,
                    s.jsx)("div", {
                        className: "relative",
                        children: (0,
                        s.jsx)(c, {
                            children: n
                        })
                    })
                })
            })
        }
          , c = t.Z.div(l())
    },
    99652: function(e, n, r) {
        r.d(n, {
            Cu: function() {
                return h
            },
            G: function() {
                return g
            },
            Hb: function() {
                return j
            },
            Oi: function() {
                return f
            },
            hi: function() {
                return v
            },
            nR: function() {
                return y
            }
        });
        var a = r(4337)
          , s = r(35250)
          , t = r(19841)
          , i = r(70079)
          , l = r(1454)
          , o = r(34303)
          , c = r(66958)
          , d = r(38317)
          , u = r(57924);
        function p() {
            var e = (0,
            a._)(["p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900"]);
            return p = function() {
                return e
            }
            ,
            e
        }
        function m() {
            var e = (0,
            a._)(["gap-2 flex flex-row justify-start items-center text-sm"]);
            return m = function() {
                return e
            }
            ,
            e
        }
        function x() {
            var e = (0,
            a._)(["text-xl font-semibold justify-between items-center flex"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        var f = function(e) {
            var n = e.rowElements;
            return (0,
            s.jsx)(w, {
                children: n.map(function(e) {
                    return e
                })
            })
        }
          , h = function(e) {
            var n = e.className
              , r = e.text
              , a = e.children;
            return (0,
            s.jsxs)(k, {
                className: n,
                children: [(0,
                s.jsx)("span", {
                    children: r
                }), a]
            })
        }
          , b = {
            "primary-disabled": "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
            primary: "border-none py-3 font-semibold",
            disabled: "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100"
        }
          , v = (0,
        i.forwardRef)(function(e, n) {
            var r = e.isLoading
              , a = void 0 !== r && r
              , i = e.disabled
              , o = e.onClick
              , p = e.variant
              , m = void 0 === p ? "primary" : p
              , x = e.text
              , f = e.disabledText;
            return f ? (0,
            s.jsx)("div", {
                className: "relative",
                children: (0,
                s.jsx)(u.u, {
                    side: "bottom",
                    sideOffset: 20,
                    label: f,
                    usePortal: !1,
                    children: (0,
                    s.jsxs)(c.z, {
                        ref: n,
                        as: "button",
                        color: "disabled",
                        className: (0,
                        t.Z)("w-full", b[m]),
                        children: [x, a && (0,
                        s.jsx)(d.ZP, {
                            className: "animate-spin",
                            icon: l.dAq
                        })]
                    })
                })
            }) : (0,
            s.jsxs)(c.z, {
                disabled: void 0 !== i && i,
                onClick: o,
                ref: n,
                as: "button",
                className: (0,
                t.Z)(b[m]),
                children: [(0,
                s.jsx)("span", {
                    className: (0,
                    t.Z)("inline-block", {
                        "text-gray-700": "primary-disabled" === m,
                        "text-white": "primary" === m
                    }),
                    children: x
                }), a && (0,
                s.jsx)(d.ZP, {
                    className: "animate-spin",
                    icon: l.dAq
                })]
            })
        });
        v.displayName = "PricingPlanButton";
        var g = function(e) {
            var n = e.variant
              , r = void 0 === n ? "primary" : n
              , a = e.className
              , i = e.text;
            return (0,
            s.jsxs)(N, {
                className: a,
                children: [(0,
                s.jsx)(d.ZP, {
                    icon: l._rq,
                    className: (0,
                    t.Z)("h-5 w-5", {
                        "text-green-700": "primary" == r,
                        "text-gray-400": "secondary" == r
                    })
                }), (0,
                s.jsx)("span", {
                    children: i
                })]
            })
        }
          , y = function(e) {
            var n = e.className
              , r = e.text
              , a = e.isLoading
              , t = e.onClick;
            return (0,
            s.jsx)(N, {
                className: n,
                children: (0,
                s.jsxs)("button", {
                    onClick: t,
                    className: "flex flex-row items-center space-x-1 underline",
                    children: [(0,
                    s.jsx)("span", {
                        children: r
                    }), a && (0,
                    s.jsx)(d.ZP, {
                        className: "animate-spin",
                        icon: l.dAq
                    })]
                })
            })
        }
          , j = function(e) {
            var n = e.className
              , r = e.text;
            return (0,
            s.jsx)(N, {
                className: n,
                children: (0,
                s.jsx)("span", {
                    className: "flex flex-row items-center space-x-1",
                    children: r
                })
            })
        }
          , w = o.Z.div(p())
          , N = o.Z.div(m())
          , k = o.Z.div(x())
    },
    44925: function(e, n, r) {
        r.d(n, {
            L: function() {
                return a
            },
            _: function() {
                return s
            }
        });
        var a = "https://help.openai.com/en/collections/3943089-billing"
          , s = {
            WEBAPP: "chatgpt_web",
            MOBILE_IOS: "chatgpt_mobile_ios",
            GRANTED: "chatgpt_gratis_recepient",
            NOT_PURCHASED: "chatgpt_not_purchased"
        }
    },
    1220: function(e, n, r) {
        r.d(n, {
            S: function() {
                return a
            }
        });
        var a = {
            free: {
                name: "Free plan",
                callToAction: {
                    active: "Your current plan",
                    inactive: "Your current plan"
                },
                costInDollars: "",
                demandAccess: "Available when demand is low",
                responseSpeed: "Standard response speed",
                modelFeatures: "Regular model updates"
            },
            plus: {
                name: "ChatGPT Plus",
                callToAction: {
                    active: "Your current plan",
                    inactive: "I'm interested",
                    inactivePayment: "Upgrade plan"
                },
                costInDollars: "USD $20/mo",
                demandAccess: "Available even when demand is high",
                responseSpeed: "Faster response speed",
                modelFeatures: "Priority access to new features"
            },
            manageSubscriptionWeb: {
                callToAction: "Manage my subscription"
            },
            manageSubscriptionIos: {
                callToAction: "Manage my subscription in the ChatGPT iOS app"
            },
            getHelp: {
                callToAction: "I need help with a billing issue"
            },
            business: {
                callToAction: "Buy for my team"
            }
        }
    },
    87316: function(e, n, r) {
        r.d(n, {
            g: function() {
                return o
            }
        });
        var a = r(96237)
          , s = r(39324)
          , t = r(71209)
          , i = r(81292)
          , l = {
            flags: {
                isUserInCanPayGroup: !1,
                failwhaleBypassEnabled: !1,
                sharingEnabled: !1,
                messageRedesign: !1
            }
        }
          , o = (0,
        i.ZP)()(function(e, n) {
            return (0,
            t._)((0,
            s._)({}, l), {
                updateFlagValue: function(r, i) {
                    var l = n().flags;
                    e({
                        flags: (0,
                        t._)((0,
                        s._)({}, l), (0,
                        a._)({}, r, i))
                    })
                }
            })
        })
    }
}]);
