//Tombol reset
function reset(){
    for(var i = 0; i < document.getElementsByName("input").length; i++){
        document.getElementsByName("input")[i].value="";
    }
    for(var i = 0; i < document.getElementsByClassName("output").length; i++){
        document.getElementsByClassName("output")[i].innerHTML="";
    }
};

//Input default variable dari tombol default
function defaultNum(){
    document.getElementById("Vin").value=100;
    document.getElementById("Vo").value=19;
    document.getElementById("Io").value=3;
    document.getElementById("duty_cycle").value=40;
    document.getElementById("fs").value=40000;
    document.getElementById("Vf").value=1.5;
    document.getElementById("acInductor").value=1.61;
    document.getElementById("acTransformer").value=1.96;
    document.getElementById("Bmax").value=0.25;
    document.getElementById("splitNumberInductor").value=6;
    document.getElementById("splitNumberPrimaryOfTransformer").value=3;
    document.getElementById("Db_L").value=16;
    document.getElementById("Db_T").value=17;
    document.getElementById("tFall").value=58;
    document.getElementById("efficiency").value=100;
    document.getElementById("delta_ilx").value=20;
    document.getElementById("delta_vo").value=0.1;
    document.getElementById("wire_length").value=5;
    document.getElementById("additional_winding").value=3;
};

//START
function jalan(){
    var vo = document.getElementById("Vo").value;
    var io =document.getElementById("Io").value;
    var vin = document.getElementById("Vin").value;
    var fs = document.getElementById("fs").value;
    var vf = document.getElementById("Vf").value;
    var bMax = document.getElementById("Bmax").value;
    var acInductor = document.getElementById("acInductor").value;
    var j = 4.5;
    var splitL = document.getElementById("splitNumberInductor").value;
    var acTr = document.getElementById("acTransformer").value;

    function project(){
        //Kotak Outputs
        //R Beban
        var rBeban = vo/io;
        document.getElementById("r_beban").innerHTML= rBeban.toFixed(2);

        //Duty Cycle
        var dutyCycle = document.getElementById("duty_cycle").value/100;
        document.getElementById("duty_cycle_out").innerHTML=dutyCycle;

        //Turn Ratio N1:N2
        var TR1 = vo/(vin*dutyCycle);

        // Turn Ratio N2:N1
        var TR2 = (vin*dutyCycle)/vo;
        
        // -------------

        //Kotak Output Snubber
        //Voff
        var voff = vin;
        document.getElementById("Voff").innerHTML=voff;

        //Ion
        var ip = (vo*io)/vin;
        var ion = 0.5*ip;
        document.getElementById("Ion").innerHTML=ion;

        //C Snubber
        var tFall = document.getElementById("tFall").value*0.00000001;
        var cSnubber = ((ion*tFall)/(2*voff))*1000000000;
        document.getElementById("Csnubber").innerHTML=cSnubber;

        //R Snubber
        var T = 1/fs;
        var rSnubber = (dutyCycle*T)/(2*(cSnubber/1000000000));
        document.getElementById("Rsnubber").innerHTML=Math.ceil(rSnubber);

        // -------------

        //Kotak Output Inductor
        var vina = vin/((2*TR2)-(2*vf));
        //Delta ILX
        var deltaILX = (20/100)*io;
        document.getElementById("delta_il_inductor").innerHTML=deltaILX.toFixed(1);
        // L
        var L = (1/deltaILX.toFixed(1))*(vina.toFixed(1)-vo)*(1/(2*fs))*((Number(vo)+Number(2*vf))/(Number(vin)+Number(2*vf)));
        document.getElementById("L").innerHTML=Math.round(L*1000000);
        //Winding Inductor
        var ilAvg = vo/rBeban.toFixed(2);
        var ilMax = (Number(ilAvg)+Number(deltaILX/2)).toFixed(1);
        var n = Math.ceil((L*ilMax*10000)/(bMax*acInductor));
        document.getElementById("winding_inductor").innerHTML=n;
        //dw
        var ilRmst = Math.round(Math.sqrt(Number(ilAvg*ilAvg)+Number(((deltaILX/2)/Math.sqrt(3))*((deltaILX/2)/Math.sqrt(3)))));
        var ilsplit = ilRmst/splitL;
        //var qwL = (ilRmst/j).toFixed(2);
        var qwL = ilsplit/j;
        var dwL = (Math.sqrt((4/3.14)*qwL)).toFixed(1);
        document.getElementById("dw").innerHTML=dwL;
        //lg (Air Gap)
        var lg = (((4*3.14)*L*(ilMax*ilMax))/((bMax*bMax)*acInductor)).toFixed(1);
        document.getElementById("lg").innerHTML=lg;
        //Length of Wire
        var dBob1 = 1.6;
        var kBob1 = (3.14*dBob1).toFixed(2);
        var totalLW = Number(n*kBob1*splitL)+Number(0.4*(n*kBob1*splitL));
        document.getElementById("length_wire").innerHTML=Math.ceil(totalLW/100);

        // -------------

        //Kotak Output Capacitor
        //Delta Vo
        var deltaVo = 0.0001*vo;
        document.getElementById("delta_vo_capacitor").innerHTML=deltaVo;
        //Co
        var co = (vo*(1-dutyCycle))/(8*deltaVo*L*2*fs*2*fs);
        document.getElementById("Co").innerHTML=(co*100000).toFixed(2);

        // -------------

        //Kotak Output Trafo
        //Turn Ratio
        document.getElementById("turn_ratio").innerHTML=(TR2).toFixed(1);
        //NP
        var N1min = ((dutyCycle*T*vin*10000)/(2*bMax*acTr)).toFixed(3);
        var N1 = Math.ceil(2*N1min);
        document.getElementById("number_of_primary_winding").innerHTML=N1;
        //NS
        var N2 = Math.ceil(TR1*N1);
        document.getElementById("number_of_secondary_winding").innerHTML=N2;
        //Irms (P)
        var i1 = (TR1*io).toFixed(3);
        document.getElementById("rms_primary_current").innerHTML=i1;
        //Irms (S)
        var i2 = io;
        document.getElementById("rms_secondary_current").innerHTML=i2;
        //split (S)
        var dwLT = 0.4;
        var qwT = (3.14/4*dwLT*dwLT).toFixed(3);
        var i1SP = (j*qwT).toFixed(2);
        var sigmaP = Math.ceil(i1/i1SP);
        //document.getElementById("primary_split_value").innerHTML=sigmaP;
        var i2SP = (j*qwT).toFixed(2);
        var sigmaS = Math.ceil(i2/i2SP);
        document.getElementById("secondary_split_value").innerHTML=sigmaS;
        //Diameter of Wire
        var dBob2 = 1.7;
        document.getElementById("diameter_of_wire").innerHTML=dBob2;
        var kBob2 = (3.14*dBob2).toFixed(2);
        document.getElementById("circumference_bobbin").innerHTML=kBob2;
        //Primary Length of Wire
        var pp = Math.ceil(Number(N1*kBob2*sigmaP)+Number(0.3*(N1*kBob2*sigmaP)))/100;
        document.getElementById("primary_length_wire").innerHTML=pp;
        //Secondary Length of Wire
        var ps = Math.ceil(Number(N2*kBob2*sigmaS)+Number(0.3*(N2*kBob2*sigmaS)))/100;
        document.getElementById("secondary_length_wire").innerHTML=ps;
        //total length wire
        var total = pp+ps;
        document.getElementById("total_length_wire").innerHTML=total;
    }

    project();
}

function remind(){
    document.getElementById("reminder").style.display="block";
       document.getElementById("cover").style.display="block";
};

function closeRemind(){
    document.getElementById("reminder").style.display="none";
    document.getElementById("cover").style.display="none";
}