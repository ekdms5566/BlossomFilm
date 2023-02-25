export const convertURLtoFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    const filename = `${new Date().getTime()}.png`;
    const metadata = { type: `image/png` };
    return new File([data], filename, { type: data.type });
};
