let fn = {
    handleCount: function(plusId, minusId, countId){
        let count = 0;
        $(minusId).click(function(){
            if(count >0){
                count --;
                $(countId).text(count);
            } else {
                count = 0;
                $(countId).text(count);
            }
        })
        
        $(plusId).click(function(){
            count ++;
            $(countId).text(count);
        })
    },
    validate: function(){
        let validateResult = true;
        let adult = $("#adult").text().toString();
        let children = $("#children").text().toString();
        let smallchildren = $("#smallchildren").text().toString();
        let baby = $("#baby").text().toString();

        let contactName = $("#contactName").val();
        let contactMail = $("#contactMail").val();
        let contactPhone = $("#contactPhone").val();

        let familyName = $("#familyName").val();
        let fullname = $("#fullName").val();
        let birthDate = $("#birth-date-id").val();
        let birthMonth = $("#birth-month-id").val();
        let birthYear = $("#birth-year-id").val();

        if(familyName == "" || fullname == "" || birthDate == "" || birthMonth == "" || birthYear == ""){
            Toastify({
                text: "Vui lòng nhập đầy đủ thông tin thông tin hành khách!",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", 
                position: "right", 
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(64.4deg, #e01600 21.33%, #fe2214 67.61%)",
                }
              }).showToast();
              validateResult = false;
        } 
        if(contactName == "" || contactMail == "" || contactPhone == ""){
            Toastify({
                text: "Vui lòng nhập đầy đủ thông tin thông tin liên lạc!",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", 
                position: "right", 
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(64.4deg, #e01600 21.33%, #fe2214 67.61%)",
                }
              }).showToast();
              validateResult = false;
        }  
        if(adult == "0" && children == "0" && smallchildren == "0" && baby == "0"){
            Toastify({
                text: "Vui lòng nhập số lượng người tham gia tour!",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", 
                position: "right", 
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(64.4deg, #e01600 21.33%, #fe2214 67.61%)",
                }
              }).showToast();
              validateResult = false;
        }
        if(validateResult){
            Swal.fire({
                icon: 'success',
                title: 'Thanh toán thành công'
              })    
        }
    },
    event: function(){
        $(".btn-order").click(function(event){
            fn.validate();

            $("form").submit(function(e) {
                e.preventDefault();
            });

            $("#form").submit();   
            $("#form1").submit();    
            $("#form2").submit();   
            $("#form3").submit();    
            $("#form4").submit();   
            $("#form5").submit();   
        })
        
    },
    jqueryValidate: function(){
        $(document).ready(function() {
            $("#form").validate({
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules: {
                    fullName: {
                        required: true,
                        maxlength: 30
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    phone: {
                        required: true,
                        number: true
                    },
                    address: {
                        required: true
                    }
            
                },
                messages: {
                    fullName: {
                        required: 'Vui lòng nhập họ tên',
                        maxlength: 'Họ tên không được vượt quá 30 ký tự'
                    },
                    email: {
                      required: 'Vui lòng nhập địa chỉ email',
                      email: 'Vui lòng nhập đúng định dạng email'
                    },
                    phone: {
                      required: 'Vui lòng nhập số điện thoại',
                      number: 'Vui lòng nhập đúng định dạng số điện thoại'
                    },
                    address: {
                        required: 'Vui lòng nhập địa chỉ'
                    }   
                }
            });
            $("#form1").validate({
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules: {
                    fullName: {
                        required: true,
                        maxlength: 30
                    }
                },
                messages: {
                    fullName: {
                        required: 'Vui lòng nhập họ tên',
                        maxlength: 'Họ tên không được vượt quá 30 ký tự'
                    }
                }         
            });
            $("#form2").validate({
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules: {
                    fullName: {
                        required: true,
                        maxlength: 30
                    }
                },
                messages: {
                    fullName: {
                        required: 'Vui lòng nhập họ tên',
                        maxlength: 'Họ tên không được vượt quá 30 ký tự'
                    }
                }         
            });
            $("#form3").validate({
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules: {
                    dayOfMonth: {
                        required: true
                    }
                },
                messages: {
                    dayOfMonth: {
                        required: 'Vui lòng nhập ngày sinh',
                    }
                }         
            });
            $("#form4").validate({
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules: {
                    monthOfYear: {
                        required: true
                    }
                },
                messages: {
                    monthOfYear: {
                        required: 'Vui lòng nhập tháng sinh',
                    }
                }         
            });
            $("#form5").validate({
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules: {
                    yearOfYear: {
                        required: true
                    }
                },
                messages: {
                    yearOfYear: {
                        required: 'Vui lòng nhập năm sinh',
                    }
                }         
            });
            
        });
    }
}
fn.jqueryValidate();
fn.event();
fn.handleCount("#adultPlus", "#adultMinus", "#adult");
fn.handleCount("#childrenPlus", "#childrenMinus", "#children");
fn.handleCount("#smallchildrenPlus", "#smallchildrenMinus", "#smallchildren");
fn.handleCount("#babyPlus", "#babyMinus", "#baby");