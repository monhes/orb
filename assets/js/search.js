
    //onpage load search.html
    function getSearchValue(){
        var url_string = window.location.href;
        var url = new URL(url_string);
        var searchValue = url.searchParams.get("searchValue");
        div_result_search.style.display = 'block';
        if(searchValue == 1){
            onClickBtnSelect1();
        }else if (searchValue == 2){
            onClickBtnSelect2();
        }else if (searchValue == 3){
            onClickBtnSelect3();
        }else if (searchValue == 4){
            onClickBtnSelect4();
        }else if (searchValue == 5){
            onClickBtnSelect5();
        }
    }


function modal(check) {
    if (check == 1) {
        $('#myModal1').modal('show');

    }
    else if (check == 2) {
        $('#myModal2').modal('show');

    }
    else if(check == 3) {
        $('#myModal3').modal('show');

    }
}


// 1. ระบบแสดงผลข้อมูลราคาซื้อขาย ราคาประเมิน
function onClickBtnSelect1() {
    search1_div_pic1_3.style.display = 'none';
    search1_divtool1_pic2.style.display = 'none';
    search1_divtool2_pic2.style.display = 'none';

    search1_div_pic_2_1.style.display = 'none';
    div_result_search1_2_1_land.style.display = 'none';
    search1_div_pic_4.style.display = 'none';
    search1_div_pic_5.style.display = 'none';
    search1_div_pic_6.style.display = 'none';
    search1_div_pic_2_3_2.style.display = 'none';
    search1_div_pic_3_1.style.display = 'none';
    search1_div_pic_2_3_3.style.display = 'none';
        search1_div_pic64.style.display = 'none';
        div_result_search_1.style.display = 'block';
        div_land_value1.style.display = 'block';
        var btn = document.getElementById("btn_select_1"); //active
        var rdo1 = document.getElementById("search1_rdo1");
        btn.className = "btn framed active";
        rdo1.checked = true;
        search1_pic();
        div_result_search_2.style.display = 'none';
        var btn = document.getElementById("btn_select_2");
        btn.className = "btn framed";
        div_result_search_3.style.display = 'none';
        var btn = document.getElementById("btn_select_3");
        btn.className = "btn framed";
        div_result_search_4.style.display = 'none';
        var btn = document.getElementById("btn_select_4");
        btn.className = "btn framed";
        div_result_search_5.style.display = 'none';
        var btn = document.getElementById("btn_select_5");
        btn.className = "btn framed";

         search1_div_pic_3.style.display = 'none'

        event.preventDefault();
    }

    // 2. ระบบแสดงการเปลี่ยนแปลงราคาซื้อขาย ราคาประเมิน
function onClickBtnSelect2() {

    div_result_search1_2_1_land.style.display = 'none';
    div_result_search1_3_land.style.display = 'none';
    div_result_search1_4_land.style.display = 'none';
    div_result_search1_2_land.style.display = 'none';
        div_result_search_1.style.display = 'none';
        var btn = document.getElementById("btn_select_1");
        btn.className = "btn framed";
        div_result_search_2.style.display = 'block';
        var btn = document.getElementById("btn_select_2"); //active
        btn.className = "btn framed active";
        var rdo1 = document.getElementById("search2_rdo1");
        rdo1.checked = true;
        div_result_search_3.style.display = 'none';
        var btn = document.getElementById("btn_select_3");
        btn.className = "btn framed";
        div_result_search_4.style.display = 'none';
        var btn = document.getElementById("btn_select_4");
        btn.className = "btn framed";
        div_result_search_5.style.display = 'none';
        var btn = document.getElementById("btn_select_5");
         btn.className = "btn framed";

         div_outsearch_condo2_1.style.display = 'none';
         out_condo2.style.display = 'none';
         div_result_search2_1_land.style.display = 'none';
         search2_div_pic_2.style.display = 'none';
         search2_div_pic_2_1.style.display = 'none';
         search2_div_pic_2_2.style.display = 'none';
         search2_div_pic_3.style.display = 'none';
         div_result_search2_1_land.style.display = 'none';
        search2_pic();
        event.preventDefault();
    }

    // 3. ข้อมูลปริมาณการเข้าใช้ระบบ
function onClickBtnSelect3() {  

     div_result_search1_2_1_land.style.display = 'none';
    div_result_search1_3_land.style.display = 'none';
    div_result_search1_4_land.style.display = 'none';
    div_result_search1_2_land.style.display = 'none';
        div_result_search_1.style.display = 'none';
        var btn = document.getElementById("btn_select_1");
        btn.className = "btn framed";
        div_result_search_2.style.display = 'none';
        var btn = document.getElementById("btn_select_2"); 
        btn.className = "btn framed";
        div_result_search_3.style.display = 'block';
        var btn = document.getElementById("btn_select_3"); //active
        btn.className = "btn framed active";
        div_result_search_4.style.display = 'none';
        var btn = document.getElementById("btn_select_4");
        btn.className = "btn framed";
        div_result_search_5.style.display = 'none';
        var btn = document.getElementById("btn_select_5");
        btn.className = "btn framed";
        search3_pic();
        event.preventDefault();
    }

    // 4. ข้อมูลปริมาณการเข้าใช้ระบบ
function onClickBtnSelect4() {  
    div_result_search1_2_1_land.style.display = 'none';
    div_result_search1_3_land.style.display = 'none';
    div_result_search1_4_land.style.display = 'none';
    div_result_search1_2_land.style.display = 'none';
    search4_div_pic_graph_5.style.display = 'none';
    search4_div_pic_graph_2.style.display = 'none';
    search4_div_pic_graph_3.style.display = 'none';
    search4_div_pic_graph_6.style.display = 'none';
    search4_div_pic_graph_7.style.display = 'none';
        div_result_search_1.style.display = 'none';
        var btn = document.getElementById("btn_select_1");
        btn.className = "btn framed";
        div_result_search_2.style.display = 'none';
        var btn = document.getElementById("btn_select_2"); 
        btn.className = "btn framed";
        div_result_search_3.style.display = 'none';
        var btn = document.getElementById("btn_select_3"); 
        btn.className = "btn framed";
        div_result_search_4.style.display = 'block';
        var btn = document.getElementById("btn_select_4"); //active
        btn.className = "btn framed active";
        var rdo1 = document.getElementById("search4_rdo1");
        rdo1.checked = true;
        div_result_search_5.style.display = 'none';
        var btn = document.getElementById("btn_select_5");
        btn.className = "btn framed";
        search4_pic();
        event.preventDefault();
    }

    // 5. ข้อมูลปริมาณการเข้าใช้ระบบ
function onClickBtnSelect5() {  

    div_result_search1_2_1_land.style.display = 'none';
    div_result_search1_3_land.style.display = 'none';
    div_result_search1_4_land.style.display = 'none';
    div_result_search1_2_land.style.display = 'none';
        div_result_search_1.style.display = 'none';
        var btn = document.getElementById("btn_select_1");
        btn.className = "btn framed";
        div_result_search_2.style.display = 'none';
        var btn = document.getElementById("btn_select_2");
        btn.className = "btn framed";
        event.preventDefault();
        div_result_search_3.style.display = 'none';
        var btn = document.getElementById("btn_select_3");
        btn.className = "btn framed";
        div_result_search_4.style.display = 'none';
        var btn = document.getElementById("btn_select_4");
        btn.className = "btn framed";
        div_result_search_5.style.display = 'block';
        var btn = document.getElementById("btn_select_5"); //active
        btn.className = "btn framed active";
        search5_pic();
        event.preventDefault();
    }

    //ระบุความสนใจตามเขตการปกครอง
function onclickSearch() {
    search1_div_pic1_3.style.display = 'none';
    div_land.style.display = 'block';
    search1_div_pic_2_3_1.style.display = 'none';
    search1_div_pic_4.style.display = 'none';
    div_result_search1_condo.style.display = 'none';
        div_result_search.style.display = 'block';
        search1_div_pic64.style.display = 'none';
        search1_div_pic_5.style.display = 'none';
        search1_div_pic_6.style.display = 'none';
        div_result_search1_2_1_land.style.display = 'none';
        search1_div_pic_3_1.style.display = 'none';
        div_result_search1_1_land.style.display = 'none';
        search1_div_pic_2_3_3.style.display = 'none';
        search1_div_pic_2_3_2.style.display = 'none';
        div_result_search1_3_land.style.display = 'none';
        div_result_search1_4_land.style.display = 'none';
        div_condominium.style.display = 'none';
    div_building.style.display = 'none';
    search1_div_pic_4.style.display = 'none';
    search1_divtool1_pic2.style.display = 'none';
    search1_divtool2_pic2.style.display = 'none';

        search1_div_pic_2_1.style.display = 'none';
        onClickBtnSelect1();
        event.preventDefault();
    }

function search2_onclickCondo() {
    div_land_2.style.display = 'none';
    div_condo_2_2.style.display = 'block';
   
}
function search2_onclickBudding() {
    div_land_2.style.display = 'block';
    div_condo_2_2.style.display = 'none';
}

function search2_onclickLand() {
    div_land_2.style.display = 'block';
    div_condo_2_2.style.display = 'none';
    //search2_div_pic_1.style.display = 'none';//map
}






    // 1. ระบบแสดงการเปลี่ยนแปลงราคาซื้อขาย ราคาประเมิน
    //ที่ดิน
function search1_onclickLand() {
    search1_div_pic1_3.style.display = 'none';
    	div_land.style.display = 'block';
        div_condominium.style.display = 'none';
        div_building.style.display = 'none';
        search1_div_pic64.style.display = 'none';
        search1_div_pic_5.style.display = 'none';
        search1_divtool1_pic2.style.display = 'none';
        search1_divtool2_pic2.style.display = 'none';
        search1_div_pic_6.style.display = 'none';
        search1_div_pic_2_3_3.style.display = 'none';
        div_result_search1_2_1_land.style.display = 'none';

     

        search1_div_pic_2.style.display = 'block';
        search1_div_pic_2_1.style.display = 'none';
        div_result_search1_condo.style.display = 'none';
        div_result_search1_2_land.style.display = 'none';
        div_result_search1_3_land.style.display = 'none';
        div_result_search1_4_land.style.display = 'none';
        div_result_search1_3_land_2.style.display = 'none';
        div_result_search1_3_land_3.style.display = 'none';
        div_result_search1_1_land.style.display = 'none';
        search1_div_pic_4.style.display = 'none';
        search1_div_pic_3.style.display = 'none';
        search1_div_pic_1.style.display = 'none';
        search1_div_pic_2_3_1.style.display = 'none';
        search1_div_pic_2_3_2.style.display = 'none';
        search1_div_pic_3_1.style.display = 'none';
    }

    function search1_pic(){
        search1_div_pic.style.display = 'block';
        search1_div_pic_1.style.display = 'none';
        search1_div_pic_2.style.display = 'block';
        search2_div_pic.style.display = 'none';
        search3_div_pic.style.display = 'none';
        search4_div_pic.style.display = 'none';
        search5_div_pic.style.display = 'none';
    }

    // ที่ดิน select เงื่อนไข แผนที่ ระวาง
    function search_1_landChange(){
        var search1_select = document.getElementById("search_1_select");
        if(search1_select.value == 1){
            div_land_value1.style.display = 'block';
            div_land_value2.style.display = 'none';
            div_result_search1_2_1_land.style.display = 'none';
            div_result_search1_3_land.style.display = 'none';
            div_result_search1_4_land.style.display = 'none';
            div_land_value3.style.display = 'none';
            search1_divtool1_pic2.style.display = 'none';
            search1_divtool2_pic2.style.display = 'none';
        } else if (search1_select.value == 2) {
            search1_divtool1_pic2.style.display = 'none';
            search1_divtool2_pic2.style.display = 'none';
            div_land_value1.style.display = 'none';
            div_land_value2.style.display = 'block';
            div_land_value3.style.display = 'none';
            div_result_search1_2_1_land.style.display = 'none';
            div_result_search1_3_land.style.display = 'none';
            div_result_search1_4_land.style.display = 'none';
            search1_div_pic_2_3_1.style.display = 'block';
            search1_div_pic_2_3_2.style.display = 'none';
            search1_div_pic_2_1.style.display = 'none';
            search1_div_pic_4.style.display = 'none';
            search1_div_pic_3.style.display = 'none';
            search1_div_pic_2.style.display = 'none';
            search1_div_pic_1.style.display = 'none';
            div_result_search1_1_land.style.display = 'none';
            search1_div_pic_3_1.style.display = 'none';
            div_result_search1_2_land.style.display = 'none';
            div_result_search1_3_land.style.display = 'none';
            div_result_search1_4_land.style.display = 'none';
        } else if (search1_select.value == 3) {
            search1_div_pic_2_3_3.style.display = 'none';
            search1_divtool1_pic2.style.display = 'none';
            search1_divtool2_pic2.style.display = 'none';
            div_land_value1.style.display = 'none';
            div_land_value2.style.display = 'none';
            div_land_value3.style.display = 'block';
            search1_div_pic_2.style.display = 'block';

            div_result_search1_land_map.style.display = 'none';
            div_result_search1_3_land_2.style.display = 'none';
            div_result_search1_2_land.style.display = 'none';
            div_result_search1_3_land.style.display = 'none';
            div_result_search1_1_land.style.display = 'none';
            div_result_search1_condo.style.display = 'none';
            div_result_search1_3_land_3.style.display = 'none';
            div_result_search1_4_land.style.display = 'none';
            search1_div_pic_2_3_1.style.display = 'none';
            search1_div_pic_2_3_2.style.display = 'none';
            search1_div_pic_2_1.style.display = 'none';
            search1_div_pic_4.style.display = 'none';
            search1_div_pic_3.style.display = 'none';

            search1_div_pic_1.style.display = 'none';

        }
}
//เครื่องมือวัดระวางที่ดิน การค้นหาแบบแผนที่
    function onClickTool1() {
        search1_div_pic_2_3_1.style.display = 'none';
        search1_div_pic_2_3_2.style.display = 'none';
        search1_div_pic_2_3_3.style.display = 'none';
        search1_div_pic_2.style.display = 'none';
        search1_div_pic_4.style.display = 'none';
        search1_divtool1_pic2.style.display = 'block';
        search1_divtool2_pic2.style.display = 'none';
       

        search1_land_2_location();
        div_result_search1_2_1_land.style.display = 'none';
        
    }
function onClickTool2() {
   
    search1_divtool1_pic2.style.display = 'none';
        search1_div_pic_2_3_1.style.display = 'none';
        search1_div_pic_2_3_2.style.display = 'none';
        search1_div_pic_2_3_3.style.display = 'none';
        search1_div_pic_2.style.display = 'none';
        search1_div_pic_4.style.display = 'none';
        search1_divtool2_pic2.style.display = 'block';
    search1_land_2_location();
    div_result_search1_2_1_land.style.display = 'none';
}

function onClickImageTool1() {
    search1_div_pic_2_3_2.style.display = 'block';
    search1_divtool1_pic2.style.display = 'none';
    search1_land_2_location();
}
function onClickImageTool2() {
    search1_div_pic_2_3_3.style.display = 'block';
    search1_divtool2_pic2.style.display = 'none';
    search1_land_2_location();

}

    //ระบบแสดงผลราคาซื้อขาย ราคาประเมิน ที่ดิน > ค้นหาแบบแผนที่ คลิกที่รูป ครั้งที่ 1
    function onClicksearch1_div_pic_land_2() {
        div_result_search1_land_map.style.display = 'block';
        div_result_search1_land_map_1.style.display = 'block';
        search1_div_pic_2_3_1.style.display = 'none';
        search1_div_pic_2_3_2.style.display = 'block';
        search1_div_pic_2_3_3.style.display = 'none';
        search1_div_pic_2_1.style.display = 'none';
        search1_div_pic_4.style.display = 'none';
        search1_div_pic_3.style.display = 'none';
        search1_div_pic_2.style.display = 'none';
        search1_div_pic_1.style.display = 'none';
        div_result_search1_1_land.style.display = 'none';
        div_result_search1_2_land.style.display = 'none';
        div_result_search1_3_land.style.display = 'none';
        div_result_search1_4_land.style.display = 'none';
    }
    
    function onClickdiv_result_search1_land_map_1() {
        div_result_search1_3_land_2.style.display = 'block';
        div_result_search1_land_map.style.display = 'none';
    }

    //คลิกค้นหาที่ 2 


    function Search1_land_1() {
        var val = document.getElementById("search_1_select");
        if (val.value == 1){
            search1_div_pic_1.style.display = 'none';
            search1_div_pic_2.style.display = 'none';
            search1_div_pic_3.style.display = 'block';
            search1_div_pic_4.style.display = 'none';
            search1_div_pic_3_1.style.display = 'none';
            search1_div_pic_2_3_1.style.display = 'none';
            search1_div_pic64.style.display = 'none';
            search1_div_pic_2_3_2.style.display = 'none';
            search1_div_pic_2_3_3.style.display = 'none';
            div_result_search1_1_land.style.display = 'block';
            div_result_search1_2_land.style.display = 'none';
            div_result_search1_3_land.style.display = 'none';
            div_result_search1_4_land.style.display = 'none';
            div_result_search1_condo.style.display = 'none';
            search1_divtool1_pic2.style.display = 'none';
            search1_divtool2_pic2.style.display = 'none';

            event.preventDefault();

        } else if (val.value == 3) {
            search1_divtool1_pic2.style.display = 'none';
            search1_divtool2_pic2.style.display = 'none';
            search1_div_pic_3_1.style.display = 'block';
            search1_div_pic_2_3_3.style.display = 'none';
            search1_div_pic_2_3_2.style.display = 'none';
            search1_div_pic_2_3_1.style.display = 'none';
            search1_div_pic_2_1.style.display = 'none';
            search1_div_pic_4.style.display = 'none';
            search1_div_pic_3.style.display = 'none';
            search1_div_pic_2.style.display = 'none';
            search1_div_pic_1.style.display = 'none';
            search1_div_pic64.style.display = 'none';
            search1_land_2_location();

            div_result_search1_land_map.style.display = 'block';
            div_result_search1_land_map_1.style.display = 'block';
            div_result_search1_1_land.style.display = 'none';
            div_result_search1_2_land.style.display = 'none';
            div_result_search1_3_land.style.display = 'none';
            div_result_search1_4_land.style.display = 'none';
            div_result_search1_condo.style.display = 'none';
            search1_div_pic64.style.display = 'none';

            event.preventDefault();
        } else {
            
            search1_div_pic_3_1.style.display = 'none';
            search1_div_pic64.style.display = 'none';

            event.preventDefault();
    }
}




function search2condo() {
    search2_div_pic_1.style.display = 'none';//map
    
    alert("test");

   
}

    //คลิกเลือกโลเคชั่น ค้นหาแบบตามเงื่อนไข
    function search1_land_1_location(){
        div_result_search1_1_land.style.display = 'none';
        div_result_search1_2_land.style.display = 'block';
        div_result_search1_3_land.style.display = 'none';
        div_result_search1_4_land.style.display = 'none';
        search1_div_pic_1.style.display = 'none';
        search1_div_pic_2.style.display = 'none';
        search1_div_pic_3.style.display = 'none';
        search1_div_pic_4.style.display = 'block';
        div_result_search1_2_1_land.style.display = 'none';

        search1_div_pic_3_1.style.display = 'none';
        search1_div_pic_2_3_3.style.display = 'none';
        search1_div_pic_2_3_2.style.display = 'none';


        event.preventDefault();
    }

//building
function search1_building() {
    search1_div_pic64.style.display = 'block';
    search1_divtool1_pic2.style.display = 'none';
    search1_divtool2_pic2.style.display = 'none';
    search1_div_pic_2_3_3.style.display = 'none';
    search1_div_pic_2_3_2.style.display = 'none';
    search1_div_pic_3_1.style.display = 'none';
    search1_div_pic_6.style.display = 'none';
    search1_div_pic_5.style.display = 'none';
    search1_div_pic_2_1.style.display = 'none';
    search1_div_pic1_3.style.display = 'none';
    div_result_search1_1_land.style.display = 'none';
    div_result_search1_2_land.style.display = 'none';
    div_result_search1_3_land.style.display = 'none';
    div_result_search1_4_land.style.display = 'none';
    search1_div_pic_1.style.display = 'none';
    search1_div_pic_2.style.display = 'none';
    search1_div_pic_3.style.display = 'none';
    search1_div_pic_4.style.display = 'none';
    div_result_search1_2_1_land.style.display = 'none';
    event.preventDefault();
}

function search1_3() {
    search1_div_pic1_3.style.display = 'block'; 
    search1_div_pic64.style.display = 'none';
    search1_divtool1_pic2.style.display = 'none';
    search1_divtool2_pic2.style.display = 'none';
    search1_div_pic_2_3_3.style.display = 'none';
    search1_div_pic_2_3_2.style.display = 'none';
    search1_div_pic_3_1.style.display = 'none';
    search1_div_pic_6.style.display = 'none';
    search1_div_pic_5.style.display = 'none';
    search1_div_pic_2_1.style.display = 'none';

    div_result_search1_1_land.style.display = 'none';
    div_result_search1_2_land.style.display = 'none';
    div_result_search1_3_land.style.display = 'none';
    div_result_search1_4_land.style.display = 'none';
    search1_div_pic_1.style.display = 'none';
    search1_div_pic_2.style.display = 'none';
    search1_div_pic_3.style.display = 'none';
    search1_div_pic_4.style.display = 'none';
    div_result_search1_2_1_land.style.display = 'none';
    event.preventDefault();
}
    //กดเพื่อดูรายละเอียดแปลงที่ดิน
    function search1_land_1_location_detail(){
        div_result_search1_1_land.style.display = 'none';
        div_result_search1_2_land.style.display = 'none';
        div_result_search1_3_land.style.display = 'block';
        div_result_search1_4_land.style.display = 'none';
        div_result_search1_2_1_land.style.display = 'none';
        event.preventDefault();
    }

    //กดเพื่อดูข้อมูลแปลงที่ดินอย่างละเอียด
    function search1_land_1_location_detail2(){
        div_result_search1_1_land.style.display = 'none';
        div_result_search1_2_land.style.display = 'none';
        div_result_search1_3_land.style.display = 'none';
        div_result_search1_4_land.style.display = 'block';
        div_result_search1_2_1_land.style.display = 'none';
        event.preventDefault();
}


//กดเพื่อดูข้อมูลแปลงที่ดินอย่างละเอียด map
    function search1_land_1_location_detail2_2() {
        div_result_search1_1_land.style.display = 'none';
        div_result_search1_2_land.style.display = 'none';
        div_result_search1_3_land.style.display = 'none';
        div_result_search1_4_land.style.display = 'none';
        div_result_search1_3_land_2.style.display = 'none';
        div_result_search1_3_land_3.style.display = 'block';
        event.preventDefault();
    }


//กดเพื่อดูรายละเอียดแปลงที่ดิน ค้นหาแบบแผนที่
    function search1_land_2_location() {
        div_result_search1_1_land.style.display = 'none';
        div_result_search1_2_land.style.display = 'none';
        div_result_search1_3_land.style.display = 'none';
        div_result_search1_4_land.style.display = 'none';
        div_result_search1_2_1_land.style.display = 'block';
        event.preventDefault();
}

function cleardetail() {
    div_result_search1_3_land.style.display = 'none';
    div_result_search1_2_1_land.style.display = 'none';
    div_result_search1_4_land.style.display = 'none';
    div_result_search1_2_land.style.display = 'none';
    div_result_search1_1_land.style.display = 'none';
    div_result_search1_condo.style.display = 'none';
}
	//อาคารชุด
function search1_onclickCondo() {
   
    cleardetail();
    search1_divtool1_pic2.style.display = 'none';
    search1_divtool2_pic2.style.display = 'none';

   
		div_condominium.style.display = 'block';
        div_land.style.display = 'none';
        div_building.style.display = 'none';

        div_result_search1_2_land.style.display = 'none';
        div_result_search1_3_land.style.display = 'none';
        div_result_search1_4_land.style.display = 'none';
        div_result_search1_3_land_2.style.display = 'none';
        div_result_search1_3_land_3.style.display = 'none';
        div_result_search1_1_land.style.display = 'none';
	}
	//สิ่งปลูกสร้าง
	function search1_onclickBudding(){
		div_building.style.display = 'block';
        div_land.style.display = 'none';
        div_condominium.style.display = 'none';
        div_result_search1_2_1_land.style.display = 'none';
        div_result_search1_condo.style.display = 'none';
	}

    //condo
function Search1_condo() {//คลิก Search
    cleardetail();
    search1_div_pic_2_3_3.style.display = 'none';
    search1_divtool1_pic2.style.display = 'none';
    search1_divtool2_pic2.style.display = 'none';
        search1_div_pic_2_1.style.display = 'block';
        search1_div_pic64.style.display = 'none';
        search1_div_pic_1.style.display = 'none';
        search1_div_pic_2.style.display = 'none';
        search1_div_pic_3.style.display = 'none';
        search1_div_pic_4.style.display = 'none';
        div_result_search1_condo.style.display = 'block';

        search1_div_pic_3_1.style.display = 'none';
        search1_div_pic_2_3_2.style.display = 'none';
        search1_div_pic_2_3_1.style.display = 'none';

        div_result_search1_land_map.style.display = 'none';
        //div_result_search1_land_map_1.style.display = 'none';

        div_result_search1_1_land.style.display = 'none';
        div_result_search1_2_land.style.display = 'none';
        div_result_search1_3_land.style.display = 'none';
        div_result_search1_4_land.style.display = 'none';

        event.preventDefault();
    }
    var i = 0;//ใช้ใน if ด้านล่าง
    function Search1_condo_detail() {//นำเมาส์ไปวางบนภาพข้อมูลรายละเอียดทางซ้าย
        search1_div_pic_2_1.style.display = 'none';
        if (i >= 0) {//เพื่อให้ Onmousehover ทำงานครั้งเดียว
            search1_div_pic_4.style.display = 'block';
            //div_result_search1_condo.style.display = 'none';
            div_result_search1_condo.style.display = 'block';
            search1_div_pic64.style.display = 'none';

            search1_div_pic_2_3_3.style.display = 'none';
            search1_div_pic_2_3_2.style.display = 'none';
            search1_div_pic_3_1.style.display = 'none';
            search1_div_pic_6.style.display = 'none';
            search1_div_pic_5.style.display = 'none';
            search1_div_pic_2_1.style.display = 'none';

            div_result_search1_1_land.style.display = 'none';
            div_result_search1_2_land.style.display = 'none';
            div_result_search1_3_land.style.display = 'none';
            div_result_search1_4_land.style.display = 'none';
            search1_div_pic_1.style.display = 'none';
            search1_div_pic_2.style.display = 'none';
            search1_div_pic_3.style.display = 'none';
            
            div_result_search1_2_1_land.style.display = 'none';
        }i++;
        }

    function Search1_condo_detail2() {//คลิกที่ภาพข้อมูลรายละเอียดทางซ้าย
        search1_div_pic_2_1.style.display = 'none';
        search1_div_pic_4.style.display = 'none';
        search1_div_pic_5.style.display = 'block';
        //div_result_search1_condo.style.display = 'none';
        div_result_search1_condo.style.display = 'block';
    }

    function Search1_condo_detail2_photoClick() {//คลิกที่ภาพ search1_div_pic_5
        search1_div_pic_2_1.style.display = 'none';
        search1_div_pic_4.style.display = 'none';

        search1_div_pic_5.style.display = 'none';
        search1_div_pic_6.style.display = 'block';
        //div_result_search1_condo.style.display = 'none';
        div_result_search1_condo.style.display = 'block';

    }

    // 2
    function search2_pic(){
        search1_div_pic.style.display = 'none';
        search2_div_pic.style.display = 'block';
        search2_div_pic_1.style.display = 'block';
        search3_div_pic.style.display = 'none';
        search4_div_pic.style.display = 'none';
        search5_div_pic.style.display = 'none';
    }

    function search2_land_switchOption(){
        var search2Selected = document.getElementById("search2_selected"); 
        if(search2Selected.value == 1){
            search2_selected_year.style.display = 'block';
            search2_selected_date.style.display = 'none';
        }else{
            search2_selected_year.style.display = 'none';
            search2_selected_date.style.display = 'block';
        }
            event.preventDefault();
    }
//2_condo_2
function search2_condo_0() {  //condo2_2
    
    var typecon = document.getElementById("condo2_0");
    if (typecon.value == 1) {
     
        IDcondo2_1.style.display = 'block';
        IDcondo2_2.style.display = 'none';
    }
    else if (typecon.value == 2) {
        
        IDcondo2_2.style.display = 'block';
        IDcondo2_1.style.display = 'none';
    }
 
    event.preventDefault();
}
function searchcondo2_1() {
    div_outsearch_condo2_1.style.display = 'block'; //searchcondo2_2
    out_condo2.style.display = 'none'; //new
    div_result_search2_1_land.style.display = 'block';
    search2_div_pic_1.style.display = 'none';//map
    search1_div_pic_2_1.style.display = 'none';
    div_result_search1_condo.style.display = 'none';
    div_result_search1_2_land.style.display = 'none';
    div_result_search1_3_land.style.display = 'none';
    div_result_search1_4_land.style.display = 'none';
    div_result_search1_3_land_2.style.display = 'none';
    div_result_search1_3_land_3.style.display = 'none';
    div_result_search1_1_land.style.display = 'none';
    search1_div_pic_4.style.display = 'none';
    search1_div_pic_3.style.display = 'none';
    search1_div_pic_1.style.display = 'none';
    search1_div_pic_2_3_1.style.display = 'none';
    search1_div_pic_2_3_2.style.display = 'none';
    search1_div_pic_3_1.style.display = 'none';
    div_result_search2_1_land.style.display = 'none';
    search2_div_pic_2.style.display = 'none';
    search2_div_pic_2_1.style.display = 'none';
    search2_div_pic_2_2.style.display = 'none';
    search2_div_pic_3.style.display = 'none';
    div_result_search2_1_land.style.display = 'block';
    event.preventDefault();
}


function searchcondo2() {
    search2_div_pic_1.style.display = 'none';//map
    div_outsearch_condo2_1.style.display = 'none';
    out_condo2.style.display = 'block';

    div_result_search2_1_land.style.display = 'none';
    search2_div_pic_2.style.display = 'none';
    search2_div_pic_2_1.style.display = 'none';
    search2_div_pic_2_2.style.display = 'none';
    search2_div_pic_3.style.display = 'none';
    div_result_search2_1_land.style.display = 'none';
    search1_div_pic_2_1.style.display = 'none';
    div_result_search1_condo.style.display = 'none';
    div_result_search1_2_land.style.display = 'none';
    div_result_search1_3_land.style.display = 'none';
    div_result_search1_4_land.style.display = 'none';
    div_result_search1_3_land_2.style.display = 'none';
    div_result_search1_3_land_3.style.display = 'none';
    div_result_search1_1_land.style.display = 'none';
    search1_div_pic_4.style.display = 'none';
    search1_div_pic_3.style.display = 'none';
    search1_div_pic_1.style.display = 'none';
    search1_div_pic_2_3_1.style.display = 'none';
    search1_div_pic_2_3_2.style.display = 'none';
    search1_div_pic_3_1.style.display = 'none';
    event.preventDefault();
}
//2_condo_2



    function search2_selected_change(){
    var search2Selected = document.getElementById("search2_selected"); 
        if (search2Selected.value == 1) {
           
        div_result_search2_1_land.style.display = 'block';
        search2_div_pic_1.style.display = 'none';
        search2_div_pic_2.style.display = 'block';
        search2_div_pic_2_1.style.display = 'block';
        search2_div_pic_2_2.style.display = 'block';
        search2_div_pic_3.style.display = 'none';
        div_outsearch_condo2_1.style.display = 'none';
        out_condo2.style.display = 'none';
       
    }else{
        search2_selected_year.style.display = 'none';
        div_result_search2_1_land.style.display = 'block';
        search2_div_pic_1.style.display = 'none';
        search2_div_pic_2.style.display = 'none';
        search2_div_pic_2_1.style.display = 'none';
        search2_div_pic_2_2.style.display = 'none';
        search2_div_pic_3.style.display = 'block';
        div_outsearch_condo2_1.style.display = 'none';
        out_condo2.style.display = 'none';
        div_result_search2_1_land.style.display = 'none';
    }
        event.preventDefault();
    }

    function search2_land_1(){
        var search2Selected = document.getElementById("search2_selected"); 
    if(search2Selected.value == 1){
        div_result_search2_1_land.style.display = 'block';
        search2_div_pic_1.style.display = 'none';
        search2_div_pic_2.style.display = 'block';
        search2_div_pic_2_1.style.display = 'block';
        search2_div_pic_2_2.style.display = 'block';
    }else{
        search2_selected_year.style.display = 'none';
    }
        event.preventDefault();
    }

    // 3
    function search3_pic(){
        search1_div_pic.style.display = 'none';
        search2_div_pic.style.display = 'none';
        search3_div_pic.style.display = 'block';
        search3_div_pic_1.style.display = 'block';
        search3_div_pic_2.style.display = 'none';
        search3_div_pic_3.style.display = 'none';
        search4_div_pic.style.display = 'none';
        search5_div_pic.style.display = 'none';
        event.preventDefault();
    }

    function search3_onclick_1(){
        search3_result_pic.style.display = 'block';
        search3_result_pic_1.style.display = 'block';
        search3_result_pic_2.style.display = 'block';
        event.preventDefault();
    }

    function search3_onclick_2(){
        search1_div_pic.style.display = 'none';
        search2_div_pic.style.display = 'none';
        search3_div_pic.style.display = 'block';
        search3_div_pic_1.style.display = 'none';
        search3_div_pic_2.style.display = 'block';
        search3_div_pic_3.style.display = 'none';
        search4_div_pic.style.display = 'none';
        search5_div_pic.style.display = 'none';
    }

    function search3_onclick_3(){
        search1_div_pic.style.display = 'none';
        search2_div_pic.style.display = 'none';
        search3_div_pic.style.display = 'block';
        search3_div_pic_1.style.display = 'none';
        search3_div_pic_2.style.display = 'none';
        search3_div_pic_3.style.display = 'block';
        search4_div_pic.style.display = 'none';
        search5_div_pic.style.display = 'none';
    }

    // 4 
    function search4_pic(){
        search1_div_pic.style.display = 'none';
        search2_div_pic.style.display = 'none';
        search3_div_pic.style.display = 'none';
        search4_div_pic.style.display = 'block';
        search4_div_pic_1.style.display = 'block';
        search4_div_pic_graph_1.style.display = 'block';
        search4_div_pic_graph_4.style.display = 'block';
        search5_div_pic.style.display = 'none';

    }

    function search4_rdo_search_btn(){
        var rdo1 = document.getElementById("search4_rdo1");
        var rdo2 = document.getElementById("search4_rdo2");
        var rdo3 = document.getElementById("search4_rdo3");
        if (rdo1.checked == true) {
            search4_div_pic_graph_7.style.display = 'none';
            search4_div_pic_graph_1.style.display = 'block';
            search4_div_pic_graph_4.style.display = 'block';
            search4_div_pic_graph_2.style.display = 'none';
            search4_div_pic_graph_3.style.display = 'none';
        }else if(rdo2.checked == true){
            search4_div_pic_graph_1.style.display = 'none';
            search4_div_pic_graph_7.style.display = 'none';
            search4_div_pic_graph_2.style.display = 'block';
            search4_div_pic_graph_4.style.display = 'block';
            search4_div_pic_graph_3.style.display = 'none';
        } else if (rdo3.checked == true) {
            search4_div_pic_graph_7.style.display = 'none';
            search4_div_pic_graph_1.style.display = 'none';
            search4_div_pic_graph_2.style.display = 'none';
            search4_div_pic_graph_3.style.display = 'block';
            search4_div_pic_graph_4.style.display = 'block';
        }
        event.preventDefault();
    }

    function search4_div_pic_circle_1_click(){
            search4_div_pic_graph_1.style.display = 'block';
            search4_div_pic_graph_4.style.display = 'block';
            search4_div_pic_graph_2.style.display = 'none';
            search4_div_pic_graph_3.style.display = 'none';
    }

    function search4_div_pic_circle_2_click(){
            search4_div_pic_graph_1.style.display = 'none';
            search4_div_pic_graph_2.style.display = 'block';
            search4_div_pic_graph_4.style.display = 'block';
            search4_div_pic_graph_3.style.display = 'none';
    }

    function search4_div_pic_circle_3_click(){
            search4_div_pic_graph_1.style.display = 'none';
            search4_div_pic_graph_2.style.display = 'none';
            search4_div_pic_graph_3.style.display = 'block';
            search4_div_pic_graph_4.style.display = 'block';
    }

function search4_Pic7() {
        
        search4_div_pic_graph_4.style.display = 'block';
        search4_div_pic_graph_5.style.display = 'none';
        search4_div_pic_graph_6.style.display = 'none';
    }

function search4_Pic8() {
    search4_div_pic_graph_7.style.display = 'none';
        search4_div_pic_graph_4.style.display = 'none';
        search4_div_pic_graph_5.style.display = 'block';
        search4_div_pic_graph_6.style.display = 'none';
    }

    function search4_Pic9(){
        search4_div_pic_graph_4.style.display = 'none';
        search4_div_pic_graph_5.style.display = 'none';
        search4_div_pic_graph_6.style.display = 'block';
}

function search4_Pic10() {
    search4_div_pic_graph_4.style.display = 'none';
    search4_div_pic_graph_5.style.display = 'none';
    search4_div_pic_graph_6.style.display = 'none';
    search4_div_pic_graph_7.style.display = 'block';
    event.preventDefault();
}

    // 5
    function onClickAllSystem(value){
            if(value.value == 0){
                var inputElements = document.getElementsByClassName('systemCheckbox');
                var i =0;
                var chkInputElement = inputElements[0];
                for ( i = 1 ; i < inputElements.length ; i++){
                    inputElements[i].checked = chkInputElement.checked;
            }
        }
    }

    function onClickSearchSystem(){
        search1_div_pic.style.display = 'none';
        //search1_div_pic_3.style.display = 'none';
        // search1_div_pic_4.style.display = 'none';
        search4_div_pic.style.display = 'none';
        search5_div_pic.style.display = 'block';
        search5_div_pic_1.style.display = 'none';
        search5_div_pic_2.style.display = 'block';

        event.preventDefault();
    }

    function search5_pic(){
        search1_div_pic.style.display = 'none';
        search2_div_pic.style.display = 'none';
        search3_div_pic.style.display = 'none';
        search4_div_pic.style.display = 'none';
        search5_div_pic.style.display = 'block';
        search5_div_pic_1.style.display = 'block';
        search5_div_pic_2.style.display = 'none';
    }
