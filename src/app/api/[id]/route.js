// app/api/[id]/route.js
import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const docRef = doc(db, "universities", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return new Response(JSON.stringify({ error: "University not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    const universityData = {
      id: docSnap.id,
      name: docSnap.data().name,
      location: docSnap.data().location,
      established: docSnap.data().established,
      website: docSnap.data().website,
      accreditation: docSnap.data().accreditation
    };

    return new Response(JSON.stringify(universityData), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching university:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch university" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}