<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "template".
 ***************************************************************/

$EM_CONF[$_EXTKEY] = [
    'title'            => 'TYPO3 Template',
    'description'      => 'Template extension for TYPO3',
    'category'         => 'misc',
    'version'          => '1.0',
    'state'            => 'stable',
    'uploadfolder'     => 0,
    'createDirs'       => '',
    'clearcacheonload' => 1,
    'author'           => 'Christoph Bessei',
    'author_email'     => 'typo3-ext@bessei-it.eu',
    'author_company'   => 'Bessei-IT',
    // http://insight.helhum.io/post/130876393595/how-to-configure-class-loading-for-extensions-in
    'autoload'         => [
        'psr-4' => ['BIT\\Template\\' => 'Classes'],
    ],
    'constraints'      => [
        'depends'   => [
            'typo3'   => '8.7.0-8.7.99',
            'extbase' => '',
            'fluid'   => '',
            'utility' => '',
        ],
        'conflicts' => [],
        'suggests'  => [
            'realurl' => '',
        ],

    ],
];
