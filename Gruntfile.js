module.exports = function( grunt ) {

	// Project configuration.
	grunt.initConfig({
		msgInitMerge: {
			theme: {
				src: ['Avada/Avada.pot'],
				options: {
					locales: ['af', 'ak', 'sq', 'arq', 'am', 'ar', 'hy', 'rup_MK', 'frp', 'as', 'az', 'az_TR', 'bcc', 'ba', 'eu', 'bel', 'bn_BD', 'bs_BA', 'bre', 'bg_BG', 'ca', 'bal', 'ceb', 'zh_CN', 'zh_HK', 'zh_TW', 'co', 'hr', 'cs_CZ', 'da_DK', 'dv', 'nl_NL', 'nl_BE', 'dzo', 'en_US', 'en_AU', 'en_CA', 'en_NZ', 'en_ZA', 'en_GB', 'eo', 'et', 'fo', 'fi', 'fr_BE', 'fr_CA', 'fr_FR', 'fy', 'fur', 'fuc', 'gl_ES', 'ka_GE', 'de_DE', 'de_CH', 'el', 'kal', 'gn', 'gu', 'haw_US', 'haz', 'he_IL', 'hi_IN', 'hu_HU', 'is_IS', 'ido', 'id_ID', 'ga', 'it_IT', 'ja', 'jv_ID', 'kab', 'kn', 'kk', 'km', 'kin', 'ky_KY', 'ko_KR', 'ckb', 'lo', 'lv', 'li', 'lin', 'lt_LT', 'lb_LU', 'mk_MK', 'mg_MG', 'ms_MY', 'ml_IN', 'mri', 'mr', 'xmf', 'mn', 'me_ME', 'ary', 'my_MM', 'ne_NP', 'nb_NO', 'nn_NO', 'oci', 'ory', 'os', 'ps', 'fa_IR', 'fa_AF', 'pl_PL', 'pt_BR', 'pt_PT', 'pa_IN', 'rhg', 'ro_RO', 'roh', 'ru_RU', 'rue', 'sah', 'sa_IN', 'srd', 'gd', 'sr_RS', 'szl', 'snd', 'si_LK', 'sk_SK', 'sl_SI', 'so_SO', 'azb', 'es_AR', 'es_CL', 'es_CO', 'es_GT', 'es_MX', 'es_PE', 'es_PR', 'es_ES', 'es_VE', 'su_ID', 'sw', 'sv_SE', 'gsw', 'tl', 'tah', 'tg', 'tzm', 'ta_IN', 'ta_LK', 'tt_RU', 'te', 'th', 'bo', 'tir', 'tr_TR', 'tuk', 'twd', 'ug_CN', 'uk', 'ur', 'uz_UZ', 'vi', 'wa', 'cy', 'yor'],
					poFilesPath: 'Avada/Avada-<%= locale%>.po',
					msgInit: {
						cmd: 'msginit',
						opts: {}
					},
					msgMerge: {
						cmd: 'msgmerge',
						opts: {
							'no-fuzzy-matching': true,
							'backup': 'none'
						}
					}
				}
			},
			plugin: {
				src: ['fusion-core/fusion-core.pot'],
				options: {
					locales: ['af', 'ak', 'sq', 'arq', 'am', 'ar', 'hy', 'rup_MK', 'frp', 'as', 'az', 'az_TR', 'bcc', 'ba', 'eu', 'bel', 'bn_BD', 'bs_BA', 'bre', 'bg_BG', 'ca', 'bal', 'ceb', 'zh_CN', 'zh_HK', 'zh_TW', 'co', 'hr', 'cs_CZ', 'da_DK', 'dv', 'nl_NL', 'nl_BE', 'dzo', 'en_US', 'en_AU', 'en_CA', 'en_NZ', 'en_ZA', 'en_GB', 'eo', 'et', 'fo', 'fi', 'fr_BE', 'fr_CA', 'fr_FR', 'fy', 'fur', 'fuc', 'gl_ES', 'ka_GE', 'de_DE', 'de_CH', 'el', 'kal', 'gn', 'gu', 'haw_US', 'haz', 'he_IL', 'hi_IN', 'hu_HU', 'is_IS', 'ido', 'id_ID', 'ga', 'it_IT', 'ja', 'jv_ID', 'kab', 'kn', 'kk', 'km', 'kin', 'ky_KY', 'ko_KR', 'ckb', 'lo', 'lv', 'li', 'lin', 'lt_LT', 'lb_LU', 'mk_MK', 'mg_MG', 'ms_MY', 'ml_IN', 'mri', 'mr', 'xmf', 'mn', 'me_ME', 'ary', 'my_MM', 'ne_NP', 'nb_NO', 'nn_NO', 'oci', 'ory', 'os', 'ps', 'fa_IR', 'fa_AF', 'pl_PL', 'pt_BR', 'pt_PT', 'pa_IN', 'rhg', 'ro_RO', 'roh', 'ru_RU', 'rue', 'sah', 'sa_IN', 'srd', 'gd', 'sr_RS', 'szl', 'snd', 'si_LK', 'sk_SK', 'sl_SI', 'so_SO', 'azb', 'es_AR', 'es_CL', 'es_CO', 'es_GT', 'es_MX', 'es_PE', 'es_PR', 'es_ES', 'es_VE', 'su_ID', 'sw', 'sv_SE', 'gsw', 'tl', 'tah', 'tg', 'tzm', 'ta_IN', 'ta_LK', 'tt_RU', 'te', 'th', 'bo', 'tir', 'tr_TR', 'tuk', 'twd', 'ug_CN', 'uk', 'ur', 'uz_UZ', 'vi', 'wa', 'cy', 'yor'],
					poFilesPath: 'fusion-core/fusion-core-<%= locale%>.po',
					msgInit: {
						cmd: 'msginit',
						opts: {}
					},
					msgMerge: {
						cmd: 'msgmerge',
						opts: {
							'no-fuzzy-matching': true,
							'backup': 'none'
						}
					}
				}
			},
			plugin2: {
				src: ['fusion-builder/fusion-builder.pot'],
				options: {
					locales: ['af', 'ak', 'sq', 'arq', 'am', 'ar', 'hy', 'rup_MK', 'frp', 'as', 'az', 'az_TR', 'bcc', 'ba', 'eu', 'bel', 'bn_BD', 'bs_BA', 'bre', 'bg_BG', 'ca', 'bal', 'ceb', 'zh_CN', 'zh_HK', 'zh_TW', 'co', 'hr', 'cs_CZ', 'da_DK', 'dv', 'nl_NL', 'nl_BE', 'dzo', 'en_US', 'en_AU', 'en_CA', 'en_NZ', 'en_ZA', 'en_GB', 'eo', 'et', 'fo', 'fi', 'fr_BE', 'fr_CA', 'fr_FR', 'fy', 'fur', 'fuc', 'gl_ES', 'ka_GE', 'de_DE', 'de_CH', 'el', 'kal', 'gn', 'gu', 'haw_US', 'haz', 'he_IL', 'hi_IN', 'hu_HU', 'is_IS', 'ido', 'id_ID', 'ga', 'it_IT', 'ja', 'jv_ID', 'kab', 'kn', 'kk', 'km', 'kin', 'ky_KY', 'ko_KR', 'ckb', 'lo', 'lv', 'li', 'lin', 'lt_LT', 'lb_LU', 'mk_MK', 'mg_MG', 'ms_MY', 'ml_IN', 'mri', 'mr', 'xmf', 'mn', 'me_ME', 'ary', 'my_MM', 'ne_NP', 'nb_NO', 'nn_NO', 'oci', 'ory', 'os', 'ps', 'fa_IR', 'fa_AF', 'pl_PL', 'pt_BR', 'pt_PT', 'pa_IN', 'rhg', 'ro_RO', 'roh', 'ru_RU', 'rue', 'sah', 'sa_IN', 'srd', 'gd', 'sr_RS', 'szl', 'snd', 'si_LK', 'sk_SK', 'sl_SI', 'so_SO', 'azb', 'es_AR', 'es_CL', 'es_CO', 'es_GT', 'es_MX', 'es_PE', 'es_PR', 'es_ES', 'es_VE', 'su_ID', 'sw', 'sv_SE', 'gsw', 'tl', 'tah', 'tg', 'tzm', 'ta_IN', 'ta_LK', 'tt_RU', 'te', 'th', 'bo', 'tir', 'tr_TR', 'tuk', 'twd', 'ug_CN', 'uk', 'ur', 'uz_UZ', 'vi', 'wa', 'cy', 'yor'],
					poFilesPath: 'fusion-builder/fusion-builder-<%= locale%>.po',
					msgInit: {
						cmd: 'msginit',
						opts: {}
					},
					msgMerge: {
						cmd: 'msgmerge',
						opts: {
							'no-fuzzy-matching': true,
							'backup': 'none'
						}
					}
				}
			}
		},
		potomo: {
			theme: {
				options: { poDel: false },
				files: [{
					expand: true,
					cwd: 'Avada',
					src: ['*.po'],
					dest: 'Avada',
					ext: '.mo',
					nonull: true
				}]
			},
			plugin: {
				options: { poDel: false },
				files: [{
					expand: true,
					cwd: 'fusion-core',
					src: ['*.po'],
					dest: 'fusion-core',
					ext: '.mo',
					nonull: true
				}]
			},
			plugin2: {
				options: { poDel: false },
				files: [{
					expand: true,
					cwd: 'fusion-builder',
					src: ['*.po'],
					dest: 'fusion-builder',
					ext: '.mo',
					nonull: true
				}]
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-potomo' );
	grunt.loadNpmTasks( 'grunt-msg-init-merge' );

	grunt.registerTask( 'default', ['msgInitMerge', 'potomo'] );
};
