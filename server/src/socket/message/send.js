export function sendMessage({io, socket}) {
    return async (payload, callback) => {
        /**
         * first gather details of the message i.e., the sender, the room and the content
         */
        /**
         * Insert in the db
         */
        /**
         * Broadcast the message to the room (emit)
         */
        /**
         * Callback should send success if all done successfully or return error in case any step failed.
         */
    }
}