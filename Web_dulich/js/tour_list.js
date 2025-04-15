
let $ = document.querySelector.bind(document);
let cardContainer = $("#card_container");
let sortPriceSelect = $("#sllOrder");
let locationH1 = $('#main_location');

let locationStorage = localStorage.getItem('location');
locationH1.innerText = "Du lịch " + locationStorage;
$(".location_drop_span").innerText = "Du lịch " + locationStorage;
$(".location_span").innerText = locationStorage;


let southEastArea = ["Phú Quốc", "Tiền Giang", "Cần Thơ", "Vĩnh Long", "Sóc Trăng"];
let middleArea = ["Đà Nẵng", "Quảng Nam", "Quảng Ngãi", "Quảng Bình", "Quảng Trị", "Huế", "Thanh Hóa"];
let southArea = ["Đồng Nai", "Bà Rịa - Vũng Tàu", "TP. Hồ Chí Minh", "Côn Đảo", "Tây Ninh"]


if(southEastArea.includes(locationStorage)){
    $(".area_drop_span").innerText = "Du lịch tây nam bộ";
}
if(middleArea.includes(locationStorage)){
    $(".area_drop_span").innerText = "Du lịch miền trung";
}
if(southArea.includes(locationStorage)){
    $(".area_drop_span").innerText = "Du lịch đông nam bộ";
}



function CardStruct(imagePath, concernNumber, startDate, location, price, startLocation, emptySlot, isSale, salePrice) {
    this.imagePath = imagePath;
    this.concernNumber = concernNumber;
    this.startDate = startDate;
    this.location = location;
    this.price = price;
    this.startLocation = startLocation;
    this.emptySlot = emptySlot;
    this.isSale = isSale;
    this.salePrice = salePrice;
}

let card1 = new CardStruct("./assets/img/location_1.png", 350, "12/3/2024 - Giờ đi: 12h30", "Hà Nội - Yên Tử (2 ngày 1 đêm)", "2.150.000đ/ Khách", "Nơi khởi hành: Hà Nội", 6, false, "");
let card2 = new CardStruct("./assets/img/location_2.png", 300, "30/3/2024 - Giờ đi: 08h00", "Hà Nội - Cát Bà (2 ngày 1 đêm)", "1.890.000đ/ Khách", "Nơi khởi hành: Hà Nội", 12, false, "");
let card3 = new CardStruct("./assets/img/location_3.png", 335, "12/3/2024 - Giờ đi: 12h30", "Hà Nội - Tràng An (2 ngày 1 đêm)", "2.150.000đ/ Khách", "Nơi khởi hành: Hà Nội", 8, false, "");
let card4 = new CardStruct("./assets/img/location_4.png", 320, "12/3/2024 - Giờ đi: 12h30", "Hà Nội - Sa Pa (2 ngày 1 đêm)", "2.500.000đ/ Khách", "Nơi khởi hành: Hà Nội", 6, false, "");
let card5 = new CardStruct("./assets/img/location_5.png", 300, "30/3/2024 - Giờ đi: 08h00", "Hà Nội - Hà Giang (3 ngày 2 đêm)", "3.890.000đ/ Khách", "Nơi khởi hành: Hà Nội", 5, false, "");
let card6 = new CardStruct("./assets/img/location_6.png", 335, "15/3/2024 - Giờ đi: 12h30", "Hà Nội - Lào Cai (4 ngày 3 đêm)", "4.150.000đ/ Khách", "Nơi khởi hành: Hà Nội", 8, true, "3.650.000");
let card7 = new CardStruct("./assets/img/location_7.png", 350, "12/3/2024 - Giờ đi: 12h30", "Hà Nội - Tam Đảo (2 ngày 1 đêm)", "1.150.000đ/ Khách", "Nơi khởi hành: Hà Nội", 6, false, "");
let card8 = new CardStruct("./assets/img/location_8.png", 500, "30/3/2024 - Giờ đi: 08h00", "Hà Nội - Tây Thiên (2 ngày 1 đêm)", "890.000đ/ Khách", "Nơi khởi hành: Hà Nội", 12, false, "");
let card9 = new CardStruct("./assets/img/location_9.png", 100, "12/3/2024 - Giờ đi: 12h30", "Hà Nội - Tam Chúc (2 ngày 1 đêm)", "1.350.000đ/ Khách", "Nơi khởi hành: Hà Nội", 8, false, "");
let card10 = new CardStruct("./assets/img/location_10.png", 351, "12/3/2024 - Giờ đi: 12h30", "Hà Nội - Bái Đính (2 ngày 1 đêm)", "1.050.000đ/ Khách", "Nơi khởi hành: Hà Nội", 6, false, "");
let card11 = new CardStruct("./assets/img/location_11.png", 300, "30/3/2024 - Giờ đi: 08h00", "Hà Nội - Hạ Long (3 ngày 2 đêm)", "2.890.000đ/ Khách", "Nơi khởi hành: Hà Nội", 2, true, "1.650.000");
let card12 = new CardStruct("./assets/img/location_12.png", 335, "12/3/2024 - Giờ đi: 12h30", "Hà Nội - Mộc Châu (2 ngày 1 đêm)", "2.150.000đ/ Khách", "Nơi khởi hành: Hà Nội", 4, false, "");
let card13 = new CardStruct("./assets/img/location_13.png", 390, "12/3/2024 - Giờ đi: 12h30", "Hà Nội - Chùa Thầy (2 ngày 1 đêm)", "950.000đ/ Khách", "Nơi khởi hành: Hà Nội", 6, false, "");
let card14 = new CardStruct("./assets/img/location_14.png", 700, "30/3/2024 - Giờ đi: 08h00", "Hà Nội - Phú Quốc ( 5 ngày 4 đêm)", "7.890.000đ/ Khách", "Nơi khởi hành: Hà Nội", 12, false, "");
let card15 = new CardStruct("./assets/img/location_15.png", 335, "12/3/2024 - Giờ đi: 12h30", "Hà Nội - Đà Lạt (4 ngày 3 đêm)", "5.150.000đ/ Khách", "Nơi khởi hành: Hà Nội", 4, false, "");
let cardList = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15];

function renderCardList(){
    let html = "";
    cardList.forEach((value) => {
            html += `<div class="col promotion-search-result__result__item animate__bounceIn animate__animated">
                                <div class="card tour-item">
                                    <div class="position-relative">
                                        <div class="tour-item__image">
                                            <a href="tour_detail.html">
                                                <img
                                                    src="${value.imagePath}"
                                                    class="card-img-top img-fluid"/>
                                            </a>
                                            <span
                                                class="tour-item__image-inner__icon-favorite">
                                            <label><i class="fa-light fa-heart"></i></label>
                                        </span>
                                            <div class="tour-item__image-inner__summary position-absolute">
                                                <div
                                                    class="tour-item__image-inner__summary__rating d-flex justify-content-end mb-2">
                                                    <span>9</span></div>
                                                <div class="tour-item__image-inner__summary__review">
                                                    <p class="mb-1 text-end">${value.concernNumber} quan tâm</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body p-3"> 
                                        <p class="tour-item__date mb-1">${value.startDate}</p>
                                        <h3 class="card-text tour-item__title mb-1"><a> ${value.location.replace("Hà Nội", locationStorage)}</a></h3>
                                        <div class="tour-item__price mb-2 w-100">
                                            <div class="tour-item__price__wrapper">
                                                <div class="tour-item__price--current fix-leftalign"><span
                                                        class="tour-item__price--current__number pe-2 mb-0">${value.price}&nbsp;₫</span>
                                                </div>
                                                ${value.isSale ? 
                                                    `<div class="tour-item__deal mb-2 py-2 px-3 position-relative">
                                                    <p class="tour-item__deal--title mb-1">Giảm thêm 500.000&nbsp;₫ khi
                                                        đặt tour online</p>
                                                    <p class="tour-item__deal--subtitle mb-0">Còn ${value.salePrice}&nbsp;₫</p>
                                                    </div>` : ""}
                                                <p class="tour-item__departure mb-3">Nơi khởi hành: <span
                                                    class="font-weight-bold">${value.startLocation.replace("Hà Nội", locationStorage)}</span></p>

                                                <div class="tour-item__price--current">
                                                    <div class="btn-book"><a href="booking.html" title="Đặt ngay"
                                                            class="btn btn-primary btn-sm btnOptionTour"><i
                                                                class="fal fa-shopping-cart"></i>Đặt ngay</a></div>
                                                    <div class="btn-block">
                                                        <a href="tour_detail.html" class="btn product-item__summary__btn-login product-item__summary__btn-logins">
                                                            Xem chi tiết
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="card-footer tour-item__footer px-3 mb-2 w-100 d-inline-flex justify-content-between align-items-center">
                                        <div
                                            class="tour-item__footer__add-to-compare d-inline-flex align-items-center addcomparegrid">
                                            <i class="fa-light fa-circle-plus"></i><input type="hidden"
                                                value="6ca00847-8a4e-43c9-80fc-775e4c3cf4d8"><a href="#"
                                                id="AddCompare_6ca00847-8a4e-43c9-80fc-775e4c3cf4d8">Thêm vào so sánh</a></div>
                                        <div class="tour-item__footer__available-seat d-inline-flex align-items-center">
                                            <span class="tour-item__footer__available-seat--text me-1">Số chỗ còn
                                                nhận</span><span
                                                class="tour-item__footer__available-seat--number">9</span></div>
                                    </div>
                                </div>
                            </div>`
        })

cardContainer.innerHTML = html;
}

renderCardList();

function getPrice(price){
    return parseInt(price.split("đ")[0].replaceAll(".", ""));
}

sortPriceSelect.addEventListener('change', function (e) {
    if(e.target.value == "asc"){
        cardList.sort((a, b) => getPrice(a.price) - getPrice(b.price));
        renderCardList();
    } else {
        cardList.sort((a, b) => getPrice(b.price) - getPrice(a.price));
        renderCardList();
    }
})

console.log(getPrice(card1.price));

let locationNavigation = document.querySelectorAll('a[href="/tour_list.html"]')
        for (let i = 0; i < locationNavigation.length; i++) {
            locationNavigation[i].addEventListener('click', function (e) {
                e.preventDefault()
                let location = e.target.innerText;
                localStorage.removeItem('location');
                localStorage.setItem('location', location.replace("Du lịch " ,""));
                window.location.href = '/tour_list.html';
            })
        }

    