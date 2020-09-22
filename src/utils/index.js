import { FILE_TYPE, STYLED, STYLED1 } from 'consts';

const randomAlphabets = () => Math.random().toString(36).substring(7);

const saveFile = (blobFile, fileName = randomAlphabets(), type = FILE_TYPE.EXPORT_FILE_PDF) => {
    const data = new Blob([blobFile], { type });
    const fileURL = window.URL.createObjectURL(data);
    const tempLink = document.createElement('a');
    tempLink.href = fileURL;
    tempLink.setAttribute('download', fileName);
    tempLink.click();
};

const openFile = (blobFile, type = FILE_TYPE.EXPORT_FILE_PDF) => {
    const data = new Blob([blobFile], { type });
    const fileURL = window.URL.createObjectURL(data);
    window.open(fileURL);
};

const truncateToDecimals = (num, dec = 1) => {
    const calcDec = 10 ** dec;
    return Math.trunc(num * calcDec) / calcDec;
};

const roundToExchangeFee = (inputValue) => {
    const decimals = Number(inputValue) - Math.floor(inputValue);

    const percentile = Math.trunc(decimals.toFixed(1) * 10);
    if (Number(inputValue) > 20) {
        const outputValue = percentile > 0 ? 1 : 0;
        return Math.trunc(inputValue) + outputValue;
    }
    if (percentile === 0) {
        return Number(inputValue);
    }
    if (percentile === 0) {
        return Math.trunc(inputValue) + 0.5;
    }
    if (percentile > 0 && percentile <= 4) {
        return Math.trunc(inputValue) + 0.5;
    }
    if (percentile > 5) {
        return Math.trunc(inputValue) + 1;
    }
    return Number(inputValue);
};

const renderContent = (data, key) => {
    switch (key) {
        case STYLED.HTML:
            return data?.html;
        case STYLED.CSS:
            return data?.css;
        case STYLED.SASS:
            return data?.sass;
        case STYLED1.example1:
            return data?.Example1;
        case STYLED1.example2:
            return data?.Example2;
        case STYLED1.bem:
            return data?.BEM;
        default:
            return null;
    }
};

export { saveFile, openFile, randomAlphabets, truncateToDecimals, roundToExchangeFee, renderContent };
