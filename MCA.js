


 function aim180() {
        h5gg.clearResults();
        h5gg.searchNumber('1057048494','I32','0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32'); 
        h5gg.clearResults();
        h5gg.searchNumber('1054951342','I32','0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32'); 
        h5gg.clearResults();
        h5gg.searchNumber('1053273620','I32','0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32'); 
        h5gg.clearResults();
				
				vant.showNotify({
        type: 'success',
        message: 'AiM 180'
			});
    }


function aimscope() {
        h5gg.clearResults();
        h5gg.searchNumber('0.09','F32','0x0', '0x20000000000');
        h5gg.editAll('180', 'F32'); 
        h5gg.clearResults();
				vant.showNotify({
        type: 'success',
        message: 'Aim Scop'
			});
    }

function lockscope() {
        h5gg.clearResults();
        h5gg.searchNumber('1075000115','I32','0x100000000', '0x160000000');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();
		h5gg.searchNearby('3', 'I32', '0x100');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();
    	h5gg.searchNumber('1075000115','I32','0x100000000', '0x160000000');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();
				vant.showNotify({
        type: 'success',
        message: 'Lock scop'
			});
		
	}
	

	
	
function buffdame() {
        h5gg.clearResults();
        h5gg.searchNumber('5.5','F32','0x100000000', '0x160000000');
        h5gg.editAll('10000000', 'F32'); 
        h5gg.clearResults();
        h5gg.searchNumber('0.75','F32','0x100000000', '0x160000000');
        h5gg.editAll('10000000', 'F32'); 
        h5gg.clearResults();
    }

	function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults(); h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000'); const results = h5gg.getResults(h5gg.getResultsCount()); let modifiedCount = 0; results.forEach(result=> {
        if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2)) {
            h5gg.setValue(result.address, replaceValue.toString(), 'I32'); modifiedCount++;
        }}); if (modifiedCount > 0) {
        if (alertMessage)alert(alertMessage)} else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.")}}
var Nhayman = 15;
var nhayngam = 10;

function modifyValue1(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000');
    const results = h5gg.getResults(h5gg.getResultsCount());
    let modifiedCount = 0;

    results.forEach(result => {
        if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
            h5gg.setValue(result.address, replaceValue.toString(), 'F32');
            modifiedCount++;
              if (searchValue === Nhayman) Nhayman = replaceValue;
            if (searchValue === nhayngam) nhayngam = replaceValue;
        }
    });

    if (modifiedCount > 0 && alertMessage) {
        alert(alertMessage);
    } else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
}

function cao() {
    modifyValue1(-0.05, Number(prompt("Nhập Độ Cao -0.05 -> ...  :", "")), 'F00', null,);
}
function xa() {
    modifyValue1(2.5, Number(prompt("Nhập Tầm xa 2.5 -> ... :", "")), 'F04', null,);
	}
	
function Norecoil() {
        function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(1016018816, 180, 'I32')
		vant.showNotify({
        type: 'success',
        message: 'AWM快切準心'
			});		
			
			}

function so88() {
    h5gg.clearResults();
    h5gg.searchNumber('4333543704410193920', 'I64', '0x100000000', '0x160000000');
    h5gg.searchNearby('0.01', 'F32', '0x8');
    h5gg.searchNearby('0.0219~0.02975', 'F32', '0x32')
    h5gg.searchNearby('0.1035~0.1070', 'F32', '0x4');
    h5gg.searchNearby('2.802597e-45', 'F32', '0x4');
    h5gg.searchNumber('0.1035~0.1070', 'F32', '0x100000000', '0x160000000');
    h5gg.editAll('1.875', "F32");
    vant.showNotify({
        type: 'success',
        message: '人物範圍'
    });
}

function AimFor() {
    modifyValue(1077936128, -20000, 'A04'); 
    modifyValue(1069547520, 1148829696, 'A10')
		vant.showNotify({
        type: 'success',
        message: 'aim For'
			});
	
	}


function s100s() {
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);
        var dizhi2 = (Number(addr1) + -308);



        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");
            h5gg.setValue(dizhi2, 0, "I32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: 'AWM快切準心'
    });


	}
	

function s105s() {
h5gg.clearResults();
h5gg.searchNumber('31101603021', 'I64', '0x100000000', '0x160000000');
var count = h5gg.getResultsCount();
var r = h5gg.getResults(count);
var cnt = 0;
for(var i=0; i<count; i++) {
    var addr1 = r[i].address;

var dizhi0 = (Number(addr1) + 8);

   


{
h5gg.setValue(dizhi0, 2139095040, "I32");

   }
}
vant.showNotify({
        type: 'success',
        message: 'AWM自瞄'
    });
}


function HeadshotCu() {
        function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x200000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(2018908708, 96688289, 'I32')}



function s101s() {
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);



        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: 'AWM快切'
    });


	}
	
function so89() {
    h5gg.clearResults();
    h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('72340172821233664', 'I64');
    vant.showNotify({
        type: 'success',
        message: '快切'
    });


	}

function sk() {
    h5gg.clearResults();
    var hk1 = prompt("請輸入想要的靈敏");
    h5gg.searchNumber('4417130516484980736', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;
        var dizhi0 = (Number(addr1) + -4);
        var dizhi1 = (Number(addr1) + -8);
        var dizhi2 = (Number(addr1) + -12);
        var dizhi3 = (Number(addr1) + -0);




        {
            h5gg.setValue(dizhi0, hk1, "F32");
            h5gg.setValue(dizhi1, hk1, "F32");
            h5gg.setValue(dizhi2, hk1, "F32");
            h5gg.setValue(dizhi3, hk1, "F32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: '遊戲靈敏'
    });

	}

function so01() {
    h5gg.clearResults();
    h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
    alert('搜索(' + h5gg.getResultsCount() + '/1)');
}

function so02() {
    h5gg.editAll('4397530849749489418', 'I64');

    vant.showNotify({
        type: 'success',
        message: '10x'
    });

}

function so03() {
    h5gg.editAll('4397530849764387586', 'I64');
    vant.showNotify({
        type: 'success',
        message: '還原'
    });

}


function so05() {
    h5gg.editAll('4397530849741637681', 'I64');
    vant.showNotify({
        type: 'success',
        message: '50x'
    });

}

function so06() {
    h5gg.editAll('4397530849758414897', 'I64');
    vant.showNotify({
        type: 'success',
        message: '2x'
    });

	}


function so90() {
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925814228', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925251973', 'I64');
    vant.showNotify({
        type: 'success',
        message: '肩膀天線'
    });


}



function so91() {
    h5gg.clearResults();
    h5gg.searchNumber('1051196712', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 20);




        {
            h5gg.setValue(dizhi0, 200, "F32");
        }
    }
    h5gg.clearResults();
    h5gg.searchNumber('4575657224610966592', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848125002066881600', 'I64');
    vant.showNotify({
        type: 'success',
        message: '超細手線'
    });


}

function so92() {
    h5gg.clearResults();
    h5gg.searchNumber('4575657222443971598', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4848124999899886606', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4575657224578539469', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4848125002034454477', 'I64');
    vant.showNotify({
        type: 'success',
        message: '微粗手線'
    });


		}