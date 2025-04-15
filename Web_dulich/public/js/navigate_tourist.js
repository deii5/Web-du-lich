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