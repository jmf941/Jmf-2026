import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";

export async function GET(request: NextRequest) {
  try {
    // Läs senaste loggar från filen
    const logFile = "/tmp/jmf.log";
    let logs: string[] = [];
    
    try {
      const content = readFileSync(logFile, "utf-8");
      logs = content.split("\n").filter(line => line.trim()).slice(-100); // Senaste 100 raderna
    } catch (e) {
      logs = ["Inga loggar tillgängliga än..."];
    }

    return NextResponse.json({ logs });
  } catch (error) {
    return NextResponse.json(
      { error: "Kunde inte läsa loggar" },
      { status: 500 }
    );
  }
}
