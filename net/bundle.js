/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.msg = (function() {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    var msg = {};

    msg.Location = (function() {

        /**
         * Properties of a Location.
         * @memberof msg
         * @interface ILocation
         * @property {number|null} [fromX] Location fromX
         * @property {number|null} [fromY] Location fromY
         * @property {number|null} [toX] Location toX
         * @property {number|null} [toY] Location toY
         * @property {string|null} [direction] Location direction
         * @property {number|null} [speed] Location speed
         * @property {string|null} [player] Location player
         */

        /**
         * Constructs a new Location.
         * @memberof msg
         * @classdesc Represents a Location.
         * @implements ILocation
         * @constructor
         * @param {msg.ILocation=} [properties] Properties to set
         */
        function Location(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Location fromX.
         * @member {number} fromX
         * @memberof msg.Location
         * @instance
         */
        Location.prototype.fromX = 0;

        /**
         * Location fromY.
         * @member {number} fromY
         * @memberof msg.Location
         * @instance
         */
        Location.prototype.fromY = 0;

        /**
         * Location toX.
         * @member {number} toX
         * @memberof msg.Location
         * @instance
         */
        Location.prototype.toX = 0;

        /**
         * Location toY.
         * @member {number} toY
         * @memberof msg.Location
         * @instance
         */
        Location.prototype.toY = 0;

        /**
         * Location direction.
         * @member {string} direction
         * @memberof msg.Location
         * @instance
         */
        Location.prototype.direction = "";

        /**
         * Location speed.
         * @member {number} speed
         * @memberof msg.Location
         * @instance
         */
        Location.prototype.speed = 0;

        /**
         * Location player.
         * @member {string} player
         * @memberof msg.Location
         * @instance
         */
        Location.prototype.player = "";

        /**
         * Creates a new Location instance using the specified properties.
         * @function create
         * @memberof msg.Location
         * @static
         * @param {msg.ILocation=} [properties] Properties to set
         * @returns {msg.Location} Location instance
         */
        Location.create = function create(properties) {
            return new Location(properties);
        };

        /**
         * Encodes the specified Location message. Does not implicitly {@link msg.Location.verify|verify} messages.
         * @function encode
         * @memberof msg.Location
         * @static
         * @param {msg.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fromX != null && message.hasOwnProperty("fromX"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.fromX);
            if (message.fromY != null && message.hasOwnProperty("fromY"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fromY);
            if (message.toX != null && message.hasOwnProperty("toX"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.toX);
            if (message.toY != null && message.hasOwnProperty("toY"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.toY);
            if (message.direction != null && message.hasOwnProperty("direction"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.direction);
            if (message.speed != null && message.hasOwnProperty("speed"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.speed);
            if (message.player != null && message.hasOwnProperty("player"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.player);
            return writer;
        };

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link msg.Location.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Location
         * @static
         * @param {msg.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Location();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fromX = reader.int32();
                    break;
                case 2:
                    message.fromY = reader.int32();
                    break;
                case 3:
                    message.toX = reader.int32();
                    break;
                case 4:
                    message.toY = reader.int32();
                    break;
                case 5:
                    message.direction = reader.string();
                    break;
                case 6:
                    message.speed = reader.double();
                    break;
                case 7:
                    message.player = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Location message.
         * @function verify
         * @memberof msg.Location
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Location.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromX != null && message.hasOwnProperty("fromX"))
                if (!$util.isInteger(message.fromX))
                    return "fromX: integer expected";
            if (message.fromY != null && message.hasOwnProperty("fromY"))
                if (!$util.isInteger(message.fromY))
                    return "fromY: integer expected";
            if (message.toX != null && message.hasOwnProperty("toX"))
                if (!$util.isInteger(message.toX))
                    return "toX: integer expected";
            if (message.toY != null && message.hasOwnProperty("toY"))
                if (!$util.isInteger(message.toY))
                    return "toY: integer expected";
            if (message.direction != null && message.hasOwnProperty("direction"))
                if (!$util.isString(message.direction))
                    return "direction: string expected";
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (typeof message.speed !== "number")
                    return "speed: number expected";
            if (message.player != null && message.hasOwnProperty("player"))
                if (!$util.isString(message.player))
                    return "player: string expected";
            return null;
        };

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Location
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Location} Location
         */
        Location.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Location)
                return object;
            var message = new $root.msg.Location();
            if (object.fromX != null)
                message.fromX = object.fromX | 0;
            if (object.fromY != null)
                message.fromY = object.fromY | 0;
            if (object.toX != null)
                message.toX = object.toX | 0;
            if (object.toY != null)
                message.toY = object.toY | 0;
            if (object.direction != null)
                message.direction = String(object.direction);
            if (object.speed != null)
                message.speed = Number(object.speed);
            if (object.player != null)
                message.player = String(object.player);
            return message;
        };

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Location
         * @static
         * @param {msg.Location} message Location
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Location.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fromX = 0;
                object.fromY = 0;
                object.toX = 0;
                object.toY = 0;
                object.direction = "";
                object.speed = 0;
                object.player = "";
            }
            if (message.fromX != null && message.hasOwnProperty("fromX"))
                object.fromX = message.fromX;
            if (message.fromY != null && message.hasOwnProperty("fromY"))
                object.fromY = message.fromY;
            if (message.toX != null && message.hasOwnProperty("toX"))
                object.toX = message.toX;
            if (message.toY != null && message.hasOwnProperty("toY"))
                object.toY = message.toY;
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = message.direction;
            if (message.speed != null && message.hasOwnProperty("speed"))
                object.speed = options.json && !isFinite(message.speed) ? String(message.speed) : message.speed;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = message.player;
            return object;
        };

        /**
         * Converts this Location to JSON.
         * @function toJSON
         * @memberof msg.Location
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Location.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Location;
    })();

    msg.Skill = (function() {

        /**
         * Properties of a Skill.
         * @memberof msg
         * @interface ISkill
         * @property {string|null} [skillId] Skill skillId
         * @property {string|null} [direction] Skill direction
         * @property {string|null} [player] Skill player
         */

        /**
         * Constructs a new Skill.
         * @memberof msg
         * @classdesc Represents a Skill.
         * @implements ISkill
         * @constructor
         * @param {msg.ISkill=} [properties] Properties to set
         */
        function Skill(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Skill skillId.
         * @member {string} skillId
         * @memberof msg.Skill
         * @instance
         */
        Skill.prototype.skillId = "";

        /**
         * Skill direction.
         * @member {string} direction
         * @memberof msg.Skill
         * @instance
         */
        Skill.prototype.direction = "";

        /**
         * Skill player.
         * @member {string} player
         * @memberof msg.Skill
         * @instance
         */
        Skill.prototype.player = "";

        /**
         * Creates a new Skill instance using the specified properties.
         * @function create
         * @memberof msg.Skill
         * @static
         * @param {msg.ISkill=} [properties] Properties to set
         * @returns {msg.Skill} Skill instance
         */
        Skill.create = function create(properties) {
            return new Skill(properties);
        };

        /**
         * Encodes the specified Skill message. Does not implicitly {@link msg.Skill.verify|verify} messages.
         * @function encode
         * @memberof msg.Skill
         * @static
         * @param {msg.ISkill} message Skill message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Skill.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.skillId);
            if (message.direction != null && message.hasOwnProperty("direction"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.direction);
            if (message.player != null && message.hasOwnProperty("player"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.player);
            return writer;
        };

        /**
         * Encodes the specified Skill message, length delimited. Does not implicitly {@link msg.Skill.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Skill
         * @static
         * @param {msg.ISkill} message Skill message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Skill.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Skill message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Skill
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Skill} Skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Skill.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Skill();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.skillId = reader.string();
                    break;
                case 2:
                    message.direction = reader.string();
                    break;
                case 3:
                    message.player = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Skill message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Skill
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Skill} Skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Skill.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Skill message.
         * @function verify
         * @memberof msg.Skill
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Skill.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                if (!$util.isString(message.skillId))
                    return "skillId: string expected";
            if (message.direction != null && message.hasOwnProperty("direction"))
                if (!$util.isString(message.direction))
                    return "direction: string expected";
            if (message.player != null && message.hasOwnProperty("player"))
                if (!$util.isString(message.player))
                    return "player: string expected";
            return null;
        };

        /**
         * Creates a Skill message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Skill
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Skill} Skill
         */
        Skill.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Skill)
                return object;
            var message = new $root.msg.Skill();
            if (object.skillId != null)
                message.skillId = String(object.skillId);
            if (object.direction != null)
                message.direction = String(object.direction);
            if (object.player != null)
                message.player = String(object.player);
            return message;
        };

        /**
         * Creates a plain object from a Skill message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Skill
         * @static
         * @param {msg.Skill} message Skill
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Skill.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.skillId = "";
                object.direction = "";
                object.player = "";
            }
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                object.skillId = message.skillId;
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = message.direction;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = message.player;
            return object;
        };

        /**
         * Converts this Skill to JSON.
         * @function toJSON
         * @memberof msg.Skill
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Skill.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Skill;
    })();

    return msg;
})();

module.exports = $root;
