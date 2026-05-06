import { Resend } from 'resend';
import { NextResponse } from 'next/server';

let resendClient: Resend | null = null;

function getResend() {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY || 're_JeAbQxMU_AB7bqb1SpKHanv4fvdtDqjfM';
    if (!key) {
      throw new Error('RESEND_API_KEY environment variable is required');
    }
    resendClient = new Resend(key);
  }
  return resendClient;
}

export async function POST(req: Request) {
  try {
    const { nombre, whatsapp, correo, expenses, zone, panelType, projectType } = await req.json();

    const data = await getResend().emails.send({
      from: 'Sol Brillante <contacto@solbrillantemx.com>',
      to: 'contacto@solbrillantemx.com',
      subject: 'Nuevo presupuesto solicitado',
      html: `
        <h1>Nuevo presupuesto solicitado</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Tipo de Proyecto:</strong> ${projectType}</p>
        <p><strong>Gasto Bimestral:</strong> ${expenses}</p>
        <p><strong>Zona:</strong> ${zone}</p>
        <p><strong>Tipo de Panel:</strong> ${panelType}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
