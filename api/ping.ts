export default function handler(req: any, res: any) {
  const ping = process.env.PING_MESSAGE ?? 'ping';
  res.status(200).json({ message: ping });
}

