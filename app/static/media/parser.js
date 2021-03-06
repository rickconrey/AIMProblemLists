/* Jison generated parser */
var grammar = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"file":3,"skip":4,"document":5,"EOF":6,"section":7,"BEGIN_DOCUMENT":8,"pl_meta":9,"MAKETITLE":10,"section_list":11,"bibliography":12,"END_DOCUMENT":13,"title":14,"author":15,"urlstub":16,"version":17,"VERSION":18,"name":19,"URLSTUB":20,"TITLE":21,"AUTHOR":22,"tex_braces":23,"TEX":24,"WHITESPACE":25,"\\\\":26,"OPEN_BRACE":27,"CLOSE_BRACE":28,"SECTION":29,"problem_block_list":30,"problem_block":31,"BEGIN_PROBLEM_BLOCK":32,"problem_block_name":33,"problem":34,"remark_list":35,"END_PROBLEM_BLOCK":36,"BEGIN_PROB":37,"by":38,"END_PROB":39,"NAME":40,"BEGIN_PROBLEM":41,"label":42,"END_PROBLEM":43,"remark":44,"BEGIN_REMARK":45,"END_REMARK":46,"REMARK":47,"whitespace":48,"LABEL":49,"BY":50,"BEGIN_BIBLIOGRAPHY":51,"bibitem_list":52,"END_BIBLIOGRAPHY":53,"BIBITEM":54,"skip_item":55,"COMMENT":56,"$accept":0,"$end":1},
terminals_: {"2":"error","6":"EOF","8":"BEGIN_DOCUMENT","10":"MAKETITLE","13":"END_DOCUMENT","18":"VERSION","20":"URLSTUB","21":"TITLE","22":"AUTHOR","24":"TEX","25":"WHITESPACE","26":"\\\\","27":"OPEN_BRACE","28":"CLOSE_BRACE","29":"SECTION","32":"BEGIN_PROBLEM_BLOCK","36":"END_PROBLEM_BLOCK","37":"BEGIN_PROB","39":"END_PROB","40":"NAME","41":"BEGIN_PROBLEM","43":"END_PROBLEM","45":"BEGIN_REMARK","46":"END_REMARK","47":"REMARK","49":"LABEL","50":"BY","51":"BEGIN_BIBLIOGRAPHY","53":"END_BIBLIOGRAPHY","54":"BIBITEM","56":"COMMENT"},
productions_: [0,[3,4],[3,2],[5,9],[9,2],[9,2],[9,2],[9,2],[9,2],[9,1],[17,2],[16,2],[14,2],[15,2],[23,2],[23,2],[23,2],[23,4],[23,0],[19,3],[11,1],[11,2],[7,4],[30,3],[30,0],[31,9],[31,4],[33,2],[33,0],[34,5],[35,3],[35,0],[44,4],[44,2],[42,4],[42,1],[38,4],[38,1],[12,4],[12,0],[52,4],[52,0],[48,1],[48,0],[4,2],[4,0],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,0]],
performAction: function anonymous(yytext,yyleng,yylineno,yy) {

var $$ = arguments[5],$0=arguments[5].length;
switch(arguments[4]) {
case 1: /* require('sys').puts(JSON.stringify($$[$0-4+2-1], null, 2)); */ return $$[$0-4+2-1]; 
break;
case 2: return $$[$0-2+1-1]; 
break;
case 3: this.$ = $$[$0-9+2-1]; this.$.intro = $$[$0-9+4-1].join(''); this.$.sections = $$[$0-9+5-1]; this.$.bibliography = $$[$0-9+7-1]; 
break;
case 4: this.$ = $$[$0-2+2-1]; 
break;
case 5: this.$ = $$[$0-2+2-1]; this.$.title = $$[$0-2+1-1]; 
break;
case 6: this.$ = $$[$0-2+2-1]; this.$.author = $$[$0-2+1-1]; 
break;
case 7: this.$ = $$[$0-2+2-1]; this.$.name = $$[$0-2+1-1]; 
break;
case 8: this.$ = $$[$0-2+2-1]; this.$.version = $$[$0-2+1-1]; 
break;
case 9: this.$ = {}; 
break;
case 10: this.$ = $$[$0-2+2-1]; 
break;
case 11: this.$ = $$[$0-2+2-1]; 
break;
case 12: this.$ = $$[$0-2+2-1]; 
break;
case 13: this.$ = $$[$0-2+2-1].replace(/^Edited by /i, ''); 
break;
case 14: this.$ = [$$[$0-2+1-1], $$[$0-2+2-1].join('')]; 
break;
case 15: this.$ = [$$[$0-2+1-1], $$[$0-2+2-1].join('')]; 
break;
case 16: this.$ = [$$[$0-2+1-1], $$[$0-2+2-1].join('')]; 
break;
case 17: this.$ = [$$[$0-4+1-1], $$[$0-4+2-1].join(''), $$[$0-4+3-1], $$[$0-4+4-1].join('')]; 
break;
case 18: this.$ = []; 
break;
case 19: this.$ = $$[$0-3+2-1].join(''); 
break;
case 20: this.$ = [$$[$0-1+1-1]]; 
break;
case 21: this.$ = $$[$0-2+1-1]; $$[$0-2+1-1].push($$[$0-2+2-1]); 
break;
case 22: this.$ = {title: $$[$0-4+2-1], intro: $$[$0-4+3-1].join(''), problemblocks: $$[$0-4+4-1]}; 
break;
case 23: this.$ = $$[$0-3+1-1]; this.$.push($$[$0-3+2-1]); 
break;
case 24: this.$ = []; 
break;
case 25: this.$ = {
         name: $$[$0-9+3-1] || null,
         intro: $$[$0-9+2-1].concat($$[$0-9+4-1]).join(''),
         problem: $$[$0-9+5-1],
         distremark: $$[$0-9+6-1].join(''),
         comments: $$[$0-9+7-1]
       };
    
break;
case 26: this.$ = {
         name: "",
         "problem": {
           tag: $$[$0-4+1-1].replace(/^\\begin\{(.+)\}.*$/, '$' + '1'),
           number: $$[$0-4+1-1].replace(/.*\}\[(.+)\]/, '$' + '1'),
           body: $$[$0-4+3-1].join(''),
           by: $$[$0-4+2-1]
         }
       };
    
break;
case 27: this.$ = $$[$0-2+2-1]; 
break;
case 29: this.$ = {"by": $$[$0-5+3-1], "tag": $$[$0-5+1-1].replace(/^\\begin\{(.+)\}.*$/, '$' + '1'), "number": $$[$0-5+1-1].replace(/.*\}\[(.+)\]/, '$' + '1'), "body": $$[$0-5+4-1].join('')}; 
break;
case 30: this.$ = $$[$0-3+1-1]; this.$.push($$[$0-3+2-1]); 
break;
case 31: this.$ = []; 
break;
case 32: this.$ = {"by": $$[$0-4+2-1], "remark": $$[$0-4+3-1].join('')}; 
break;
case 33: this.$ = {remark: $$[$0-2+2-1]}; 
break;
case 34: this.$ = $$[$0-4+4-1]; 
break;
case 35: this.$ = ''; 
break;
case 36: this.$ = $$[$0-4+4-1]; 
break;
case 37: this.$ = null; 
break;
case 38: this.$ = $$[$0-4+3-1]; 
break;
case 39: this.$ = null; 
break;
case 40: this.$ = $$[$0-4+1-1]; this.$.push({"ref": $$[$0-4+3-1], "content": $$[$0-4+4-1].join('')}); 
break;
case 41: this.$ = []; 
break;
case 44: this.$ = $$[$0-2+1-1]; this.$.push($$[$0-2+2-1]); 
break;
case 45: this.$ = []; 
break;
}
},
table: [{"3":1,"4":2,"7":3,"8":[2,45],"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"29":[1,4],"49":[2,45],"50":[2,45],"56":[2,45]},{"1":[3]},{"5":5,"8":[1,7],"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"49":[1,15],"50":[1,14],"55":6,"56":[1,13]},{"6":[1,16]},{"19":17,"27":[1,18]},{"4":19,"6":[2,45],"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"6":[2,44],"8":[2,44],"10":[2,44],"13":[2,44],"18":[2,44],"20":[2,44],"21":[2,44],"22":[2,44],"24":[2,44],"25":[2,44],"26":[2,44],"27":[2,44],"28":[2,44],"29":[2,44],"32":[2,44],"36":[2,44],"37":[2,44],"39":[2,44],"40":[2,44],"41":[2,44],"43":[2,44],"45":[2,44],"46":[2,44],"47":[2,44],"49":[2,44],"50":[2,44],"51":[2,44],"53":[2,44],"54":[2,44],"56":[2,44]},{"4":21,"9":20,"10":[2,45],"14":22,"15":23,"16":24,"17":25,"18":[1,29],"20":[1,28],"21":[1,26],"22":[1,27],"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"6":[2,46],"8":[2,46],"10":[2,46],"13":[2,46],"18":[2,46],"20":[2,46],"21":[2,46],"22":[2,46],"24":[2,46],"25":[2,46],"26":[2,46],"27":[2,46],"28":[2,46],"29":[2,46],"32":[2,46],"36":[2,46],"37":[2,46],"39":[2,46],"40":[2,46],"41":[2,46],"43":[2,46],"45":[2,46],"46":[2,46],"47":[2,46],"49":[2,46],"50":[2,46],"51":[2,46],"53":[2,46],"54":[2,46],"56":[2,46]},{"6":[2,47],"8":[2,47],"10":[2,47],"13":[2,47],"18":[2,47],"20":[2,47],"21":[2,47],"22":[2,47],"24":[2,47],"25":[2,47],"26":[2,47],"27":[2,47],"28":[2,47],"29":[2,47],"32":[2,47],"36":[2,47],"37":[2,47],"39":[2,47],"40":[2,47],"41":[2,47],"43":[2,47],"45":[2,47],"46":[2,47],"47":[2,47],"49":[2,47],"50":[2,47],"51":[2,47],"53":[2,47],"54":[2,47],"56":[2,47]},{"6":[2,48],"8":[2,48],"10":[2,48],"13":[2,48],"18":[2,48],"20":[2,48],"21":[2,48],"22":[2,48],"24":[2,48],"25":[2,48],"26":[2,48],"27":[2,48],"28":[2,48],"29":[2,48],"32":[2,48],"36":[2,48],"37":[2,48],"39":[2,48],"40":[2,48],"41":[2,48],"43":[2,48],"45":[2,48],"46":[2,48],"47":[2,48],"49":[2,48],"50":[2,48],"51":[2,48],"53":[2,48],"54":[2,48],"56":[2,48]},{"6":[2,49],"8":[2,49],"10":[2,49],"13":[2,49],"18":[2,49],"20":[2,49],"21":[2,49],"22":[2,49],"24":[2,49],"25":[2,49],"26":[2,49],"27":[2,49],"28":[2,49],"29":[2,49],"32":[2,49],"36":[2,49],"37":[2,49],"39":[2,49],"40":[2,49],"41":[2,49],"43":[2,49],"45":[2,49],"46":[2,49],"47":[2,49],"49":[2,49],"50":[2,49],"51":[2,49],"53":[2,49],"54":[2,49],"56":[2,49]},{"6":[2,50],"8":[2,50],"10":[2,50],"13":[2,50],"18":[2,50],"20":[2,50],"21":[2,50],"22":[2,50],"24":[2,50],"25":[2,50],"26":[2,50],"27":[2,50],"28":[2,50],"29":[2,50],"32":[2,50],"36":[2,50],"37":[2,50],"39":[2,50],"40":[2,50],"41":[2,50],"43":[2,50],"45":[2,50],"46":[2,50],"47":[2,50],"49":[2,50],"50":[2,50],"51":[2,50],"53":[2,50],"54":[2,50],"56":[2,50]},{"6":[2,51],"8":[2,51],"10":[2,51],"13":[2,51],"18":[2,51],"20":[2,51],"21":[2,51],"22":[2,51],"24":[2,51],"25":[2,51],"26":[2,51],"27":[2,51],"28":[2,51],"29":[2,51],"32":[2,51],"36":[2,51],"37":[2,51],"39":[2,51],"40":[2,51],"41":[2,51],"43":[2,51],"45":[2,51],"46":[2,51],"47":[2,51],"49":[2,51],"50":[2,51],"51":[2,51],"53":[2,51],"54":[2,51],"56":[2,51]},{"6":[2,52],"8":[2,52],"10":[2,52],"13":[2,52],"18":[2,52],"20":[2,52],"21":[2,52],"22":[2,52],"24":[2,52],"25":[2,52],"26":[2,52],"27":[2,52],"28":[2,52],"29":[2,52],"32":[2,52],"36":[2,52],"37":[2,52],"39":[2,52],"40":[2,52],"41":[2,52],"43":[2,52],"45":[2,52],"46":[2,52],"47":[2,52],"49":[2,52],"50":[2,52],"51":[2,52],"53":[2,52],"54":[2,52],"56":[2,52]},{"6":[2,53],"8":[2,53],"10":[2,53],"13":[2,53],"18":[2,53],"20":[2,53],"21":[2,53],"22":[2,53],"24":[2,53],"25":[2,53],"26":[2,53],"27":[2,53],"28":[2,53],"29":[2,53],"32":[2,53],"36":[2,53],"37":[2,53],"39":[2,53],"40":[2,53],"41":[2,53],"43":[2,53],"45":[2,53],"46":[2,53],"47":[2,53],"49":[2,53],"50":[2,53],"51":[2,53],"53":[2,53],"54":[2,53],"56":[2,53]},{"1":[2,2]},{"4":30,"6":[2,45],"13":[2,45],"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"29":[2,45],"32":[2,45],"37":[2,45],"49":[2,45],"50":[2,45],"51":[2,45],"56":[2,45]},{"23":31,"24":[1,32],"25":[1,33],"26":[1,34],"27":[1,35],"28":[2,18]},{"6":[1,36],"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"49":[1,15],"50":[1,14],"55":6,"56":[1,13]},{"10":[1,37]},{"4":21,"9":38,"10":[2,9],"14":22,"15":23,"16":24,"17":25,"18":[1,29],"20":[1,28],"21":[1,26],"22":[1,27],"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"49":[1,15],"50":[1,14],"55":6,"56":[1,13]},{"4":21,"9":39,"10":[2,45],"14":22,"15":23,"16":24,"17":25,"18":[1,29],"20":[1,28],"21":[1,26],"22":[1,27],"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"4":21,"9":40,"10":[2,45],"14":22,"15":23,"16":24,"17":25,"18":[1,29],"20":[1,28],"21":[1,26],"22":[1,27],"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"4":21,"9":41,"10":[2,45],"14":22,"15":23,"16":24,"17":25,"18":[1,29],"20":[1,28],"21":[1,26],"22":[1,27],"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"4":21,"9":42,"10":[2,45],"14":22,"15":23,"16":24,"17":25,"18":[1,29],"20":[1,28],"21":[1,26],"22":[1,27],"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"19":43,"27":[1,18]},{"19":44,"27":[1,18]},{"19":45,"27":[1,18]},{"19":46,"27":[1,18]},{"6":[2,24],"13":[2,24],"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"29":[2,24],"30":47,"32":[2,24],"37":[2,24],"49":[1,15],"50":[1,14],"51":[2,24],"55":6,"56":[1,13]},{"28":[1,48]},{"23":49,"24":[1,32],"25":[1,33],"26":[1,34],"27":[1,35],"28":[2,18]},{"23":50,"24":[1,32],"25":[1,33],"26":[1,34],"27":[1,35],"28":[2,18]},{"23":51,"24":[1,32],"25":[1,33],"26":[1,34],"27":[1,35],"28":[2,18]},{"23":52,"24":[1,32],"25":[1,33],"26":[1,34],"27":[1,35],"28":[2,18]},{"1":[2,1]},{"4":53,"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"29":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"10":[2,4]},{"10":[2,5]},{"10":[2,6]},{"10":[2,7]},{"10":[2,8]},{"10":[2,12],"18":[2,12],"20":[2,12],"21":[2,12],"22":[2,12],"24":[2,12],"25":[2,12],"26":[2,12],"27":[2,12],"28":[2,12],"49":[2,12],"50":[2,12],"56":[2,12]},{"10":[2,13],"18":[2,13],"20":[2,13],"21":[2,13],"22":[2,13],"24":[2,13],"25":[2,13],"26":[2,13],"27":[2,13],"28":[2,13],"49":[2,13],"50":[2,13],"56":[2,13]},{"10":[2,11],"18":[2,11],"20":[2,11],"21":[2,11],"22":[2,11],"24":[2,11],"25":[2,11],"26":[2,11],"27":[2,11],"28":[2,11],"49":[2,11],"50":[2,11],"56":[2,11]},{"10":[2,10],"18":[2,10],"20":[2,10],"21":[2,10],"22":[2,10],"24":[2,10],"25":[2,10],"26":[2,10],"27":[2,10],"28":[2,10],"49":[2,10],"50":[2,10],"56":[2,10]},{"6":[2,22],"13":[2,22],"24":[2,22],"25":[2,22],"26":[2,22],"27":[2,22],"28":[2,22],"29":[2,22],"31":54,"32":[1,55],"37":[1,56],"49":[2,22],"50":[2,22],"51":[2,22],"56":[2,22]},{"6":[2,19],"10":[2,19],"13":[2,19],"18":[2,19],"20":[2,19],"21":[2,19],"22":[2,19],"24":[2,19],"25":[2,19],"26":[2,19],"27":[2,19],"28":[2,19],"29":[2,19],"32":[2,19],"36":[2,19],"37":[2,19],"39":[2,19],"41":[2,19],"43":[2,19],"45":[2,19],"46":[2,19],"47":[2,19],"49":[2,19],"50":[2,19],"51":[2,19],"53":[2,19],"54":[2,19],"56":[2,19]},{"28":[2,14]},{"28":[2,15]},{"28":[2,16]},{"28":[1,57]},{"7":59,"11":58,"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"29":[1,4],"49":[1,15],"50":[1,14],"55":6,"56":[1,13]},{"4":60,"6":[2,45],"13":[2,45],"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"29":[2,45],"32":[2,45],"37":[2,45],"49":[2,45],"50":[2,45],"51":[2,45],"56":[2,45]},{"4":61,"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"40":[2,45],"41":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"24":[2,43],"25":[1,64],"26":[2,43],"27":[2,43],"28":[2,43],"38":62,"39":[2,43],"48":63,"49":[2,43],"50":[2,43],"56":[2,43]},{"23":65,"24":[1,32],"25":[1,33],"26":[1,34],"27":[1,35],"28":[2,18]},{"4":66,"7":67,"13":[2,45],"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"29":[1,4],"49":[2,45],"50":[2,45],"51":[2,45],"56":[2,45]},{"13":[2,20],"24":[2,20],"25":[2,20],"26":[2,20],"27":[2,20],"28":[2,20],"29":[2,20],"49":[2,20],"50":[2,20],"51":[2,20],"56":[2,20]},{"6":[2,23],"13":[2,23],"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"29":[2,23],"32":[2,23],"37":[2,23],"49":[1,15],"50":[1,14],"51":[2,23],"55":6,"56":[1,13]},{"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"33":68,"40":[1,69],"41":[2,28],"49":[1,15],"50":[1,14],"55":6,"56":[1,13]},{"4":70,"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"39":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"24":[2,37],"25":[2,37],"26":[2,37],"27":[2,37],"28":[2,37],"39":[2,37],"43":[2,37],"46":[2,37],"49":[2,37],"50":[1,71],"56":[2,37]},{"24":[2,42],"25":[2,42],"26":[2,42],"27":[2,42],"28":[2,42],"39":[2,42],"43":[2,42],"46":[2,42],"49":[2,42],"50":[2,42],"56":[2,42]},{"28":[2,17]},{"12":72,"13":[2,39],"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"49":[1,15],"50":[1,14],"51":[1,73],"55":6,"56":[1,13]},{"13":[2,21],"24":[2,21],"25":[2,21],"26":[2,21],"27":[2,21],"28":[2,21],"29":[2,21],"49":[2,21],"50":[2,21],"51":[2,21],"56":[2,21]},{"4":74,"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"41":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"19":75,"27":[1,18]},{"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"39":[1,76],"49":[1,15],"50":[1,14],"55":6,"56":[1,13]},{"25":[1,64],"27":[2,43],"48":77},{"4":78,"13":[2,45],"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"4":79,"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"49":[2,45],"50":[2,45],"53":[2,45],"54":[2,45],"56":[2,45]},{"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"34":80,"41":[1,81],"49":[1,15],"50":[1,14],"55":6,"56":[1,13]},{"24":[2,27],"25":[2,27],"26":[2,27],"27":[2,27],"28":[2,27],"41":[2,27],"49":[2,27],"50":[2,27],"56":[2,27]},{"6":[2,26],"13":[2,26],"24":[2,26],"25":[2,26],"26":[2,26],"27":[2,26],"28":[2,26],"29":[2,26],"32":[2,26],"37":[2,26],"49":[2,26],"50":[2,26],"51":[2,26],"56":[2,26]},{"19":82,"27":[1,18]},{"13":[1,83],"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"49":[1,15],"50":[1,14],"55":6,"56":[1,13]},{"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"49":[1,15],"50":[1,14],"52":84,"53":[2,41],"54":[2,41],"55":6,"56":[1,13]},{"4":85,"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"36":[2,45],"45":[2,45],"47":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"24":[2,43],"25":[1,64],"26":[2,43],"27":[2,43],"28":[2,43],"42":86,"43":[2,43],"48":87,"49":[2,43],"50":[2,43],"56":[2,43]},{"24":[2,36],"25":[2,36],"26":[2,36],"27":[2,36],"28":[2,36],"39":[2,36],"43":[2,36],"46":[2,36],"49":[2,36],"50":[2,36],"56":[2,36]},{"6":[2,3],"24":[2,3],"25":[2,3],"26":[2,3],"27":[2,3],"28":[2,3],"49":[2,3],"50":[2,3],"56":[2,3]},{"53":[1,88],"54":[1,89]},{"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"35":90,"36":[2,31],"45":[2,31],"47":[2,31],"49":[1,15],"50":[1,14],"55":6,"56":[1,13]},{"24":[2,43],"25":[1,64],"26":[2,43],"27":[2,43],"28":[2,43],"38":91,"43":[2,43],"48":63,"49":[2,43],"50":[2,43],"56":[2,43]},{"24":[2,35],"25":[2,35],"26":[2,35],"27":[2,35],"28":[2,35],"43":[2,35],"49":[1,92],"50":[2,35],"56":[2,35]},{"13":[2,38],"24":[2,38],"25":[2,38],"26":[2,38],"27":[2,38],"28":[2,38],"49":[2,38],"50":[2,38],"56":[2,38]},{"19":93,"27":[1,18]},{"4":94,"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"36":[2,45],"44":95,"45":[1,96],"47":[1,97],"49":[2,45],"50":[2,45],"56":[2,45]},{"4":98,"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"43":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"25":[1,64],"27":[2,43],"48":99},{"4":100,"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"49":[2,45],"50":[2,45],"53":[2,45],"54":[2,45],"56":[2,45]},{"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"36":[1,101],"49":[1,15],"50":[1,14],"55":6,"56":[1,13]},{"4":102,"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"36":[2,45],"45":[2,45],"47":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"24":[2,43],"25":[1,64],"26":[2,43],"27":[2,43],"28":[2,43],"38":103,"46":[2,43],"48":63,"49":[2,43],"50":[2,43],"56":[2,43]},{"19":104,"27":[1,18]},{"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"43":[1,105],"49":[1,15],"50":[1,14],"55":6,"56":[1,13]},{"19":106,"27":[1,18]},{"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"49":[1,15],"50":[1,14],"53":[2,40],"54":[2,40],"55":6,"56":[1,13]},{"6":[2,25],"13":[2,25],"24":[2,25],"25":[2,25],"26":[2,25],"27":[2,25],"28":[2,25],"29":[2,25],"32":[2,25],"37":[2,25],"49":[2,25],"50":[2,25],"51":[2,25],"56":[2,25]},{"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"36":[2,30],"45":[2,30],"47":[2,30],"49":[1,15],"50":[1,14],"55":6,"56":[1,13]},{"4":107,"24":[2,45],"25":[2,45],"26":[2,45],"27":[2,45],"28":[2,45],"46":[2,45],"49":[2,45],"50":[2,45],"56":[2,45]},{"24":[2,33],"25":[2,33],"26":[2,33],"27":[2,33],"28":[2,33],"36":[2,33],"45":[2,33],"47":[2,33],"49":[2,33],"50":[2,33],"56":[2,33]},{"24":[2,29],"25":[2,29],"26":[2,29],"27":[2,29],"28":[2,29],"36":[2,29],"45":[2,29],"47":[2,29],"49":[2,29],"50":[2,29],"56":[2,29]},{"24":[2,34],"25":[2,34],"26":[2,34],"27":[2,34],"28":[2,34],"43":[2,34],"49":[2,34],"50":[2,34],"56":[2,34]},{"24":[1,8],"25":[1,11],"26":[1,12],"27":[1,9],"28":[1,10],"46":[1,108],"49":[1,15],"50":[1,14],"55":6,"56":[1,13]},{"24":[2,32],"25":[2,32],"26":[2,32],"27":[2,32],"28":[2,32],"36":[2,32],"45":[2,32],"47":[2,32],"49":[2,32],"50":[2,32],"56":[2,32]}],
defaultActions: {"16":[2,2],"36":[2,1],"38":[2,4],"39":[2,5],"40":[2,6],"41":[2,7],"42":[2,8],"49":[2,14],"50":[2,15],"51":[2,16],"65":[2,17]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        shifts = 0,
        reductions = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;

    var parseError = this.yy.parseError = typeof this.yy.parseError == 'function' ? this.yy.parseError : this.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
    }

    function checkRecover (st) {
        for (var p in table[st]) if (p == TERROR) {
            return true;
        }
        return false;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    };

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected, recovered = false;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                if (this.lexer.showPosition) {
                    parseError.call(this, 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+'\nExpecting '+expected.join(', '),
                        {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, expected: expected});
                } else {
                    parseError.call(this, 'Parse error on line '+(yylineno+1)+": Unexpected '"+(this.terminals_[symbol] || symbol)+"'",
                        {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, expected: expected});
                }
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw 'Parsing halted.'
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if (checkRecover(state)) {
                    break;
                }
                if (state == 0) {
                    throw 'Parsing halted.'
                }
                popStack(1);
                state = stack[stack.length-1];
            }
            
            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        a = action; 

        switch (a[0]) {

            case 1: // shift
                shifts++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext); // semantic values or junk only, no terminals
                stack.push(a[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                reductions++;

                len = this.productions_[a[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, a[1], vstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                }

                stack.push(this.productions_[a[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept

                this.reductionCount = reductions;
                this.shiftCount = shifts;
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){var lexer = ({EOF:"",
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        for (var i=0;i < this.rules.length; i++) {
            match = this._input.match(this.rules[i]);
            if (match) {
                lines = match[0].match(/\n/g);
                if (lines) this.yylineno += lines.length;
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, i);
                if (token) return token;
                else return;
            }
        }
        if (this._input == this.EOF) {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function () {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    }});
lexer.performAction = function anonymous(yy,yy_) {

switch(arguments[2]) {
case 0:return 56
break;
case 1:return 37
break;
case 2:return 39
break;
case 3:return 41
break;
case 4:return 43
break;
case 5:return 8
break;
case 6:return 13
break;
case 7:return 32
break;
case 8:return 36
break;
case 9:return 45
break;
case 10:return 46
break;
case 11:return 51
break;
case 12:return 53
break;
case 13:return 22
break;
case 14:return 54
break;
case 15:return 50
break;
case 16:return 49
break;
case 17:return 10
break;
case 18:return 40
break;
case 19:return 18
break;
case 20:return 47
break;
case 21:return 29
break;
case 22:return 21
break;
case 23:return 20
break;
case 24:return 27
break;
case 25:return 28
break;
case 26:return 26
break;
case 27:return 25
break;
case 28:return 24
break;
case 29:return 6
break;
}
};
lexer.rules = [/^%.*/,/^\\begin\{(prob|rhequiv)\}(\[\d+(\.\d+)?\])?/,/^\\end\{(prob|rhequiv)\}/,/^\\begin\{(problem|conjecture|rhequivalence)\}(\[\d+(\.\d+)?\])?/,/^\\end\{(problem|conjecture|rhequivalence)\}/,/^\\begin\{document\}/,/^\\end\{document\}/,/^\\begin\{problemblock\}/,/^\\end\{problemblock\}/,/^\\begin\{remark\}/,/^\\end\{remark\}/,/^\\begin\{thebibliography\}/,/^\\end\{thebibliography\}/,/^\\author\b/,/^\\bibitem\b/,/^\\by\b/,/^\\label\b/,/^\\maketitle\b/,/^\\name\b/,/^\\plversion\b/,/^\\remark\*?/,/^\\section\b/,/^\\title\b/,/^\\urlstub\b/,/^\{/,/^\}/,/^\\[^\s{}]*/,/^\s+/,/^[^{}\\\%]+/,/^$/];return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined') {
exports.parser = grammar;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}