export default {
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
