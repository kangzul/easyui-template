$(document).ready(displayTime);

function displayTime() {
    var bln = new Array();
    bln[0] = "Januari";
    bln[1] = "Februari";
    bln[2] = "Maret";
    bln[3] = "April";
    bln[4] = "Mai";
    bln[5] = "Juni";
    bln[6] = "Juli";
    bln[7] = "Augustus";
    bln[8] = "September";
    bln[9] = "Oktober";
    bln[10] = "Nopember";
    bln[11] = "Desember";

    var hari = new Array(7);
    hari[0] = "Minggu";
    hari[1] = "Senin";
    hari[2] = "Selasa";
    hari[3] = "Rabu";
    hari[4] = "Kamis";
    hari[5] = "Jum’at";
    hari[6] = "Sabtu";

    var waktu = new Date();

    var jam = waktu.getHours();
    var menit = waktu.getMinutes();
    var detik = waktu.getSeconds();
    var hari = hari[waktu.getDay()];
    var tgl = waktu.getDate() + "";
    var bulan = bln[waktu.getMonth()];
    var tahun = waktu.getFullYear() + "";

    var hasil = hari + ", " + (tgl < 10 ? "0" + tgl : tgl) + " " + (bulan < 10 ? "0" + bulan : bulan) + " " + tahun + "<br>";
    hasil += (jam < 10 ? "0" + jam : jam) + " : " + (menit < 10 ? "0" + menit : menit) + " : " + (detik < 10 ? "0" + detik : detik);
    $("#jam").html(hasil);
    var x = setTimeout(displayTime, 1000);
}
$("#logout-btn").click(function () {
    $.messager.confirm('Konfirmasi', 'Are you want to logout..?', function (r) {
        if (r) {
            console.log("Logout");

        }
    });
})

$('#tt').tree({
	onClick: function(node){
        var params = $(node.text);
        var title = params.text();
        var link = params.attr('link');
        var t = $('#tabs');
		if (t.tabs('exists', title)){
			t.tabs('select', title);
		} else {
            if (node.children == undefined) {
                t.tabs('add', {
                    title: title,
                    content: "Content Tab "+link,
                    closable: true,
                    bodyCls: "tab-content"
                })
            }
		}
	}
})

// function openPage(params) {
//     var t = $('#tabs');
// 		if (t.tabs('exists', params)){
// 			t.tabs('select', params);
// 		} else {
//             t.tabs('add', {
//                 title: params,
//                 content: "Content Tab "+params,
//                 closable: true,
//                 bodyCls: "tab-content"
//             })
// 		}
// }