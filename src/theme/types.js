export default {
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
