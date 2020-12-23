

let loadingCount = 0;//只出现一次
let loading;

const startLoading = () => {
    // loading = Toast.loading({
    //     message: '加载中...',
    //     forbidClick: true,
    //     duration: 0,
    // });
};

const endLoading = () => {
    loading.clear()
};


export const showLoading = ()=>{
    if (loadingCount === 0) {
        startLoading();
    }
    loadingCount += 1;
}

export const hideLoading = () => {
    if (loadingCount <= 0) {
        return;
    }
    loadingCount -= 1;
    if (loadingCount === 0) {
        endLoading();
    }
};
