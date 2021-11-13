function formatDuration (seconds) {
    if (seconds === 0) {
        let result = 'now';
        return result
    }
  
    let year = Math.floor(seconds / 31536000)
    let day = Math.floor((seconds - year * 31536000) / 86400)
    let hour = Math.floor((seconds - day * 86400 - year * 31536000) / 3600)
    let sec = seconds % 60;
    let minute = (seconds - day * 86400 - hour * 3600 - sec - year * 31536000) / 60

    let post_hour = hour === 1 ? ' hour, ' : ' hours, ';
    let post_minute = minute === 1 ? ' minute' : ' minutes';
    let post_sec = sec === 1 ? ' second' : ' seconds';
    let post_day = day === 1 ? ' day, ' : ' days, ';
    let post_year = year === 1 ? ' year, ' : ' years, ';
    
    let new_year = year === 0 ? "" : year   
    let new_post_year = year === 0 ? "" : post_year   

    let new_day = day === 0 ? "" : day   
    let new_post_day = day === 0 ? "" : post_day  

    let new_hour = hour === 0 ? "" : hour   
    let new_post_hour = hour === 0 ? "" : post_hour

    let new_minute = minute === 0 ? "" : minute   
    let new_post_minute = minute === 0 ? "" : post_minute   

    let new_sec = sec === 0 ? "" : sec   
    let new_post_sec = sec === 0 ? "" : post_sec

    let pre_sec = ((year + hour + minute + day) > 0) && (sec > 0) ? ' and ' : ''
    
let result = `${new_year}${new_post_year}${new_day}${new_post_day}${new_hour}${new_post_hour}${new_minute}${new_post_minute}${pre_sec}${new_sec}${new_post_sec}`;

    return result
}
console.log(formatDuration(31536000))
 // returns "1 hour, 1 minute and 2 seconds"
