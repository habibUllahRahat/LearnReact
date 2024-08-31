/* eslint-disable react/prop-types */

import { Component } from "react";

export default class Button extends Component {

    shouldComponentUpdate(nextProps) {
        const { changefn: currentChange, locale: currentLocale } = this.props
        const { changefn: nextChange, locale: nextLocale } = nextProps
        if (currentChange === nextChange && currentLocale === nextLocale) {
            return false;
        }
        return true


    }
    render() {
        const { changefn, locale } = this.props
        return (
            <>
                <br />
                <button type="button" onClick={() => changefn(locale)}>Click Here</button>
            </>

        )
    }
};
