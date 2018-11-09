# vimrc

```vim
set laststatus=2	      " airline plugin"
set nocompatible          " be iMproved, required
filetype off                  

"include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'scrooloose/syntastic'
Plugin 'tpope/vim-fugitive'

"airline
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
Plugin 'rstacruz/sparkup', {'rtp': 'vim'}
Plugin 'flazz/vim-colorschemes'
Plugin 'Valloric/YouCompleteMe'
Plugin 'jiangmiao/auto-pairs'

"snipmate
Plugin 'MarcWeber/vim-addon-mw-utils'
Plugin 'tomtom/tlib_vim'


"Javascript
Plugin 'pangloss/vim-javascript'

"Plugin 'nathanaelkane/vim-indent-guides'   "Indent Guides

call vundle#end()   
filetype plugin indent on 

"Set
syntax on
set ts=8
set sw=4
set sts=4
set smartindent
set cindent
set ruler
set showmatch
set autoindent
set number
set encoding=utf-8
set autoread
set hlsearch
set showmatch
set title
set bs=indent,eol,start
set mps+=<:>
set mouse=a

"vim color
colorscheme blackboard

set t_Co=256
let g:airline_powerline_fonts = 1
let g:airline_theme='dark'
let g:ycm_min_num_of_chars_for_completion = 1
let g:ycm_auto_trigger = 1
let g:Javascript_plugin_jsdoc = 1

"line highlight
highlight CursorLine cterm=NONE ctermbg=NONE ctermfg=NONE guibg=NONE guifg=NONE
set cursorline

"end line
```

