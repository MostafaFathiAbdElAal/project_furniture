// Wait five minutes after each request before requesting a new one 
export function useCheckTime() {
    const checkTime = () => {
        const submitTime = localStorage.getItem('submitTime');
        if (!submitTime) {
            localStorage.setItem('submitTime', Date.now());
            return true;
        }
        const currentTime = Date.now();
        const timeDifference = currentTime - parseInt(submitTime);
        if (timeDifference >= 300000) {
            localStorage.setItem('submitTime', currentTime);
            return true;
        } else {           
            return false;
        }
    };
    return checkTime() ;
}