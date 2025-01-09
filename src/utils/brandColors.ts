import afrikitShared from 'afrikit-shared'
const BRAND_COLORS = {
    afrinvest: {
        light: {
            accent1: afrikitShared().theme.colors.light.green1, // Lightest - almost white with slight green tint
            accent2: afrikitShared().theme.colors.light.green2,
            accent3: afrikitShared().theme.colors.light.green3,
            accent4: afrikitShared().theme.colors.light.green4,
            accent5: afrikitShared().theme.colors.light.green5,
            accent6: afrikitShared().theme.colors.light.green6,
            accent7: afrikitShared().theme.colors.light.green7,
            accent8: afrikitShared().theme.colors.light.green8,
            accent9: afrikitShared().theme.colors.light.green9, // Most saturated green
            accent10: afrikitShared().theme.colors.light.green10,
            accent11: afrikitShared().theme.colors.light.green11,
            accent12: afrikitShared().theme.colors.light.green12, // Darkest - almost black with slight green tint
        },
        dark: {
            accent1: afrikitShared().theme.colors.dark.green1, // Lightest - almost white with slight green tint
            accent2: afrikitShared().theme.colors.dark.green2,
            accent3: afrikitShared().theme.colors.dark.green3,
            accent4: afrikitShared().theme.colors.dark.green4,
            accent5: afrikitShared().theme.colors.dark.green5,
            accent6: afrikitShared().theme.colors.dark.green6,
            accent7: afrikitShared().theme.colors.dark.green7,
            accent8: afrikitShared().theme.colors.dark.green8,
            accent9: afrikitShared().theme.colors.dark.green9, // Most saturated green
            accent10: afrikitShared().theme.colors.dark.green10,
            accent11: afrikitShared().theme.colors.dark.green11,
            accent12: afrikitShared().theme.colors.dark.green12, // Darkest - almost black with slight green tint
        },
        alphaLight: {
            accentA1: afrikitShared().theme.colors.light.greenA1,
            accentA2: afrikitShared().theme.colors.light.greenA2,
            accentA3: afrikitShared().theme.colors.light.greenA3,
            accentA4: afrikitShared().theme.colors.light.greenA4,
            accentA5: afrikitShared().theme.colors.light.greenA5,
            accentA6: afrikitShared().theme.colors.light.greenA6,
            accentA7: afrikitShared().theme.colors.light.greenA7,
            accentA8: afrikitShared().theme.colors.light.greenA8,
            accentA9: afrikitShared().theme.colors.light.greenA9,
            accentA10: afrikitShared().theme.colors.light.greenA10,
            accentA11: afrikitShared().theme.colors.light.greenA11,
            accentA12: afrikitShared().theme.colors.light.greenA12,
        },
        alphaDark: {
            accentA1: afrikitShared().theme.colors.dark.greenA1,
            accentA2: afrikitShared().theme.colors.dark.greenA2,
            accentA3: afrikitShared().theme.colors.dark.greenA3,
            accentA4: afrikitShared().theme.colors.dark.greenA4,
            accentA5: afrikitShared().theme.colors.dark.greenA5,
            accentA6: afrikitShared().theme.colors.dark.greenA6,
            accentA7: afrikitShared().theme.colors.dark.greenA7,
            accentA8: afrikitShared().theme.colors.dark.greenA8,
            accentA9: afrikitShared().theme.colors.dark.greenA9,
            accentA10: afrikitShared().theme.colors.dark.greenA10,
            accentA11: afrikitShared().theme.colors.dark.greenA11,
            accentA12: afrikitShared().theme.colors.dark.greenA12,
        },
    },
    default: {
        light: afrikitShared().theme.colors.accent.light,
        dark: afrikitShared().theme.colors.accent.dark,
        alphaLight: afrikitShared().theme.colors.accent.alphaLight,
        alphaDark: afrikitShared().theme.colors.accent.alphaDark,
    }
}

export default BRAND_COLORS