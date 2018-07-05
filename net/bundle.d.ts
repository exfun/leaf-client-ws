import * as $protobuf from "protobufjs";

/** Namespace msg. */
export namespace msg {

    /** Properties of a Location. */
    interface ILocation {

        /** Location fromX */
        fromX?: (number|null);

        /** Location fromY */
        fromY?: (number|null);

        /** Location toX */
        toX?: (number|null);

        /** Location toY */
        toY?: (number|null);

        /** Location direction */
        direction?: (string|null);

        /** Location speed */
        speed?: (number|null);

        /** Location player */
        player?: (string|null);
    }

    /** Represents a Location. */
    class Location implements ILocation {

        /**
         * Constructs a new Location.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ILocation);

        /** Location fromX. */
        public fromX: number;

        /** Location fromY. */
        public fromY: number;

        /** Location toX. */
        public toX: number;

        /** Location toY. */
        public toY: number;

        /** Location direction. */
        public direction: string;

        /** Location speed. */
        public speed: number;

        /** Location player. */
        public player: string;

        /**
         * Creates a new Location instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Location instance
         */
        public static create(properties?: msg.ILocation): msg.Location;

        /**
         * Encodes the specified Location message. Does not implicitly {@link msg.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link msg.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Location;

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Location;

        /**
         * Verifies a Location message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Location
         */
        public static fromObject(object: { [k: string]: any }): msg.Location;

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @param message Location
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Location to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Skill. */
    interface ISkill {

        /** Skill skillId */
        skillId?: (string|null);

        /** Skill direction */
        direction?: (string|null);

        /** Skill player */
        player?: (string|null);
    }

    /** Represents a Skill. */
    class Skill implements ISkill {

        /**
         * Constructs a new Skill.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ISkill);

        /** Skill skillId. */
        public skillId: string;

        /** Skill direction. */
        public direction: string;

        /** Skill player. */
        public player: string;

        /**
         * Creates a new Skill instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Skill instance
         */
        public static create(properties?: msg.ISkill): msg.Skill;

        /**
         * Encodes the specified Skill message. Does not implicitly {@link msg.Skill.verify|verify} messages.
         * @param message Skill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ISkill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Skill message, length delimited. Does not implicitly {@link msg.Skill.verify|verify} messages.
         * @param message Skill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ISkill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Skill message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Skill;

        /**
         * Decodes a Skill message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Skill;

        /**
         * Verifies a Skill message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Skill message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Skill
         */
        public static fromObject(object: { [k: string]: any }): msg.Skill;

        /**
         * Creates a plain object from a Skill message. Also converts values to other types if specified.
         * @param message Skill
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Skill, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Skill to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
