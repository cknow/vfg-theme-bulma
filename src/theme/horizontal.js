export default {
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
