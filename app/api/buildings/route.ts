import { NextRequest, NextResponse } from "next/server";

// Detailed building data
const buildings = [
  { 
    id: 1, 
    name: "Business Faculty", 
    code: "BUS", 
    floors: 4, 
    type: "Academic" 
  },
  { 
    id: 2, 
    name: "Science Faculty", 
    code: "SCI", 
    floors: 5, 
    type: "Academic" 
  },
  { 
    id: 3, 
    name: "Engineering Faculty", 
    code: "ENG", 
    floors: 6, 
    type: "Academic" 
  },
  { 
    id: 4, 
    name: "Arts Faculty", 
    code: "ART", 
    floors: 3, 
    type: "Academic" 
  },
  { 
    id: 5, 
    name: "Administration Building", 
    code: "ADM", 
    floors: 2, 
    type: "Administration" 
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(buildings);
}
