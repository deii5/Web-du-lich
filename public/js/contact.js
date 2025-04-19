$(document).ready(function () {
    $('#contactForm').on('submit', function (event) {
        event.preventDefault();

        $('#formMessage').html('');

        // Get form data
        const name = $('#contactName').val().trim();
        const email = $('#contactEmail').val().trim();
        const subject = $('#contactSubject').val().trim();
        const message = $('#contactMessage').val().trim();

        const errors = [];
        if (!name) {
            errors.push('Vui lòng nhập Họ và Tên');
        }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.push('Vui lòng nhập Địa chỉ Email hợp lệ.');
        }
        if (!subject) {
            errors.push('Vui lòng nhập chủ đề.');
        }
        if (!message) {
            errors.push('Vui lòng nhập nội dung tin nhắn.');
        }

        if (errors.length > 0) {
            const errorMessage = '<div class="alert alert-danger">' + errors.join('<br>') + '</div>';
            $('#formMessage').html(errorMessage);
        } else {
            $('#formMessage').html('<div class="alert alert-success">Tin nhắn của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại sớm.</div>');
            $('#contactForm')[0].reset();
        }
    });
});