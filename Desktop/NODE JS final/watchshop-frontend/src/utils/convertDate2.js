const convertDate = (d) => {
    const date = new Date(d);

    // Lấy thông tin ngày, tháng, năm
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();

    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    // Tạo chuỗi ngày tháng định dạng 'DD-MM-YYYY'
    const formattedDate = `${day}/${month}/${year} ${hour}:${minute}`;
    return formattedDate;
}
export default convertDate;