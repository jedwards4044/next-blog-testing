//automatically receives two parameters request/response
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' })
}
