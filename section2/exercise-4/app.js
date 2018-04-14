new Vue({
    el: '#exercise',
    data: {
        effectClasses: {
            highlight: false,
            shrink: true
        },
        userClass: '',
        isVisible: false,
        myStyle: {
            width: '150px',
            height: '150px',
            backgroundColor: 'gray'
        },
        progressBar: {
            width: '0%',
            backgroundColor: 'orange'
        }
    },
    methods: {
        startEffect: function () {
           setInterval(() => {
              this.effectClasses.highlight = !this.effectClasses.highlight;
               this.effectClasses.shrink = !this.effectClasses.shrink;
           }, 1000)
        },
        startProgress: function () {
            let width = 0;

            let progressBar = setInterval(() => {
                width = width + 10;

                if (width < 101) {
                    this.progressBar.width = width + '%';
                } else {
                    clearInterval(progressBar);
                }
            }, 500);
        }
    }
});
