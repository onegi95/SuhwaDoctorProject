(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{479:function(t,n,e){t.exports=e.p+"img/micON.b946bad.png"},480:function(t,n,e){t.exports=e.p+"img/micUN.54b08da.png"},607:function(t,n,e){"use strict";e.r(n);e(17),e(16),e(67),e(51);var r={name:"new_stt",data:function(){return{runtimeTranscription_:"",transcription_:[],lang_:"ko-KR",status:0}},methods:{startSpeechToTxt:function(){var t=this;this.status=1,window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;var n=new window.SpeechRecognition;n.lang=this.lang_,n.interimResults=!0,n.addEventListener("result",(function(n){var text=Array.from(n.results).map((function(t){return t[0]})).map((function(t){return t.transcript})).join("");t.runtimeTranscription_=text})),n.addEventListener("end",(function(){t.transcription_.push(t.runtimeTranscription_),t.runtimeTranscription_="",n.stop(),t.$emit("sttData",t.transcription_),t.status=0})),n.start()}}},c=e(60),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"voice"},[r("div",{staticClass:"icon-btn  speech-to-txt",staticStyle:{},on:{click:t.startSpeechToTxt}},[1==this.status?r("img",{staticStyle:{},attrs:{src:e(479),alt:"",width:"30px",height:"30px"}}):t._e(),t._v(" "),0==this.status?r("img",{staticStyle:{},attrs:{src:e(480),alt:"",width:"30px",height:"30px"}}):t._e()])])}),[],!1,null,null,null);n.default=component.exports}}]);