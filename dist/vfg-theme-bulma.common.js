'use strict';

var custom = {
    types: {
        file: {
            classes: {
                'file-input': true
            },
            wrapper: {
                prepend: {
                    label: {
                        enabled: false
                    }
                },
                wrapper: {
                    control: {
                        classes: {
                            file: true,
                            control: false
                        },
                        wrapper: {
                            label: {
                                tag: 'label',
                                id: null,
                                enabled: true,
                                classes: {
                                    'file-label': true
                                },
                                append: {
                                    cta: {
                                        tag: 'span',
                                        enabled: true,
                                        classes: {
                                            'file-cta': true
                                        },
                                        wrapper: {
                                            span: {
                                                isLabel: true,
                                                tag: 'span',
                                                id: null,
                                                enabled: true,
                                                classes: {
                                                    'file-label': true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

var group = {
    group: {
        classes: {
            box: true
        }
    }
};

var horizontal = {
    schema: {
        wrapper: {
            classes: {
                'is-horizontal': true
            },
            prepend: {
                label: {
                    enabled: false
                },
                col: {
                    enabled: true,
                    tag: 'div',
                    classes: {
                        'field-label': true
                    },
                    wrapper: {
                        label: {
                            enabled: true,
                            tag: 'label',
                            classes: {
                                label: true
                            }
                        }
                    }
                }
            },
            wrapper: {
                control: {
                    classes: {
                        'control': false,
                        'field-body': true
                    },
                    wrapper: {
                        field: {
                            enabled: true,
                            classes: {
                                field: true
                            },
                            wrapper: {
                                control: {
                                    enabled: true,
                                    classes: {
                                        control: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    types: {
        checkbox: {
            wrapper: {
                prepend: {
                    col: {
                        wrapper: {
                            label: {
                                enabled: false
                            }
                        }
                    }
                },
                append: {
                    label: {
                        enabled: false
                    }
                },
                wrapper: {
                    control: {
                        wrapper: {
                            field: {
                                tag: 'div',
                                classes: {
                                    field: true,
                                    checkbox: false
                                },
                                append: {
                                    span: {
                                        enabled: false
                                    }
                                },
                                wrapper: {
                                    control: {
                                        wrapper: {
                                            label: {
                                                tag: 'label',
                                                id: null,
                                                enabled: true,
                                                classes: {
                                                    checkbox: true
                                                },
                                                append: {
                                                    span: {
                                                        isLabel: true,
                                                        tag: 'span',
                                                        id: null,
                                                        enabled: true
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },

        radio: {
            wrapper: {
                prepend: {
                    col: {
                        wrapper: {
                            label: {
                                enabled: false
                            }
                        }
                    }
                },
                append: {
                    label: {
                        enabled: false
                    }
                },
                wrapper: {
                    control: {
                        wrapper: {
                            field: {
                                tag: 'div',
                                classes: {
                                    field: true,
                                    radio: false
                                },
                                append: {
                                    span: {
                                        enabled: false
                                    }
                                },
                                wrapper: {
                                    control: {
                                        wrapper: {
                                            label: {
                                                tag: 'label',
                                                id: null,
                                                enabled: true,
                                                classes: {
                                                    radio: true
                                                },
                                                append: {
                                                    span: {
                                                        isLabel: true,
                                                        tag: 'span',
                                                        id: null,
                                                        enabled: true
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },

        select: {
            wrapper: {
                wrapper: {
                    control: {
                        wrapper: {
                            field: {
                                classes: {
                                    field: true,
                                    select: false
                                },
                                wrapper: {
                                    control: {
                                        wrapper: {
                                            select: {
                                                enabled: true,
                                                classes: {
                                                    select: true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    custom: {
        types: {
            file: {
                classes: {
                    'file-input': true
                },
                wrapper: {
                    prepend: {
                        col: {
                            wrapper: {
                                label: {
                                    enabled: false
                                }
                            }
                        }
                    },
                    wrapper: {
                        control: {
                            wrapper: {
                                field: {
                                    wrapper: {
                                        control: {
                                            classes: {
                                                control: false,
                                                file: true
                                            },
                                            wrapper: {
                                                label: {
                                                    tag: 'label',
                                                    id: null,
                                                    enabled: true,
                                                    classes: {
                                                        'file-label': true
                                                    },
                                                    append: {
                                                        cta: {
                                                            tag: 'span',
                                                            enabled: true,
                                                            classes: {
                                                                'file-cta': true
                                                            },
                                                            wrapper: {
                                                                span: {
                                                                    isLabel: true,
                                                                    tag: 'span',
                                                                    id: null,
                                                                    enabled: true,
                                                                    classes: {
                                                                        'file-label': true
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

var row = {
    row: {
        classes: {
            'field': true,
            'is-grouped': true
        }
    },

    schema: {
        wrapper: {
            classes: {
                field: false,
                control: true
            },
            wrapper: {
                control: {
                    classes: {
                        control: false
                    }
                }
            }
        }
    }
};

var schema = {
    wrapper: {
        classes: {
            field: true
        },
        wrapper: {
            control: {
                enabled: true,
                classes: {
                    control: true
                }
            }
        },
        prepend: {
            label: {
                classes: {
                    label: true
                }
            }
        }
    }
};

var types = {
    input: {
        classes: {
            input: true
        }
    },

    checkbox: {
        classes: {
            input: false
        },
        wrapper: {
            append: {
                label: {
                    enabled: false
                }
            },
            wrapper: {
                control: {
                    wrapper: {
                        field: {
                            tag: 'label',
                            id: null,
                            enabled: true,
                            classes: {
                                checkbox: true
                            },
                            append: {
                                span: {
                                    isLabel: true,
                                    tag: 'span',
                                    id: null,
                                    enabled: true
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    radio: {
        classes: {
            input: false
        },
        wrapper: {
            append: {
                label: {
                    enabled: false
                }
            },
            wrapper: {
                control: {
                    wrapper: {
                        field: {
                            tag: 'label',
                            id: null,
                            enabled: true,
                            classes: {
                                radio: true
                            },
                            append: {
                                span: {
                                    isLabel: true,
                                    tag: 'span',
                                    id: null,
                                    enabled: true
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    file: {
        classes: {
            input: false
        }
    },

    range: {
        classes: {
            input: false
        }
    },

    button: {
        classes: {
            input: false,
            button: true
        }
    },

    image: {
        classes: {
            input: false
        }
    },

    submit: {
        classes: {
            input: false,
            button: true
        }
    },

    textarea: {
        classes: {
            textarea: true
        }
    },

    select: {
        wrapper: {
            wrapper: {
                control: {
                    wrapper: {
                        field: {
                            enabled: true,
                            classes: {
                                select: true
                            }
                        }
                    }
                }
            }
        }
    }
};

var theme = {
    custom: custom,
    group: group,
    horizontal: horizontal,
    row: row,
    schema: schema,
    types: types
};

var vfgTheme = {
    install: function (Vue) {
        Vue.$vfg.addTheme('bulma', theme);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vfgTheme);
}

module.exports = vfgTheme;
