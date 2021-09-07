function Maker() {
    this.float2 = any => {
        if (any === null) return null;
        return Math.round(any * 100) / 100;
    };

    this.cashFloat2 = any => `${this.space(this.float2(any))}$`;

    this.spaceFloat2 = any => this.space(this.float2(any));

    this.date = str => {
        if (!parseInt(str)) return str;
        return new Date(str).toLocaleDateString();
    };

    this.time = str => {
        if (!parseInt(str)) return '';
        const [hours, minutes] = new Date(str).toLocaleTimeString().split(':');
        return `${hours}:${minutes}`;
    };

    this.dateTime = str => `${this.date(str)} ${this.time(str)}`;

    this.space = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    this.capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
}

const maker = new Maker();

export default maker;
