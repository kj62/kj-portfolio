$(document).ready(function(){const a=document.getElementById("css-skills-chart").getContext("2d"),b=document.getElementById("html-skills-chart").getContext("2d"),c=document.getElementById("js-skills-chart").getContext("2d"),d=document.getElementById("angular-skills-chart").getContext("2d"),e=document.getElementById("vue-skills-chart").getContext("2d"),f=document.getElementById("ui-rwd-skills-chart").getContext("2d"),g=document.getElementById("gulp-npm-skills-chart").getContext("2d"),h=document.getElementById("git-skills-chart").getContext("2d");jobSkillsChartHandler(a,80,"CSS & Sass"),jobSkillsChartHandler(c,65,"JavaScript & jQuery"),jobSkillsChartHandler(b,70,"HTML"),jobSkillsChartHandler(d,75,"Angular + UI libs"),jobSkillsChartHandler(e,55,"VueJS"),jobSkillsChartHandler(f,75,"UI and RWD"),jobSkillsChartHandler(g,70,"Gulp & npm"),jobSkillsChartHandler(h,90,"Git (TortoiseGit)")});function jobSkillsChartHandler(a,b,c){new Chart(a,{type:"doughnut",data:{labels:[c+" - "+b+"%"],datasets:[{backgroundColor:["rgba(255, 121, 26, 1)","rgba(255, 255, 255, 0)"],hoverBackgroundColor:["rgba(255, 121, 26, 1)"],hoverBorderColor:["rgba(255, 121, 26, 1)","#FFF"],data:[b,100-b]}]},options:{legend:{labels:{fontColor:"#FFF",fontSize:20},onClick:a=>a.stopPropagation()},cutoutPercentage:70,tooltips:{filter:function(a,b){var c=b.labels[a.index];if(c)return a}}}})}