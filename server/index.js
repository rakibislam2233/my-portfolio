import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import express from "express";
import cors from "cors";
const app = express();
const port = 7000;

//parser
app.use(express.json());
app.use(cors());

//mongodb server connection

const uri =
  "mongodb+srv://myProtfolioWebsite:Rakib244348@cluster0.inzz8jh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const myProtfolio = client.db("myProtfolio");
    const skillsCollection = myProtfolio.collection("skills");
    const projectCollection = myProtfolio.collection("project");

    //skills Collection api here
    app.post("/api/v1/skills", async (req, res) => {
      try {
        const { skill } = req.body;
        const result = await skillsCollection.insertOne(skill);
        res.status(200).json({
          success: true,
          message: "Skills added successfully",
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message || "Internale server error",
          error: error,
        });
      }
    });
    app.get("/api/v1/skills", async (req, res) => {
      try {
        const query = {};
        const { category } = req.query;
        if (category) {
          query.category = category;
        }
        const result = await skillsCollection.find(query).toArray();
        res.status(200).json({
          success: true,
          message: "All Skills retrieved successfully",
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message || "Internal server error",
          error: error,
        });
      }
    });
    app.patch("/api/v1/skills/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const query = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = {
          $set: {
            status: "approved",
          },
        };
        const result = await skillsCollection.updateOne(
          query,
          updateDoc,
          options
        );
        res.status(200).json({
          success: true,
          message: "Skill  update successfully",
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message || "Internale server error",
          error: error,
        });
      }
    });
    app.delete("/api/v1/skills/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const query = { _id: new ObjectId(id) };
        const result = await skillsCollection.deleteOne(query);
        res.status(200).json({
          success: true,
          message: "Skill  deleted successfully",
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message || "Internale server error",
          error: error,
        });
      }
    });

    //projects collection api here
    app.post("/api/v1/projects", async (req, res) => {
      try {
        const { project } = req.body;
        const result = await projectCollection.insertOne(project);
        res.status(200).json({
          success: true,
          message: "Project added successfully",
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message || "Internale server error",
          error: error,
        });
      }
    });

    app.get("/api/v1/projects", async (req, res) => {
      try {
        const query = {};
        const { category } = req.query;
        if (category) {
          query.category = category;
        }
        const result = await projectCollection.find(query).toArray();
        res.status(200).json({
          success: true,
          message: "All Project retrive successfully",
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message || "Internale server error",
          error: error,
        });
      }
    });
    app.delete("api/v1/project/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const query = { _id: new ObjectId(id) };
        const result = await projectCollection.deleteOne(query);
        res.status(200).json({
          success: true,
          message: "Project  deleted successfully",
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message || "Internale server error",
          error: error,
        });
      }
    });
    
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
