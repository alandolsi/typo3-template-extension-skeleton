<?php

if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

/**
 * Do not pollute global namespace
 * @var $_EXTKEY string
 */
(function ($extKey) {
    $vendor = "BIT";

    $typo3ConfVars = &$GLOBALS['TYPO3_CONF_VARS'];
    $scOptions = &$typo3ConfVars['SC_OPTIONS'];

    if (TYPO3_MODE === 'BE') {
        /* ===========================================================================
                Hooks and Signals/Slots
           =========================================================================== */

        /* ===========================================================================
                Scheduler Command Controller
            =========================================================================== */


        /* ===========================================================================
                Update scripts
            =========================================================================== */
    }

    /* ===========================================================================
        Register global fluid namespace
       =========================================================================== */
    \BIT\Utility\Fluid\FluidNamespace::register('t', ['BIT\Template\ViewHelpers',]);

    /* ===========================================================================
            Page TS Config
        =========================================================================== */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:template/Configuration/TsConfig/setup.ts">'
    );

    /* ===========================================================================
            Register content elements
       =========================================================================== */
})($_EXTKEY);
