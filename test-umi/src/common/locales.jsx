
import { formatMessage, getLocale } from 'umi/locale';

class Intl {

    //获取抽象语言
    static getLanguage() {
        let extLocale = getLocale();
        switch (extLocale.toLowerCase()) {
            case 'en-us':
                extLocale = 'en_us';
                break;
            default:
                extLocale = 'zh_cn';  
                break;
        }
        return extLocale;
    }

    //获取语言
    static getInputLanguage() {
        let extLocale = getLocale();
        switch (extLocale.toLowerCase()) {
            case 'en-us':
                extLocale = 'en_us';
                break;
            default:
                extLocale = 'zh_cn';
                break;
        }
        return extLocale;
    }

    //获取语言资源
    static formatMessage(key, defaultMessage, options) {
        return formatMessage({ id: key, defaultMessage: defaultMessage }, options);
    }

    //必填
    static requiredMessage(key, defaultMessage) {
        return formatMessage(
            {
                id: 'sys.require'
            },
            {
                name: formatMessage({ id: key, defaultMessage: defaultMessage })
            }
        )
    }

    //最大长度
    static maxLengthMessage(key, defaultMessage, maxlength) {
        return formatMessage(
            {
                id: 'sys.maxlength'
            },
            {
                name: formatMessage({ id: key, defaultMessage: defaultMessage }),
                length: maxlength
            }
        )
    }

    // 最小长度不能为空
    static minLengthMessage(key, defaultMessage, minlength) {

        return formatMessage(
            {
                id: 'sys.minlength'
            },
            {
                name: formatMessage({ id: key, defaultMessage: defaultMessage }),
                length: minlength
            }
        )
    }
    //  验证是否选中
    static isCheckedMessage(key, defaultMessage) {
        return formatMessage(
            {
                id: 'sys.requiredchecked'
            },
            {
                name: formatMessage({ id: key, defaultMessage: defaultMessage })
            }
        )
    }
    //  验证邮箱
    static emailMessage(key, defaultMessage) {
        return formatMessage(
            {
                id: 'sys.txtemail'
            },
            {
                name: formatMessage({ id: key, defaultMessage: defaultMessage }),
            }
        )
    }
    // 不能是中文
    static noChineseMessage(key, defaultMessage) {
        return formatMessage(
            {
                id: 'sys.nochinese'
            },
            {
                name: formatMessage({ id: key, defaultMessage: defaultMessage })
            }
        )
    }
    // 不能为空
    static minLengthEmptyMessage(key, defaultMessage, minlength) {
        return formatMessage(
            {
                id: 'sys.empty'
            },
            {
                name: formatMessage({ id: key, defaultMessage: defaultMessage })
            }
        )
    }


}

export default Intl;