plugin.tx_news {
    view {
        templateRootPaths >
        templateRootPaths {
            0 = EXT:news/Resources/Private/Templates/
            5 = EXT:news/Resources/Private/Templates/Styles/Twb/Templates
            15 = EXT:template/Resources/Private/Fluid/News/Templates/
        }

        partialRootPaths >
        partialRootPaths {
            0 = EXT:news/Resources/Private/Partials/
            5 = EXT:news/Resources/Private/Templates/Styles/Twb/Partials/
            15 = EXT:template/Resources/Private/Fluid/News/Partials/
        }

        layoutRootPaths >
        layoutRootPaths {
            0 = EXT:news/Resources/Private/Layouts/
            5 = EXT:news/Resources/Private/Templates/Styles/Twb/Layouts/
            15 = EXT:template/Resources/Private/Fluid/News/Layouts/
        }
    }

    settings {
        displayDummyIfNoMedia = 0

        list {
            media.image.width = 400
        }

        detail {
            showSocialShareButtons = 0
        }
    }
}