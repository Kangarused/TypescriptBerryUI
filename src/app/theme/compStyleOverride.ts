import { Components, Theme } from "@mui/material";
import { CustomThemeOptions } from "../../types/customThemeOptions";

export default function componentStyleOverrides(theme: CustomThemeOptions): Components<Theme> {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: '4px'
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundColor: theme.colors.card,
                    backgroundImage: 'none',
                },
                rounded: {
                    borderRadius: `${theme?.layout?.borderRadius}px`
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    padding: '12px',
                    '@media (min-width: 600px)': {
                        padding: '12px',
                    }
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: '24px'
                },
                title: {
                    fontSize: '1.125rem'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '24px',
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '24px'
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: theme.colors.textPrimary,
                    padding: '10px',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    '&.Mui-selected': {
                        color: theme.colors.menuContrast,
                        backgroundColor: theme.colors.menuBackground,
                        '&:hover': {
                            backgroundColor: theme.colors.menuBackground,
                        },
                        '& .MuiListItemIcon-root': {
                            color: theme.colors.menuContrast
                        }
                    },
                    '&:hover': {
                        backgroundColor: theme.colors.menuBackground,
                        color: theme.colors.menuContrast,
                        '& .MuiListItemIcon-root': {
                            color: theme.colors.menuContrast
                        }
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: theme.colors.textPrimary,
                    minWidth: '36px'
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: theme.colors.textDefault
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: theme.colors.textDefault,
                    '&::placeholder': {
                        color: theme.colors.textSecondary,
                        fontSize: '0.875rem'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: theme.layout.isDarkTheme ? theme.colors.content : theme.colors.paper,
                    borderRadius: `${theme?.layout?.borderRadius}px`,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.colors.dividerContrast
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.colors.primaryMain
                    },
                    '&.MuiInputBase-multiline': {
                        padding: 1
                    }
                },
                input: {
                    fontWeight: 500,
                    background: theme.layout.isDarkTheme ? theme.colors.content : theme.colors.paper,
                    padding: '15.5px 14px',
                    borderRadius: `${theme?.layout?.borderRadius}px`,
                    '&.MuiInputBase-inputSizeSmall': {
                        padding: '10px 14px',
                        '&.MuiInputBase-inputAdornedStart': {
                            paddingLeft: 0
                        }
                    }
                },
                inputAdornedStart: {
                    paddingLeft: 4
                },
                notchedOutline: {
                    borderRadius: `${theme?.layout?.borderRadius}px`
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        color: theme.colors?.grey300
                    }
                },
                mark: {
                    backgroundColor: theme.colors.paper,
                    width: '4px'
                },
                valueLabel: {
                    color: theme?.colors?.primaryLight
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: theme.colors.divider,
                    opacity: 1
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    color: theme.colors?.primaryDark,
                    background: theme.colors?.primary200
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    '&.MuiChip-deletable .MuiChip-deleteIcon': {
                        color: 'inherit'
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: theme.colors.paper,
                    background: theme.colors?.grey700
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: theme.colors.divider,
                },
                head: {
                    fontWeight: 'bold'
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: '0.95rem',
                }
            }
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    borderColor: theme.layout.isDarkTheme ? theme.colors.background : theme.colors.contentContrast,
                    borderWidth: '1px',
                    borderStyle: 'solid'
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-root': {
                        backgroundColor: theme.layout.isDarkTheme ? theme.colors.background : theme.colors.grey200
                    }
                }
            }
        }
    };
}
