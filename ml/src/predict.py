"""
CLI and Standalone Prediction Interface.
Allows running phishing predictions directly from the command line.
"""

import sys
import argparse
import json
import os

# Ensure project root is in sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))

from backend.services.prediction_service import prediction_service


def predict(url: str) -> dict:
    """
    Predicts threat level and explanations for a URL.
    """
    return prediction_service.predict_url(url)


def main():
    parser = argparse.ArgumentParser(description="URL-Based Phishing Detection Predictor")
    parser.add_argument("url", nargs="?", help="URL to classify")
    parser.add_argument("--json", action="store_true", help="Output raw JSON")
    args = parser.parse_args()

    if not args.url:
        print("Please provide a URL to classify. Example: python -m ml.src.predict https://example.com")
        sys.exit(1)

    try:
        result = predict(args.url)
        if args.json:
            print(json.dumps(result, indent=2))
        else:
            print("\n================ Phishing Scan Result ================")
            print(f"URL:            {result['url']}")
            print(f"Prediction:     {result['prediction']}")
            print(f"Probability:    {result['probability']:.4f}")
            print(f"Risk Level:     {result['risk_level']}")
            print(f"Risk Score:     {result['risk_score']} / 100")
            print(f"Model Version:  {result['model_version']}")
            print(f"Scan Time:      {result['processing_time_ms']} ms")
            if result['reasons']:
                print("\nDetection Reasons:")
                for r in result['reasons']:
                    print(f"  [-] {r}")
            else:
                print("\nDetection Reasons: None (Benign/Legitimate profile)")
            print("=======================================================\n")
    except Exception as e:
        print(f"Error analyzing URL: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
