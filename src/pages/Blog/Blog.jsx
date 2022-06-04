import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "@fontsource/jetbrains-mono";

export default function Blog() {
  return (
    <div>
      <div
        style={{
          padding: "10rem",
          width: "100%",
          position: "fixed",
          backgroundColor: "#7330d3",
        }}
      />
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundColor: "#121212",
          padding: "25rem",
          marginBottom: "-20rem",
        }}
        class = "curve"
      >
        <Card
          variant="outlined"
          style={{
            padding: "25rem",
            zIndex: "100",
            marginTop: "-15rem",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 2px 4px -1px, rgba(0, 0, 0, 0.114) 0px 4px 5px 0px, rgba(0, 0, 0, 0.094) 0px 1px 10px 0px",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              mt={-40}
              variant="h3"
              component="div"
              style={{
                fontFamily: "JetBrains Mono,monospace",
                fontWeight: "400",
                width: "40vw",
              }}
            >
              Deep Learning with Label Differential Privacy
            </Typography>
            <div style={{ textAlign: "left" }}>
              <Typography
                gutterBottom
                mt={6}
                variant="p"
                component="div"
                style={{ width: "40vw" }}
              >
                Over the last several years, there has been an increased focus
                on developing differential privacy (DP) machine learning (ML)
                algorithms. DP has been the basis of several practical
                deployments in industry — and has even been employed by the U.S.
                Census — because it enables the understanding of system and
                algorithm privacy guarantees. The underlying assumption of DP is
                that changing a single user’s contribution to an algorithm
                should not significantly change its output distribution. In the
                standard supervised learning setting, a model is trained to make
                a prediction of the label for each input given a training set of
                example pairs [input1,label1], [inputn, labeln]. In the case of
                deep learning, previous work introduced a DP training framework,
                DP-SGD, that was integrated into TensorFlow and PyTorch. DP-SGD
                protects the privacy of each example pair [input, label] by
                adding noise to the stochastic gradient descent (SGD) training
                algorithm. Yet despite extensive efforts, in most cases, the
                accuracy of models trained with DP-SGD remains significantly
                lower than that of non-private models. DP algorithms include a
                privacy budget, ε, which quantifies the worst-case privacy loss
                for each user. Specifically, ε reflects how much the probability
                of any particular output of a DP algorithm can change if one
                replaces any example of the training set with an arbitrarily
                different one. So, a smaller ε corresponds to better privacy, as
                the algorithm is more indifferent to changes of a single
                example. However, since smaller ε tends to hurt model utility
                more, it is not uncommon to consider ε up to 8 in deep learning
                applications. Notably, for the widely used multiclass image
                classification dataset, CIFAR-10, the highest reported accuracy
                (without pre-training) for DP models with ε = 3 is 69.3%, a
                result that relies on handcrafted visual features. In contrast,
                non-private scenarios (ε = ∞) with learned features have shown
                to achieve &gt;95% accuracy while using modern neural network
                architectures. This performance gap remains a roadblock for many
                real-world applications to adopt DP. Moreover, despite recent
                advances, DP-SGD often comes with increased computation and
                memory overhead due to slower convergence and the need to
                compute the norm of the per-example gradient. In “Deep Learning
                with Label Differential Privacy”, presented at NeurIPS 2021, we
                consider a more relaxed, but important, special case called
                label differential privacy (LabelDP), where we assume the inputs
                (input1, …, inputn) are public, and only the privacy of the
                training labels (label1, …, labeln) needs to be protected. With
                this relaxed guarantee, we can design novel algorithms that
                utilize a prior understanding of the labels to improve the model
                utility. We demonstrate that LabelDP achieves 20% higher
                accuracy than DP-SGD on the CIFAR-10 dataset. Our results across
                multiple tasks confirm that LabelDP could significantly narrow
                the performance gap between private models and their non-private
                counterparts, mitigating the challenges in real world
                applications. We also present a multi-stage algorithm for
                training deep neural networks with LabelDP. Finally, we are
                excited to release the code for this multi-stage training
                algorithm. LabelDP The notion of LabelDP has been studied in the
                Probably Approximately Correct (PAC) learning setting, and
                captures several practical scenarios. Examples include: (i)
                computational advertising, where impressions are known to the
                advertiser and thus considered non-sensitive, but conversions
                reveal user interest and are thus private; (ii) recommendation
                systems, where the choices are known to a streaming service
                provider, but the user ratings are considered sensitive; and
                (iii) user surveys and analytics, where demographic information
                (e.g., age, gender) is non-sensitive, but income is sensitive.
                We make several key observations in this scenario. (i) When only
                the labels need to be protected, much simpler algorithms can be
                applied for data preprocessing to achieve LabelDP without any
                modifications to the existing deep learning training pipeline.
                For example, the classic Randomized Response (RR) algorithm,
                designed to eliminate evasive answer biases in survey
                aggregation, achieves LabelDP by simply flipping the label to a
                random one with a probability that depends on ε. (ii)
                Conditioned on the (public) input, we can compute a prior
                probability distribution, which provides a prior belief of the
                likelihood of the class labels for the given input. With a novel
                variant of RR, RR-with-prior, we can incorporate prior
                information to reduce the label noise while maintaining the same
                privacy guarantee as classical RR. The figure below illustrates
                how RR-with-prior works. Assume a model is built to classify an
                input image into 10 categories. Consider a training example with
                the label “airplane”. To guarantee LabelDP, classical RR returns
                a random label sampled according to a given distribution (see
                the top-right panel of the figure below). The smaller the
                targeted privacy budget ε is, the larger the probability of
                sampling an incorrect label has to be. Now assume we have a
                prior probability showing that the given input is “likely an
                object that flies” (lower left panel). With the prior,
                RR-with-prior will discard all labels with small prior and only
                sample from the remaining labels. By dropping these unlikely
                labels, the probability of returning the correct label is
                significantly increased, while maintaining the same privacy
                budget ε (lower right panel).
              </Typography>
              <Typography
                mt={6}
                variant="p"
                component="div"
                style={{
                  width: "40vw",
                  marginBottom: "-20rem",
                  color: "#5f6368",
                }}
              >
                Submitted by Pasin Manurangsi and Chiyuan Zhang, Research
                Scientists, Google Research
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
