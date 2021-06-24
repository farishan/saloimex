/* eslint-disable */

/* WORK IN PROGRESS */

/**
 * Game Setup
 */
const $game__root = el('root');
let gamedata = { name: 'joni saloimex' };

/**
 * Lib Setup
 */
/* Saloimex */
const SALOIMEX_KEY = 'saloimex_test_ui';
const saloimex = new Saloimex(SALOIMEX_KEY);
/* SaloimexUI */
const $SUI__root = new SaloimexUI(gamedata);

/**
 * UI Setup
 */
$game__root.appendChild($SUI__root);

/**
 * Helpers
 */
function el(id){
  return document.getElementById(id);
};
