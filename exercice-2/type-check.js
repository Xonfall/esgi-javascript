function type_check_v1(input, type) {
    if (typeof input === type) {
        return true;
    } else {
        return false;
    }
}

function type_check_v2(value, object) {
    for (var prop in object) {
        if (prop === 'type') {
            if (typeof value !== object[prop]) {
                return false;
            }
        }

        if (prop === 'value') {
            if (value !== object[prop]) {
                return false;
            }
        }

        if (prop === 'enum') {
            if (!object[prop].indexOf(value)) {
                return false;
            }
        }
    }

    return true;
}


console.log(type_check_v2("foo", {type: "string", value: "foo"}));
console.log(type_check_v2({prop1: 1}, {type: "object"}))
console.log(type_check_v2("foo", {type: "string", value: "foo"}))
console.log(type_check_v2("bar", {type: "string", value: "foo"}))
console.log(type_check_v2(3, {enum: ["foo", "bar", 3]}))