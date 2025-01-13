// app/api/universities/route.js
import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET(req) {
  try {
    const collectionRef = collection(db, "universities");
    const universityCollectionSnapshot = await getDocs(collectionRef);
    const universityList = universityCollectionSnapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name,
      location: doc.data().location,
      established: doc.data().established,
      website: doc.data().website,
      accreditation: doc.data().accreditation
    }));
    universityList.sort((a, b) => a.id - b.id);

    return new Response(JSON.stringify(universityList), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching universities:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch universities" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}